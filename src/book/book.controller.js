import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('books')
class BooksController {
  constructor(booksService, bookModel) {
    this.booksService = booksService;
    this.bookModel = bookModel;
  }

  @Get()
  async getAllBooks() {
    return 'Hello man';
  }

  @Get(':id')
  async getBookById(req) {
    const id = req.params.id;
    const book = await this.booksService.getById(id);
    if (!book) return { message: 'Book not found' };
    return book;
  }

  @Post()
  async createBook(req) {
    return await this.booksService.create(req.body);
  }

  @Put(':id')
  async updateBook(req) {
    const id = req.params.id;
    const updated = await this.booksService.update(id, req.body);
    if (!updated) return { message: 'Book not found' };
    return updated;
  }

  @Delete(':id')
  async deleteBook(req) {
    const id = req.params.id;
    const deleted = await this.booksService.remove(id);
    if (!deleted) return { message: 'Book not found' };
    return deleted;
  }
}

module.exports = { BooksController };
