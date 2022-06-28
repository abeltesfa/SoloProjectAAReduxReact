const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Post } = require('../../db/models')

router.get('/', asyncHandler( async(req, res) => {
    const posts = await Post.findAll();
    // console.log(posts);
    return res.json(posts);
}))

router.post('/', asyncHandler(async (req, res) => {
    const {title, body, userId} = req.body
    const post = await Post.create({userId, title, body});
    return res.json(post)
}))

module.exports = router;
