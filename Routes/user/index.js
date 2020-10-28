const Router = require('express');

const router = Router();

router.route('/users')
  .get((req, res) => {
    res.send({ msg: 'Users' });
  })
  .post((req, res) => {
    res.send({ msg: 'Users POST' });
  });

module.exports = router;
