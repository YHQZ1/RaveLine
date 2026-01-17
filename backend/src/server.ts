import Fastify from "fastify";
import { moderateRoute } from "./routes/moderate";

async function buildServer() {
  const fastify = Fastify({
    logger: true,
  });

  // Register routes
  await fastify.register(moderateRoute);

  return fastify;
}

async function start() {
  try {
    const server = await buildServer();

    const PORT = Number(process.env.PORT) || 3000;

    await server.listen({ port: PORT, host: "0.0.0.0" });

    console.log(`Raveline moderation service running on port ${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
