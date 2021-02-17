import { Controller, Get, Post, Put, Delete, Body, HttpCode, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Request, Response } from 'express';
import { ProductsService } from './products.service';
import { Product } from './interfaces/Product';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}
  
    @Get()
    async getProducts(@Res() res ) : Promise<Product[]> {
        const products = await this.productsService.getProducts();
        return res.status(HttpStatus.OK).json({
            message: 'Products',
            products: products
        });
    }
    /* 
    // Like express
    getProduct(@Req() req, @Res() res) : Response {
        return res.send('hi');
    } */
  
    @Get(':id')
    async getProduct(@Res() res, @Param('id') id : string) {
        const product = await this.productsService.getProduct(id);
        return res.status(HttpStatus.OK).json({
            message: 'Product',
            products: product
        });
    } 

    @Post()
    async addProduct(@Res() res, @Body() product: CreateProductDto )  {
        const item = await this.productsService.addProduct(product);
        return res.status(HttpStatus.OK).json({
            message: 'Created',
            products: item
        });
    
    }

    @Put(':id')
    async updateProduct(@Res() res, @Body() product: CreateProductDto, @Param('id') id)  {
        const item = await this.productsService.updateProduct(product, id);
        return res.status(HttpStatus.OK).json({
            message: 'Updated',
            products: item
        });
    }

    @Delete(':id') 
    async deleteProduct(@Res() res, @Param('id') id ) {
        const product = await this.productsService.deleteProduct(id);
        return res.status(HttpStatus.OK).json({
            message: 'Deleted',
            products: product
        });
    }
}
