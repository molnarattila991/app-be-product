import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './models/schema/product.shcema';

@Injectable()
export class AppService {
  public constructor(@InjectModel(Product.name) private dbModel: Model<ProductDocument>) {

  }
  public async getHello() {
    const created = new this.dbModel({
      name: "testProduct",
      description: "testProduct desc",
      price: 11
    });
    await created.save();

    return await this.dbModel.find();
  }
}
