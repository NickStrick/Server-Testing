
exports.up = function (knex, Promise) {
    return knex.schema.createTable('songs', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('songs');
};
