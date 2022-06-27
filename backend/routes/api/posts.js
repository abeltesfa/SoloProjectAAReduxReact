const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Post } = require('../../db/models')

router.get('/', asyncHandler( async(req, res) => {
    const posts = await Post.findAll();
    console.log(posts);
    res.json(posts);
}))


module.exports = router;
