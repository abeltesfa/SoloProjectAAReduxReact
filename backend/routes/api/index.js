// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const postsRouter = require('./posts');
const commentsRouter = require('./comments')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/posts', postsRouter);

router.use('/comments', commentsRouter);


module.exports = router;
