const express = require('express');
const http = require('http');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Hello World" }));
app.post("/", (req, res) => {

  if (!req.body?.message) {
    return res.status(400).send('Invalid request');
  }

  return res.status(201).send();
});

const server = http.createServer(app);

module.exports = server;