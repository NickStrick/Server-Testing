const db = require('./dbConfig.js');

module.exports = {
    insert,
    remove,
    getAll,
};


function getAll() {
    return db('songs');
}

function remove(id) {
    return null;
}

async function insert(song) {
    return null;
}