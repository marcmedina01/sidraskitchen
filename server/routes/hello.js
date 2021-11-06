let express = require('express');
let router = express.Router();

 // Answer API requests.
 router.get('/', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });



module.exports = router;