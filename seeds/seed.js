const sequelize = require('../config/connection');
const { Post } = require('../models/post');

const postData = require('./postData.json');
//const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });
};

seedDatabase();
