var Post = require('../models/post')


exports.create = (req, res, next) => {

  Post.create(req.body, (err, post) => {
    if(err) res.send(err)
    else {
      res.send(post)
    }
  })

}

exports.get_all = (req, res, next) => {
  Post.find( (err, posts) => {
    if(err) res.send(err)
    res.send(posts)
  })
}

exports.update = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true} )
  .exec( (err, post) => {
    if(err) res.send(err)
    else {
      res.send(post);
    }
  })
}

exports.delete = (req, res, next) => {
  Post.findByIdAndRemove(req.params.id, (err, post) => {
    if(err) res.send(err)
    else {
      res.send(post)
    }
  })
}
