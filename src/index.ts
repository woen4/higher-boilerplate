import { bootstrap } from "@woen4/higher";

// This server object is a instnace of fastify
const server = bootstrap();

server.listen({ port: 3000 }).then((adresss) => {
  console.log("Listening on: ", adresss);
});
