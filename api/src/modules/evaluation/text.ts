import { EvaluationResult } from "../../types/evaluation";

const BANNED_KEYWORDS = ["spam", "scam", "abuse", "hate"];

export function evaluateText(content: unknown): EvaluationResult {
  const text = String(content).toLowerCase();

  for (const keyword of BANNED_KEYWORDS) {
    if (text.includes(keyword)) {
      return {
        contentType: "text",
        signals: [
          {
            type: "keyword",
            severity: "high",
            description: `Contains banned keyword: "${keyword}"`,
          },
        ],
      };
    }
  }

  return {
    contentType: "text",
    signals: [],
  };
}
