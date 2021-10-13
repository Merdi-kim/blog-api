const Post = require('../Modals/POST')

exports.fetchPostsHandler = (req, res, next) => {
    Post.find()
     .then(result => {
        res.status(200).json({posts:result})
     })
     .catch( err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
        
     })
}

exports.createPostHandler = (req, res, next) => {
    const title = req.body.title
    const content = req.body.content 
    Post.create({title, content})
     .then(result => {
         res.status(200).json({message:"Post created"})
     })
     .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(err)
     })


}

exports.editPostHandler = (req, res, next) => {
    const id = req.body.id 
    const title = req.body.title 
    const content = req.body.content

    Post.findOneAndUpdate({_id:id}, {title, content}, {new:true})
     .then(result => {
        res.status(200).json({message: result})
     })
     .catch(err => {
        console.log(err)
     })
}

exports.deletePostHandler = (req, res, next) => {
    const id = req.body.id 

    Post.findOneAndDelete({_id:id})
    .then(result => {
        res.status(200).json({message:result})
    })
}