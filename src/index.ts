import Fastify from 'fastify';

const fastify = Fastify({ logger: process.env.FASTIFY_LOGGER === 'true' });

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

(async () => {
  try {
    await fastify.listen({
      port: Number(process.env.SERVICE_PORT ?? 3000),
      host: '0.0.0.0',
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
