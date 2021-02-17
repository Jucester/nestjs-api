import { Controller, Get, Post, Put, Delete, Body, HttpCode, Param, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Request, Response } from 'express';
import { ProductsService } from './products.service';
import { Product } from './interfaces/Product';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {

    }
  
    @Get()
    getProducts() : Promise<Product[]> {
        return this.productsService.getProducts();
    }
    /* 
    // Like express
    getProduct(@Req() req, @Res() res) : Response {
        return res.send('hi');
    } */
  
    @Get(':id')
    getProduct(@Param('id') id : string) {
        return this.productsService.getProduct(id);
    } 

    @Post()
    addProduct(@Body() product: CreateProductDto )  {
        return this.productsService.addProduct(product);
    
    }

    @Put(':id')
    updateProduct(@Body() product: CreateProductDto, @Param('id') id) : string {
        console.log(product, id)
        return 'Updating'
    }

    @Delete(':id') 
    deleteProduct(@Param('id') id ) : string {
        console.log(id)
        return 'Deleting';
    }
}
