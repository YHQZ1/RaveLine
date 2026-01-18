import { EvaluationResult } from "../../types/evaluation";

export function evaluateImage(_content: unknown): EvaluationResult {
  return {
    contentType: "image",
    signals: [],
  };
}
