exports.up = function (knex) {
    return knex.schema.createTable('products', function (table) {
      table.increments();
      table.string('description');
      table.string('price');
    })
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('products');
  };