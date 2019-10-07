const express = require("express");

const db = require("../dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 Error getting accounts"
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.select("*")
    .from("accounts")
    .where("id", "=", id)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 Error getting account ID"
      });
    });
});

//insert into posts (category) then values(sports)
router.post("/", (req, res) => {
  const account = req.body;

  db("accounts")
    .insert(account)
    .then(account => {
      res.status(201).json(account);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 Error making a new account"
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db("accounts")
    .where("id", "=", id)
    .update(changes)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 Error updating an account"
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db("accounts")
    .where("id", "=", id)
    .del()
    .then(deleted => {
      res.status(204).json(deleted);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 Error deleting an account"
      });
    });
});

module.exports = router;
