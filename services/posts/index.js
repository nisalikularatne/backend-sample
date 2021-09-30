const lodash = require('lodash');
const axios = require('axios');
const {compareValues} = require('../../helpers/index');
exports.calculateTopPost = async()=>{
    let posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
    let comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
    let array = comments.data;
    let postCommentCount = lodash.countBy(array,'postId')
    var r =posts.data.map(function(el) {
        let o = Object.assign({}, el);
        o.count = postCommentCount[Object.keys(postCommentCount).filter(key=>key==o.id)[0]];
        return o})
    // console.log('show r',r);
    return r.sort(compareValues('count','desc'))
}

// exports.login = async (identity = {}) => {
//     let user = await User.query().where('name', identity.name).first();
//     const token = jwt.sign({
//         user_name: user.name,
//         user_id: user.id
//     }, config.ACCESS_TOKEN_SECRET, { expiresIn: 60 * 60 });
//     return { token: token };
// };
