export type ContentType = "text" | "image" | "video";

export type Severity = "low" | "medium" | "high";

export interface EvaluationSignal {
  type: string;
  severity: Severity;
  description: string;
}

export interface EvaluationResult {
  contentType: ContentType;
  signals: EvaluationSignal[];
}
