import { EvaluationResult } from "../../types/evaluation";

export type ModerationAction = "allow" | "block" | "flag";

export interface DecisionResult {
  action: ModerationAction;
  reason: string;
  policyVersion: string;
}

const POLICY_VERSION = "v1";

export function decide(evaluation: EvaluationResult): DecisionResult {
  const highSeveritySignal = evaluation.signals.find(
    (signal: { severity: string }) => signal.severity === "high",
  );

  if (highSeveritySignal) {
    return {
      action: "block",
      reason: highSeveritySignal.description,
      policyVersion: POLICY_VERSION,
    };
  }

  return {
    action: "allow",
    reason: "Content passed moderation checks",
    policyVersion: POLICY_VERSION,
  };
}
