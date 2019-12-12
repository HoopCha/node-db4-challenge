const db = require('../data/db-config');

module.exports = {
  getRecipes,
  findById,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function findById(id) {
  return db('recipes')
    .where({ id: id })
    .first();
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
    .select('rname', 'iname', "amount")
    .join('recipes', 'recipes.id', 'recipes_id')
    .join('ingredients', 'ingredients.id', 'ingredient_id')
    .where('recipes_id', recipe_id);
}

function getInstructions(recipe_id) {
  return db('steps')
    .select('step_number', 'instructions', 'rname')
    .join('recipes', 'recipes.id', 'recipes_id')
    .orderBy('step_number')
    .where({ 'recipes.id': recipe_id })
}