exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
      table.increments();
      table.string('image');
      table.string('tittle');
      table.string('description');
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('products');
  };
