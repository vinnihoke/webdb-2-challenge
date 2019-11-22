// This is going to make up the Cars table.
exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments("id");
    table
      .string("vin", 50)
      .unique()
      .notNullable();
    table.string("make", 50).notNullable();
    table.string("model", 50).notNullable();
    table.string("milage").notNullable();
    table.string("transmission");
    table.string("status");
  });
};

// This is going to be the rollback status for the Cars table.
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
