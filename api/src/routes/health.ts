import { FastifyInstance } from "fastify";

export async function healthRoute(fastify: FastifyInstance) {
  fastify.get("/health", async () => {
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: Date.now(),
    };
  });
}
