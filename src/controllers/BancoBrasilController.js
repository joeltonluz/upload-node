import XLSX from 'xlsx'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs'

class BancoBrasilController {
  async index (req, res) {
    res.redirect("/")
  }

  async post(req, res) {
    let nameFileTemp = ""
    const __dirname = path.resolve()

    let form = new formidable.IncomingForm({
      multiples: false,
      uploadDir: "tmp"
    });
    
    form.parse(req, (err, fields, files) => {
      try {
        if (err) {
          throw error
          //res.send('Erro:', err.message)
        }
        const f = files[Object.keys(files)[0]];
        nameFileTemp = f.newFilename
        const workbook = XLSX.readFile(f.filepath);
        const downloadFile = convert
        
        //DISPONIBILIZAR PARA DOWNLOAD
        
        //res.download(__dirname+'/public/download/oi.txt')
        //res.json({workbook})
      } catch(err) {
        res.json({"Erro": err.message})
      } finally {
        console.log(`File Temp ${__dirname}/tmp/8f864f7ae692d2d495af29d00`)
        fs.unlink(`${__dirname}/tmp/8f864f7ae692d2d495af29d00`,(err) => {
          res.json({"Erro ao Limpar Temp": err.message})
        })
      }
    });
  }
}

export default BancoBrasilController;