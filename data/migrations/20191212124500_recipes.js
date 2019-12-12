
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
          tbl.increments();
          tbl.string('name', 255).notNullable();
      })

      .createTable('ingredients', tbl => {
          tbl.increments();
          tbl.string('name', 255).notNullable();
      })

      .createTable('steps', tbl => {
          tbl.increments();
          tbl.integer('step_number').notNullable();
          tbl.string('instructions', 300).notNullable();
          tbl
          .integer('recipes_id')
          .unsigned()
          .references('id')
          .inTable('recipes')
          .onDelete('RESTRICT') 
          .onUpdate('CASCADE'); 
      })

      .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl
        .integer('recipes_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
        tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
        tbl.string('amount').notNullable();
    })
  };
  

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
