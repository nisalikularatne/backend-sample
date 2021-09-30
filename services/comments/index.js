const axios = require('axios');
exports.filterComments = async(filter)=>{
    let comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
    let array = comments.data;
    const filters = {
        ...(filter.name) &&{ name: name => [filter.name].includes(name.toLowerCase())},
        ...(filter.postId) &&{ postId: postId => postId === parseInt(filter.postId)},
        ...(filter.id) &&{ id: id => id === parseInt(filter.id)},
        ...(filter.email) &&{ email: email=>email=== filter.email},
        ...(filter.body) &&{ body: body=>body.replace(/\n/g, '').includes(filter.body.replace(/\n/g, ''))}
    };
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
        return filterKeys.every(key => {
            if (typeof filters[key] !== 'function') return true;
            return filters[key](item[key]);
        })
})
}
