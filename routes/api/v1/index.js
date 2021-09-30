const {expressCallback} = require('../../../helpers/express')
const express = require('express');
//routes
const apiV1Routes = express.Router(),
    PostController = require('../../../controllers/posts'),
    CommentController = require('../../../controllers/comments');

apiV1Routes.get('/topPosts',expressCallback(PostController.returnTopPost))
apiV1Routes.get('/comments',expressCallback(CommentController.filterComments))
module.exports = apiV1Routes;
