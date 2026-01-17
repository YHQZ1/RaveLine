# Raveline

**Raveline** is a backend-first content moderation service designed to act as a **pre-publish Trust & Safety layer** for applications that handle user-generated content such as chats, comments, forums, and live streams.

It evaluates user input (currently text) against moderation rules, produces an explainable decision (`allow` / `block`), and persists every moderation event for auditability and future review.

Raveline is built to be **simple first**, with a clear path toward **asynchronous, scalable moderation pipelines**.

---

## Problem Statement

Modern applications rely heavily on user-generated content:

- chat systems
- comment sections
- community forums
- live streams
- social feeds

Without a dedicated moderation layer, applications risk:

- spam floods
- abusive or harmful language
- policy violations
- degraded user experience
- legal and platform compliance issues

Raveline solves this by acting as a **middleware service** that inspects content _before_ it enters the main message or event stream.

---

## What Raveline Does (Current State)

- Accepts content via a `/moderate` API
- Evaluates text against moderation rules
- Produces a deterministic moderation decision
- Attaches a clear, human-readable reason
- Generates a unique request ID for traceability
- Persists every moderation request and decision to PostgreSQL

This forms the foundation of a Trust & Safety system with **auditability, explainability, and extensibility**.

---

## How Raveline Is Intended to Be Used

Raveline is designed to be called from backend services.

Typical flow:

1. Your application receives a user message
2. Before publishing it, you call Raveline’s `/moderate` endpoint
3. Raveline returns a decision (`allow` or `block`)
4. Your application enforces the decision

Raveline does **not** handle message delivery — it only decides _whether_ content should proceed.

---

## API Overview

### `POST /moderate`

#### Request Body

```json
{
  "content": "this is a message",
  "contentType": "text",
  "context": {
    "userId": "u42",
    "source": "chat"
  }
}
```

#### Response

```json
{
  "requestId": "uuid",
  "decision": "allow",
  "reason": "Content passed all checks"
}
```

If a policy violation is detected:

```json
{
  "requestId": "uuid",
  "decision": "block",
  "reason": "Contains banned keyword: \"spam\""
}
```

---

## Architecture Overview

Raveline follows a **clean, layered decision pipeline**:

```
HTTP Request
  → Ingestion
    → Evaluation
      → Decision Engine
        → Persistence
          → HTTP Response
```

Key architectural principles:

- Pure logic is isolated from side effects
- Decision-making is deterministic and explainable
- Persistence happens only after final decisions
- Request IDs enable full traceability

---

## Current Feature Set

- Text moderation (keyword-based, scaffolding logic)
- Deterministic decision engine
- Request-level traceability using UUIDs
- PostgreSQL persistence for audit logs
- Clear separation of concerns across modules

---

## Project Structure

```
raveline/
├── README.md
├── migrations/
│   └── 001_create_moderation_requests.sql
└── src/
    ├── server.ts
    ├── config/
    │   └── index.ts
    ├── routes/
    │   └── moderate.ts
    ├── types/
    │   └── moderation.ts
    └── modules/
        ├── ingestion/
        │   └── ingest.ts
        ├── evaluation/
        │   └── textEvaluator.ts
        ├── decision/
        │   └── decide.ts
        └── storage/
            └── moderationRepo.ts
```

---

## Local Development Setup

### Prerequisites

- Node.js (18+)
- Docker
- PostgreSQL client (`psql`)

### Start PostgreSQL (Docker)

```bash
docker run --name raveline-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=raveline \
  -p 5433:5432 \
  -d postgres
```

### Apply Database Migration

```bash
psql postgresql://postgres:postgres@localhost:5433/raveline \
  -f migrations/001_create_moderation_requests.sql
```

### Install Dependencies

```bash
npm install
```

### Run the Service

```bash
npx tsx src/server.ts
```

---

## Design Philosophy

- **Simple before scalable**
- **Explicit over implicit**
- **Pure logic in the core**
- **Side effects at the edges**
- **Auditability by default**

The system is intentionally synchronous today, but structured to evolve into asynchronous and distributed workflows without architectural rewrites.

---

## Roadmap

Planned next steps:

- Moderation lifecycle (`pending → decided`)
- Asynchronous moderation support
- Multiple evaluators (spam, abuse, images)
- Rule-based policy engine
- Human review workflows
- SDK for easy backend integration

---

## Status

**Active development**
This project is currently in early-stage development and not production-ready.
