import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.model';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookInput: CreateBookInput): Promise<Book> {
    const createdBook = new this.bookModel({
      ...createBookInput,
    });
    const result = await createdBook.save();
    return result;
  }

  findAll(): Promise<Book[]> {
    return this.bookModel.find({}).exec();
  }

  findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  update(id: string, updateBookInput: UpdateBookInput): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, updateBookInput).exec();
  }

  remove(_id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(_id).exec();
  }
}
