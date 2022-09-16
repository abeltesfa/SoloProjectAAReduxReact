const express = require('express');
const asyncHandler = require('express-async-handler');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');
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

router.put('/:postId', asyncHandler( async function (req, res) {
    const postId = req.params.postId
    const post = await Post.findByPk(postId)

    const {title, body} = req.body;
    await post.update({title, body});
    await post.save()
    return res.json(post);

}))

router.delete('/:postId', asyncHandler( async function (req, res) {
    const postId = req.params.postId
    const post = await Post.findByPk(postId)
    await post.destroy();

    return res.json(post);

}))


module.exports = router;
