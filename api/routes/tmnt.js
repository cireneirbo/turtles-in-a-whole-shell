const express = require("express");
const router = express.Router();

router.get('/', function (req, res, next) {
  //const file = req.params.file;
  res.send('/public/images/')
  console.log("hi");
})
console.log("HIIIII");

module.exports = router;