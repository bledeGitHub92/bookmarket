var router = require('express').Router();
var { mock } = require('mockjs');

// router.param('id', (req, res, next, id) => {
//     console.log(id);
//     next();
// });

router.get((req, res) => {
        res.send(req.params.id);
        // console.log(req.param);
    });

module.exports = router;