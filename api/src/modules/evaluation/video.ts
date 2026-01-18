import { EvaluationResult } from "../../types/evaluation";

export function evaluateVideo(_content: unknown): EvaluationResult {
  return {
    contentType: "video",
    signals: [],
  };
}
