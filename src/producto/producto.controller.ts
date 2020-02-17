import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductoDTO } from "./dto/producto.dto";
import { ProductoService } from "./producto.service";
import { get } from 'http';


@Controller('producto')
export class ProductoController {

    constructor( private productoService: ProductoService ){}

    @Post('/crear')
    async createProducto(@Res() res, @Body() createProducto: CreateProductoDTO ) {
        const new_producto =  await this.productoService.createProducto(createProducto);
        return res.status(HttpStatus.OK).json({
            mensaje: "preticion resivida",
            producto: new_producto
        })
    }

    @Get('/')
    async getproductos( @Res() res ){
        const productos = await this.productoService.getProductos();
        return res.status(HttpStatus.OK).json({
            productos
        })
    }
    
    @Get('/:productID')
    async getProducto( @Res() res, @Param('productID') productoID ){
        const get_productos =  await this.productoService.getProducto( productoID );
        if( !get_productos ){
            throw new NotFoundException('El producto no existe');
        }
        return res.status(HttpStatus.OK).json({
            get_productos
        })
    }

    @Delete('/delete')
    async deleteProducto( @Res() res, @Query('productID') productoID ){
        const delete_producto = await this.productoService.deleteProducto(productoID);
        if( !delete_producto ){
            throw new NotFoundException('El producto no existe');
        }
        return res.status(HttpStatus.OK).json({
            "mensaje": 'producto eliminado',
            delete_producto
        });
    }

    @Put('/update')
    async updateProducto( @Res() res, @Body() crearProductoDTO: CreateProductoDTO, @Query('productID') productoID ){
        const update_product = await this.productoService.updateProducto(productoID, crearProductoDTO)
        if( !update_product ){
            throw new NotFoundException('El producto no existe');
        }
        return res.status(HttpStatus.OK).json({
            "mensaje": "prodcuto actualizado correctamente",
            update_product
        })
    }

}
