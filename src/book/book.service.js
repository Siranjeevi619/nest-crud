const { Injectable, Dependencies } = require('@nestjs/common');
const { getModelToken } = require('@nestjs/mongoose');

@Injectable()
@Dependencies(getModelToken('Book'))
class BooksService {
  constructor(bookModel) {
    this.bookModel = bookModel;
  }

  async getAll() {
    return this.bookModel.find().exec();
  }

  async getById(id) {
    return this.bookModel.findById(id).exec();
  }

  async create(book) {
    const newBook = new this.bookModel(book);
    return newBook.save();
  }

  async update(id, updatedBook) {
    return this.bookModel
      .findByIdAndUpdate(id, updatedBook, { new: true })
      .exec();
  }

  async remove(id) {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}

module.exports = { BooksService };
