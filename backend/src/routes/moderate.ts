import { FastifyInstance } from "fastify";
import { evaluateText } from "../modules/evaluation/textEvaluator";
import { decideFromTextEvaluation } from "../modules/decision/decide";
import { saveModerationRequest } from "../modules/storage/moderationRepo";
import { randomUUID } from "crypto";

interface ModerateRequestBody {
  content: string;
  contentType: "text";
  context: {
    userId: string;
    source: string;
  };
}

export async function moderateRoute(fastify: FastifyInstance) {
  fastify.post<{ Body: ModerateRequestBody }>("/moderate", async (request) => {
    const requestId = randomUUID();

    const { content, contentType, context } = request.body;

    if (contentType !== "text") {
      return {
        requestId,
        decision: "block",
        reason: "Unsupported content type",
      };
    }

    const evaluationResult = evaluateText(content);
    const decisionResult = decideFromTextEvaluation(evaluationResult);

    await saveModerationRequest({
      id: requestId,
      content,
      contentType,
      userId: context.userId,
      source: context.source,
      decision: decisionResult.decision,
      reason: decisionResult.reason,
    });

    return {
      requestId,
      decision: decisionResult.decision,
      reason: decisionResult.reason,
    };
  });
}
