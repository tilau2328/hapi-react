const Comment = require('../models/comment');

const getComments = function(req, res){
  Comment.find({}, function(err, comments){
    if(err) res(err).code(422);
    res(comments);
  });
}

const createComment = function(req, res){
  console.log(req.payload);
  const newComment = new Comment({ text: req.payload.text });
  newComment.save(function(err){
    if(err) res(err).code(422);
    res(newComment);
  });
}

const removeComment = function(req, res){
  console.log(req.params.id);
  Comment.findById(req.params.id, function(err, comment){
    if(err) res(err).code(422);
    if(!comment) res('User not found').code(422);
    comment.remove(function(err){
      if(err) res(err).code(422);
      res();
    });
  });
}

module.exports = {
  getComments: getComments,
  createComment: createComment,
  removeComment: removeComment
}
