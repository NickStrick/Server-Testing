
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('songs')
    .truncate()
    .then(function () {
      return knex('songs').insert([
        { name: 'dont stop me now' },
        { name: 'rebel rebel' },
        { name: 'man ina minute' },
        { name: 'yoinkers' },
      ]);
    });
};
