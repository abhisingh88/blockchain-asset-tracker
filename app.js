const express = require('express')
const app = express()
const path = require("path")
const hbs = require("hbs");
const port = 3000

const static_path = path.join(__dirname, "./public")
app.use(express.static(static_path))


const template_path = path.join(__dirname, "./templates")
const parials_path = path.join(__dirname, "./templates/partials")
app.set("view engine", "hbs");

app.set("views", template_path)
hbs.registerPartials(parials_path)

// Home
app.get('/', (req, res) => {
    res.status(201).render("index");
})


// Assest Deatil
app.get('/detail', (req, res) => {
    res.status(201).render("asset");
})


app.get('/transfer', (req, res) => {
    res.status(201).render("transfer");
})


// app.get('/', (req, res) => {
//     res.status(201).sendFile("index.html");
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})