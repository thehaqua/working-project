const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.get('*', (req,res) => {
    res.send('404')
})

module.exports = router;
