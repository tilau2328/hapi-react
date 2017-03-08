const mongoose = require('mongoose');
const renameIdPlugin = require('mongoose-rename-id');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  path: { type: String, required: true }
});

bookSchema.methods.toDAO = function () {
    return {
        id: this._id,
        title: this.title,
        author: this.author
    };
};

module.exports = mongoose.model('Book', bookSchema);
