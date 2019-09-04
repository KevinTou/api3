const express = require("express");

const router = express.Router();

// const router = require("express").Router();

// a router can have middleware that applies only to the router
router.use(express.json());

// this router handles urls that begin with /suppliers

// GET to /suppliers/
router.get("/", (req, res) => {
  res.send("get to /suppliers/");
});

// GET to /suppliers/:name
router.get("/:name", (req, res) => {
  // res.send(`get to /suppliers/${req.params.name}`);
  const { name } = req.params;
  res.send(`get to /suppliers/${name}`);
});

module.exports = router;
