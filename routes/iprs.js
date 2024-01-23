const router = require("express").Router();

const {
  createIpr,
} = require("../controllers/iprsController");

router.post("/", createIpr);

module.exports = router;