import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatSchema } from '../../../Models/cat.model';
import { CatInterface } from '../../../interfaces/cat.interface';

@Injectable()
export class CatService {
  constructor(@InjectModel('Cat') private catModel: Model<CatInterface>) {}
  async getCat(): Promise<any> {
    return 'Cat API';
  }
  async createCat(catData: any) {
    try {
      const newCat = await this.catModel.create(catData);
      return newCat;
    } catch (err) {
      throw new HttpException(
        'error creating cat:' + err.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
