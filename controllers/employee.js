const express = require("express");
const router = express.Router();
const db = require("../models");
const bodyParser = require("body-parser");

router.get("/employee", (req, res) => {
  res.render("employee");
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.post("/employee", (req, res) => {
  let task_title = req.body.taskTitle;
  let task_instruction = req.body.taskInstruction;
  let department_id = req.session.department_id;
  console.log(task_title);
  console.log(task_instruction);

  db.tasks.create({
    task_title,
    task_instruction,
    department_id
  });

  // res.render('employee');
});

module.exports = router;
