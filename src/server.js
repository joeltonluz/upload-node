import express from 'express';
import multer from 'fastify-multer';
import fs from 'fs';

const app = express();
//global.__basedir = __dirname

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ 
  storage: storage
})

app.get('/', (req, res) => {
  res.send('opa')
});

app.post('/', upload.single('uploadFile'), (req, res) => {
  res.code(200).json({
    'msg': 'File uploaded/import successfully!',
    'file': ''
  })

})

app.listen(3000, () => {

  console.log(`Server listening at ${3000}`)
})