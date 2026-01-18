import { FastifyInstance } from "fastify";
import { randomUUID } from "crypto";

import { evaluators } from "../modules/evaluation/registry";
import { decide } from "../modules/decision/decide";
import { saveModerationRequest } from "../modules/storage/moderationRepo";
import { ContentType, EvaluationResult } from "../types/evaluation";

interface ModerateRequestBody {
  content: unknown;
  contentType: ContentType;
  context: {
    userId: string;
    source: string;
  };
  requestKey?: string;
}

export async function moderateRoute(fastify: FastifyInstance) {
  fastify.post<{ Body: ModerateRequestBody }>("/moderate", async (request) => {
    const { content, contentType, context, requestKey } = request.body;

    const requestId = randomUUID();

    const evaluator = evaluators[contentType];
    if (!evaluator) {
      return {
        requestId,
        decision: "block",
        reason: `Unsupported content type: ${contentType}`,
        policyVersion: "v1",
      };
    }

    // 1. Evaluate (facts)
    const evaluation: EvaluationResult = evaluator(content);

    // 2. Decide (policy)
    const decisionResult = decide(evaluation);

    // 3. Persist (audit)
    await saveModerationRequest({
      id: requestId,
      requestKey,
      userId: context.userId,
      source: context.source,
      contentType,
      content: typeof content === "string" ? content : undefined,
      evaluation,
      decision: decisionResult.action,
      reason: decisionResult.reason,
      policyVersion: decisionResult.policyVersion,
    });

    // 4. Respond
    return {
      requestId,
      decision: decisionResult.action,
      reason: decisionResult.reason,
      policyVersion: decisionResult.policyVersion,
    };
  });
}
