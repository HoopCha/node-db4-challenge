exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { iname: "Flour" },
        { iname: "Chocolate" },
        { iname: "Lemon" },
        { iname: "Cheese" }
      ]);
    });
};