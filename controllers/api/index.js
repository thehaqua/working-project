const router = require('express').Router();
const makePost = require('./makePost');
//const projectRoutes = require('./projectRoutes');

router.use('/post', makePost);
//router.use('/projects', projectRoutes);

module.exports = router;