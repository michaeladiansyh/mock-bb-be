const Post = require('../models/Post');
const asyncHandler = require('express-async-handler');

//@desc Get all post
//@route GET /posts
//@access Private
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().lean();
  if (!posts?.length) {
    return res.status(400).json({ message: 'No Post found' });
  }

  res.json(posts);
});

//@desc Create new post
//@route POST /posts
//@access Private
const createNewPost = asyncHandler(async (req, res) => {
  const { content } = req.body;

  //confirm data
  if (!content) {
    return res.status(400).json({ message: 'field are required' });
  }

  //create and store new note
  const post = await Post.create({ content });

  if (post) {
    res.status(201).json({ message: `New post created` });
  } else {
    res.status(400).json({ message: 'Invalid post data received' });
  }
});

//@desc Update a post
//@route PATCH /posts
//@access Private
const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  //confirm data
  if (!content) {
    return res.status(400).json({ message: 'fields are required' });
  }

  const post = await Post.findById(id).exec();

  if (!post) {
    return res.status(400).json({ message: 'Post not found' });
  }
  post.content = content;

  const updatedPost = await post.save();
  res.json(`'${updatedPost._id}' updated`);
});

// @desc Delete a note
// @route DELETE /notes
// @access Private
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: 'Post ID required' });
  }

  // Confirm post exists to delete
  const post = await Post.findById(id).exec();

  if (!post) {
    return res.status(400).json({ message: 'Post not found' });
  }

  const result = await post.deleteOne();

  const reply = `Post with ID ${result._id} deleted`;

  res.json(reply);
});

module.exports = { getAllPosts, createNewPost, updatePost, deletePost };
