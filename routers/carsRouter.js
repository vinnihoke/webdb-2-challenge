const express = require("express");
const knex = require("knex");
const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const item = await res.status(200).json({ message: "Something" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await res.status(200).json({ message: "Something" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const item = await res.status(200).json({ message: "Something" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const item = await res.status(200).json({ message: "Something" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await res.status(200).json({ message: "Cou" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
