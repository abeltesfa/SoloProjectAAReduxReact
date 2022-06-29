const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Comment } = require('../../db/models');


router.get('/:postId', asyncHandler( async(req, res) => {
    const postId = req.params.postId
    const comments = await Comment.findAll({
        where: {
            postId
        }
    });
    return res.json(comments);
}))

router.post('/', asyncHandler(async (req, res) => {
    const {postId, body, userId} = req.body
    const comment = await Comment.create({postId, userId, body});
    return res.json(comment)
}))



module.exports = router;
