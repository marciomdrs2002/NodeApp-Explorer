const express = require("express");

const app = express();

app.get("/message/:id/:user", (req, res) => {
  res.send(`
   Hello, ${req.params.user} ! <br>
   Your id is ${req.params.id}
    `);
});

app.get('/users', (req, res) => {
    const {page, limit} = req.query
    
    res.send(`Limit: ${limit}. Page: ${page} `)
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
