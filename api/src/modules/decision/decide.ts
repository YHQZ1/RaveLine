import { TextEvaluationResult } from "../evaluation/textEvaluator";

export type ModerationDecision = "allow" | "block";

export interface DecisionResult {
  decision: ModerationDecision;
  reason: string;
}

export function decideFromTextEvaluation(
  evaluation: TextEvaluationResult,
): DecisionResult {
  if (evaluation.flagged) {
    return {
      decision: "block",
      reason: evaluation.reason,
    };
  }

  return {
    decision: "allow",
    reason: "Content passed all checks",
  };
}
