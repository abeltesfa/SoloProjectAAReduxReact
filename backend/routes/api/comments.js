const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Comment, User } = require('../../db/models');


router.get('/:postId', asyncHandler( async(req, res) => {
    const postId = req.params.postId
    const comments = await Comment.findAll({
        where: {
            postId
        },
        include: [User]
    });
    return res.json(comments);
}))

router.post('/', asyncHandler(async (req, res) => {
    const {postId, body, userId} = req.body
    const comment = await Comment.create({postId, userId, body});
    return res.json(comment)
}))

router.delete('/', asyncHandler( async function (req, res) {
    const commentId = req.body.id
    const comment = await Comment.findByPk(commentId)
    await comment.destroy();

    return res.json(commentId);

}))



module.exports = router;
