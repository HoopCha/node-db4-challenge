exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { rname: "Chocolate Cake" },
        { rname: "Lemon Cookies" },
        { rname: "Pasta" },
      ]);
    });
};