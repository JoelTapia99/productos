import { Document } from "mongoose";

export interface Producto extends Document {
    readonly nombre: string;
    readonly descripcion: string;
    readonly url: string;
    readonly precio: number;
    readonly fechacreacion: Date;
}

//defino la estroctura de datos que se manejaran en la app
