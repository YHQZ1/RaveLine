# RAVELINE

### Distributed AI-Powered Content Moderation Platform

Raveline is a distributed, event-driven content moderation system that analyzes text and images in real time using microservices, Kafka pipelines, and machine learning models. It provides a scalable Trust & Safety backend that any application can integrate with through a simple moderation API.

---

## Features

* Distributed microservice architecture
* Kafka-based event streaming pipeline
* Machine learning models for text and image moderation
* Customizable rule engine for organization-specific policies
* Spam and bot detection using Redis-based heuristics
* Decision aggregation across multiple services
* Audit logging using PostgreSQL
* Metadata storage using MongoDB
* Next.js dashboard for moderation and analytics
* Kubernetes-ready deployment
* CI/CD support through GitHub Actions

---

## System Overview

Raveline processes content through an event-driven workflow:

1. **API Gateway** receives text or images through a `/moderate` endpoint.
2. **Ingestion Service** publishes moderation requests into Kafka topics.
3. **Text Moderation**, **Image Moderation**, **Rules Engine**, and **Spam Detector** consume events independently.
4. Each service publishes classification results back into Kafka.
5. **Decision Aggregator** merges all outputs to produce a final moderation verdict.
6. Results and audit logs are stored in PostgreSQL and MongoDB.
7. **Dashboard** provides a UI for human review, rule configuration, and analytics.

---

## Architecture

Raveline uses a hybrid architecture designed for scale and fault tolerance:

* **API Layer:** Node.js + Express behind NGINX
* **Event Bus:** Apache Kafka
* **Datastores:** PostgreSQL, MongoDB, Redis
* **Microservices:** Independent Node.js services for moderation, rules, decisioning, and ingestion
* **Dashboard:** Next.js
* **Deployment:** Docker + Kubernetes

A detailed architecture diagram will be added soon.

---

## Tech Stack

**Backend:** Node.js, Express
**Event Streaming:** Kafka
**Databases:** PostgreSQL, MongoDB, Redis
**Machine Learning:** ONNX/TensorFlow-based text and image models
**Infrastructure:** Docker, Kubernetes
**CI/CD:** GitHub Actions
**Frontend:** Next.js

---

## Repository Structure (initial)

```
raveline/
  services/
    api-gateway/
    ingestion/
    text-moderation/
    image-moderation/
    rules-engine/
    spam-detector/
    decision/
    audit-log/
  dashboard/
  infra/
    docker-compose.yaml
  docs/
  README.md
  LICENSE
```

---

## Getting Started (MVP Setup)

1. Clone the repository
2. Install dependencies for each service
3. Set up Docker and Kafka locally
4. Run the system using `docker-compose`
5. Send a sample request to `/moderate`

A complete setup guide will be added as the project evolves.

---

## Roadmap

* Add initial rule-based moderation pipeline
* Integrate first-pass text ML model
* Add Redis spam detection
* Build decision aggregator
* Implement PostgreSQL audit logging
* Add Next.js dashboard
* Deploy on Kubernetes
* Add image moderation service
* Implement organization-level rule builder
* Add advanced ML models and embedding-based moderation

---

## License

This project is licensed under the MIT License.

---

## Status

Active development. Not production-ready.

## Documentation

All project planning, architecture notes, and detailed design documents for Raveline are maintained in Notion:

Notion:
https://www.notion.so/RaveLine-2c6936f54c6180da8570e2443a05e647
