const router = require('express').Router();
const makePost = require('./makePost');
const thread = require('./thread');
const catalog = require('./catalog');
//const projectRoutes = require('./projectRoutes');

router.use('/post', makePost);
router.use('/thread', thread);
router.use('/catalog', catalog);
//router.use('/projects', projectRoutes);

module.exports = router;