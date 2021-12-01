const express = require("express");
const router = express.Router();

router.get('/:file', function (req, res, next) {
  const file = req.params.file;
  res.sendFile(process.cwd() + '/public/images/' + file);
  console.log("hi");
})

module.exports = router;