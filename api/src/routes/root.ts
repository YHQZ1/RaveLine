import { FastifyInstance } from "fastify";

export async function rootRoute(fastify: FastifyInstance) {
  fastify.get("/", async () => {
    return {
      service: "raveline",
      description: "Content moderation service",
      status: "running",
      version: "v1",
    };
  });
}
