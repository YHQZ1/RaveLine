CREATE TABLE IF NOT EXISTS moderation_requests (
  id UUID PRIMARY KEY,
  content TEXT NOT NULL,
  content_type TEXT NOT NULL,
  user_id TEXT NOT NULL,
  source TEXT NOT NULL,
  decision TEXT NOT NULL,
  reason TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
