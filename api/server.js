const express = require('express');

const db = require('../data/dbModel.js');

const server = express();
server.use(express.json());

server.get('/songs', async (req, res) => {
    const list = await db.getAll();

    res.status(200).json(list);
});

module.exports = server;