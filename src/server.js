import fastify from "fastify";
import fileUpload from "fastify-file-upload";

import indexController from "./index.js";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const server = fastify({
  logger: false
})

server.register(fileUpload)

server.register(indexController, { prefix: "/" });
server.register(indexController, { prefix: "/upload" });

server.listen(3000, '0.0.0.0', async (err, address) => {
  if (err) {
      console.error(err)
      process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})