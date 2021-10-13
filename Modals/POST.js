const mongoose = require('mongoose')

const Post = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    
}, {
   timestamps: {createdAt:true, updatedAt:false}
})

module.exports = mongoose.model('post', Post)