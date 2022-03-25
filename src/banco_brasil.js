import fs from 'fs';
import * as ExcelJS from 'exceljs';

const indexController = async (fastify) => {

  fastify.get('/', async(req, reply) => {
    const stream = fs.createReadStream('./index.html')
    reply.type('text/html').send(stream)

    //res.sendFile(path.join(__dirname,'/index.html'))
  })

}

export default indexController