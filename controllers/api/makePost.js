const router = require('express').Router();

const { Post } = require('../../models/post');

// new post
router.get('/', (req, res) => {
    try {
        res.render('post');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
  try {
    
    const { id, topic, body, date_created, op, thread_id } = req.body;
    const taskData = await Task.create({ id, topic, body, date_created, op, thread_id });
    
    res.status(200).json(taskData);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});
    

module.exports = router;