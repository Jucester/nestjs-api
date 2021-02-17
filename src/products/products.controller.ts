import { Controller, Get, Post, Put, Delete, Body, HttpCode, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

    @Get()
    getProduct() : {} {
        return {"name" : "hi"};
    }

    @Post()
    addProduct(@Body() product: CreateProductDto ) : string {
        console.log(product);
        return 'Adding';
        
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
