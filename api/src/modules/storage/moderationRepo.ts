import { db } from "../../config";

export interface SaveModerationParams {
  id: string;
  requestKey?: string;

  userId: string;
  source: string;

  contentType: "text" | "image" | "video";
  content?: string;
  contentRef?: string;

  evaluation: unknown;

  decision: "allow" | "block" | "flag";
  reason: string;
  policyVersion: string;

  metadata?: unknown;
}

export async function saveModerationRequest(
  params: SaveModerationParams,
): Promise<void> {
  const {
    id,
    requestKey,
    userId,
    source,
    contentType,
    content,
    contentRef,
    evaluation,
    decision,
    reason,
    policyVersion,
    metadata,
  } = params;

  await db.query(
    `
    INSERT INTO moderation_requests (
      id,
      request_key,
      user_id,
      source,
      content_type,
      content,
      content_ref,
      evaluation,
      decision,
      reason,
      policy_version,
      metadata
    ) VALUES (
      $1, $2, $3, $4, $5, $6,
      $7, $8, $9, $10, $11, $12
    )
    `,
    [
      id,
      requestKey ?? null,
      userId,
      source,
      contentType,
      content ?? null,
      contentRef ?? null,
      evaluation,
      decision,
      reason,
      policyVersion,
      metadata ?? null,
    ],
  );
}
