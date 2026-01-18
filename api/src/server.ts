import "dotenv/config";
import Fastify from "fastify";

import { rootRoute } from "./routes/root";
import { healthRoute } from "./routes/health";
import { moderateRoute } from "./routes/moderate";

async function buildServer() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(rootRoute);
  await fastify.register(healthRoute);
  await fastify.register(moderateRoute);

  return fastify;
}

async function start() {
  try {
    const server = await buildServer();

    const PORT = Number(process.env.PORT ?? 3000);
    if (!Number.isInteger(PORT)) {
      throw new Error(`Invalid PORT: ${process.env.PORT}`);
    }

    await server.listen({ port: PORT, host: "0.0.0.0" });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
