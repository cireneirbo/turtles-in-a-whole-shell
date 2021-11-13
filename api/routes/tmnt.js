const express = require("express");
const router = express.Router();

router.get('/:file', function (req, res, next) {
  const file = req.params.file;
  res.sendFile('/public/images/' + file);
  console.log("hi");
})
console.log("HIIIII");

module.exports = router;