import { db } from "../../config";

interface SaveModerationParams {
  id: string;
  content: string;
  contentType: string;
  userId: string;
  source: string;
  decision: string;
  reason: string;
}

export async function saveModerationRequest(
  params: SaveModerationParams,
): Promise<void> {
  const { id, content, contentType, userId, source, decision, reason } = params;

  await db.query(
    `
    INSERT INTO moderation_requests
      (id, content, content_type, user_id, source, decision, reason)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
    `,
    [id, content, contentType, userId, source, decision, reason],
  );
}
