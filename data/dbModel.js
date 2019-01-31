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
    return db('songs')
        .where('id', id)
        .del();
}

async function insert(song) {
    const [id] = await db('songs').insert(song);

    return db('songs').where({ id })
        .first();
}