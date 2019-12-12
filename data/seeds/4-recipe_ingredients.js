exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipes_id: 1, ingredient_id: 1, amount: "4 Cups" },
      ]);
    });
};