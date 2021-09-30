const PostService = require('../../services/posts');
exports.returnTopPost= async(req,res)=>{
    return await PostService.calculateTopPost()
}
