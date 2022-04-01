import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import routes from './routes.js'

const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

app.use(expressLayouts)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(routes)

export default app;