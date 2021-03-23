const { Post } = require("../models");

module.exports = {
  // A simple req, res pattern that hits when you go to that url.
  test: function (req, res) {
    res.send({ msg: "success" });
  },
  // get all posts
  getPosts: async (req, res) => {
    // res.send({msg: "success from getPosts"})
    try {
      const allPosts = await Post.find();
      // console.log(allPosts);
      res.json(allPosts);
    } catch (error) {
      console.log("error with getPosts:", error);
      res.send(error);
    }
  },
  // make a post
  createPost: async (req, res) => {
    try {
      const newPost = new Post({
        // name: req.body.name,
        message: req.body.message,
        date: req.body.date,
        accountId: req.account,
        accountName: req.account.accountName
      });

      res.json(await newPost.save());
    } catch (error) {
      console.log("error with createPost:", error);
    }
  },
};
