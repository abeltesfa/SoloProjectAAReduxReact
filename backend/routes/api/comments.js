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


module.exports = router;
