import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateProductoDTO } from "./dto/producto.dto";

@Controller('producto')
export class ProductoController {

    @Post('/crear')
    createProducto(@Res() res, @Body() createProducto: CreateProductoDTO ) {
        console.log("objeto recibido");
        return res.status(HttpStatus.OK).json({
            "mensaje": "good"
        })
    }

    

}
