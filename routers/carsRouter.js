const express = require("express");
const knex = require("../data/db-config.js");
const Cars = require("./carsConfig.js");

const router = express.Router();

// Refactored with carsConfig.js
// Operational
router.get("/", async (req, res) => {
  try {
    const cars = await Cars.get(req.query);
    res.status(200).json({ message: "Successfully retrieved all cars", cars });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Operational
router.get("/:id", async (req, res) => {
  try {
    const carByID = await Cars.getCarByID(req.params.id);
    res
      .status(200)
      .json({ message: "Successfully retrieved individual car", carByID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Operational
router.post("/", async (req, res) => {
  try {
    const newCar = await Cars.insert(req.body);
    res.status(201).json({ message: "Successfully added new car", newCar });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Operational
router.put("/:id", async (req, res) => {
  try {
    const update = await Cars.update(req.params.id, req.body);
    res.status(200).json({ message: "Successfully updated car", update });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Operational
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Cars.remove(req.params.id);
    res.status(200).json({ message: "Successfully deleted car", deleted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Original
// // Operational
// router.get("/", async (req, res) => {
//   try {
//     const cars = await knex.select("*").from("cars");
//     res.status(200).json({ message: "Successfully retrieved all cars", cars });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Operational
// router.get("/:id", async (req, res) => {
//   try {
//     const carByID = await knex
//       .select("*")
//       .from("cars")
//       .where("id", req.params.id);
//     res
//       .status(200)
//       .json({ message: "Successfully retrieved individual car", carByID });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Operational
// router.post("/", async (req, res) => {
//   try {
//     const newCar = await knex
//       .select("*")
//       .from("cars")
//       .insert(req.body);
//     const newCarByID = await knex
//       .select("*")
//       .from("cars")
//       .where("id", newCar[0]);
//     res.status(201).json({ message: "Successfully added new car", newCarByID });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Operational
// router.put("/:id", async (req, res) => {
//   try {
//     const update = await knex
//       .select("*")
//       .from("cars")
//       .where("id", req.params.id)
//       .update(req.body);
//     res.status(200).json({ message: "Successfully updated car", update });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Operational
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await knex
//       .select("*")
//       .from("cars")
//       .where("id", req.params.id)
//       .del();
//     res.status(200).json({ message: "Successfully deleted car", deleted });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

module.exports = router;
