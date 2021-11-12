const express = require("express");
const router = express.Router();

router.get('/tmnt', function (req, res, next) {
    const options = {
      root: path.join(__dirname, 'public/images'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
  
    const fileName = "tmnt.png";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  })

module.exports = router;