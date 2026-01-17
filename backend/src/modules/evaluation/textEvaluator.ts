export interface TextEvaluationResult {
  flagged: boolean;
  reason: string;
}

const BANNED_KEYWORDS = ["spam", "scam", "abuse", "hate"];

export function evaluateText(content: string): TextEvaluationResult {
  const normalized = content.toLowerCase();

  for (const keyword of BANNED_KEYWORDS) {
    if (normalized.includes(keyword)) {
      return {
        flagged: true,
        reason: `Contains banned keyword: "${keyword}"`,
      };
    }
  }

  return {
    flagged: false,
    reason: "No policy violations detected",
  };
}
