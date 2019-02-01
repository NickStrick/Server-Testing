const express = require('express');

const db = require('../data/dbModel.js');

const server = express();
server.use(express.json());

server.get('/songs', async (req, res) => {
    const list = await db.getAll();

    res.status(200).json(list);
});

server.post('/songs', async (req, res) => {
    const { name } = req.body;
    if (name) {
        db.insert({ name }).then((response) => {
            res.status(201).json(response);
        })

    } else {
        res.status(400).end();
    }
});

server.delete('/songs', async (req, res) => {
    const { id } = req.body;
    db.remove(id).then(response => {
        res.status(200).json(response);
    })

});
module.exports = server;
server.listen(3000, () => console.log(`\n** server up on port 3000 **\n`));

