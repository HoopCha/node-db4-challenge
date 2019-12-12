exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_number: 1, instructions: "Put ingredients in Bowl", recipes_id: 1 },
        { step_number: 2, instructions: "Bake the Cake", recipes_id: 1 },
        { step_number: 1, instructions: "Turn on the oven", recipes_id: 2 },
        { step_number: 1, instructions: "Flour the board", recipes_id: 3 },
      ]);
    });
};