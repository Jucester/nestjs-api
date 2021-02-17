import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/Product';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Product') private readonly productModel : Model<Product> ) {}

    async getProducts() : Promise<Product[]> {
        return await this.productModel.find();
    }

    async getProduct(id : string ) : Promise<Product> {
        return await this.productModel.findById( id )
    }

    async addProduct(product: CreateProductDto ) : Promise<Product> {
        const newTask = new this.productModel(product);
        return await newTask.save();
    }

    async updateProduct(product: CreateProductDto, id : string )  : Promise<Product> {
        const updatedTask = await this.productModel.findByIdAndUpdate( id , product, { new: true} );
        return updatedTask;
    }

    async deleteProduct(id : string ) : Promise<Product> {
        return await this.productModel.findByIdAndDelete({ _id: id });
    }

}
