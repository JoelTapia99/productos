import { Schema } from "mongoose";

export const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: String,
    url: String,
    precio: Number,
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});
/*defuno la estructura con sintaxis de mongoose,
me sirve para definir consultas en la base de datos*/

