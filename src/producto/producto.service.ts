import { Injectable } from '@nestjs/common';
import { Model } from "mongoose"; //me ayuda a definir un modelo para consultar cosas, y autocompletado
import { InjectModel } from "@nestjs/mongoose";

import { Producto } from "./interfaces/producto.interface";
import { CreateProductoDTO } from "./dto/producto.dto";

@Injectable()
export class ProductoService {

    constructor(@InjectModel('producto') private readonly productModel: Model<Producto>) { }

    async getProductos(): Promise<Producto[]> {
        const productos = await this.productModel.find()
        return productos;
    }

    async getProducto(get_id: string): Promise<Producto>  {
        const get_producto = await this.productModel.findById(get_id);
        return get_producto;
    }

    async createProducto(createProductoDTO: CreateProductoDTO): Promise<Producto>{
        const create_producto = new this.productModel(createProductoDTO);
        await create_producto.save();
        return create_producto;
    }

    async updateProducto(update_id: string, create_dto: CreateProductoDTO): Promise<Producto>{
        const update_producto = await this.productModel.findByIdAndUpdate(update_id, create_dto, { new: true} );
        return update_producto;
    }

    async deleteProducto(delete_id: string): Promise<Producto>  {
        const delete_producto =  await this.productModel.findByIdAndDelete(delete_id);
        return delete_producto;
    }

}


