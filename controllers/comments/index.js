const CommentService = require('../../services/comments');
exports.filterComments= async(req,res)=>{
    const {name,id,postId,email,body} = req.query;
    return await CommentService.filterComments({name,postId,email,id,body})
}
