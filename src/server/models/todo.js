const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

todoSchema.plugin(renameIdPlugin({newIdName: 'id'}));

module.exports = mongoose.model('Todo', todoSchema);
