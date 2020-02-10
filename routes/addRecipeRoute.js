const express = require("express");
const router = express.Router();
const addController = require("../controllers/addController");
const { check } = require("express-validator");

router.get("/add", addController.getAdd);
router.post(
  "/add",
  [
    check("title")
      .not()
      .isEmpty()
      .withMessage("title cannot be empty"),
    check("author")
      .not()
      .isEmpty()
      .withMessage("author cannot be empty"),
    check("image")
      .not()
      .isEmpty()
      .withMessage("image cannot be empty"),
    check("description")
      .not()
      .isEmpty()
      .withMessage("description cannot be empty")
  ],
  addController.postAdd
);

module.exports = router;
