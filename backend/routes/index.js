const router = require('express').Router();
const adventureRoutes = require('./adventure-routes');
const searchRoutes = require('./search-routes');

router.use('/adventures', adventureRoutes);
router.use('/search', searchRoutes);

module.exports = router;
