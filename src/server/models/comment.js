const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

commentSchema.plugin(renameIdPlugin({ newIdName: 'id' }));

module.exports = mongoose.model('Comment', commentSchema);
