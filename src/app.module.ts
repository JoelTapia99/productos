import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { MongooseModule } from "@nestjs/mongoose"; */
import { ProductoModule } from './producto/producto.module';


@Module({
  imports: [ /* MongooseModule.forRoot('mongodb://localhost/nest'), */
   ProductoModule ],
  controllers: [AppController,
  ],
  providers: [AppService
  ],
})
export class AppModule {}
