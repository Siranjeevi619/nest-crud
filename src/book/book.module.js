const { Module } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const { BooksController } = require('./book.controller');
const { BooksService } = require('./book.service');
const { BookSchema } = require('./book.schema');

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
})
class BookModule {}

module.exports = { BookModule };
