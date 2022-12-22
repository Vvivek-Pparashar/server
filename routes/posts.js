const express = require("express");
const {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/posts");

const router = express.Router();
router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").delete(deletePost).patch(updatePost).get((re, res)=>res.send("vivekisgr8"));

module.exports = router;
