const indexController = async (fastify) => {

  fastify.get('/', async(req, res) => {
    return res.send('Healthy')
  })

  fastify.post('/upload', async(req, reply) => {
    const files = req.raw.files
    console.log('>>>Files: ',files)
    let fileArr = []
    for(let key in files) {
      fileArr.push({
        name: files[key].name,
        mimetype: files[key].mimetype
      })
    }
    reply.send(fileArr)
  })

}

export default indexController