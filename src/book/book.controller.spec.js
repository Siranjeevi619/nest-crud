import { Test } from '@nestjs/testing';
import { BookController } from './book.controller';

describe('Book Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [BookController],
    }).compile();

    controller = module.get(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
