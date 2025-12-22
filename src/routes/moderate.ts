import { Router } from "express";
import crypto from "crypto";

const router = Router();

router.post("/", (req, res) => {
  const { content, contentType, orgId } = req.body;

  if (
    typeof content !== "string" ||
    content.trim().length === 0 ||
    contentType !== "text" ||
    typeof orgId !== "string"
  ) {
    return res.status(400).json({
      error: "INVALID_REQUEST",
      message: "Invalid moderation request payload",
    });
  }

  // fake job id for now
  const jobId = crypto.randomUUID();

  return res.status(202).json({
    jobId,
    status: "PENDING",
  });
});

export default router;
