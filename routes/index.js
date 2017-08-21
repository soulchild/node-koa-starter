const router = require('koa-router')();
const helloWorldRoutes = require('./hello-world');

router.use('/', helloWorldRoutes);

module.exports = router;
