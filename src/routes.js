import express from 'express';

import BancoBrasilController from './controllers/BancoBrasilController.js';
import BancoItauController from './controllers/BancoItauController.js'

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render("index", {
    teste: "Título"
  })
})
routes.get('/banco-brasil', (req,res) => res.render("./pages/banco_brasil"))
routes.get('/banco-itau', (req,res) => res.render("./pages/banco_itau"))

routes.post('/banco-brasil', new BancoBrasilController().post)

export default routes