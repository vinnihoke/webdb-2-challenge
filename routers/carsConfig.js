const db = require("../data/db-config.js");

// Operational
const get = () => {
  return db("cars");
};

// Operational
const getCarByID = id => {
  return db("cars").where({ id });
};

// Operational
const insert = car => {
  return db("cars")
    .insert(car)
    .then(cars => {
      return getCarByID(cars[0]);
    });
};

// Operational
const update = (id, changes) => {
  return db("cars")
    .where("id", id)
    .update(changes);
};

// Operational
const remove = id => {
  return db("cars")
    .where("id", id)
    .del();
};

module.exports = {
  get,
  getCarByID,
  insert,
  update,
  remove
};
