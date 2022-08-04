import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.services';


//PRECISA COLOCAR NO APP.MODULE AS CONTROLLERS E OS SERVICES
@Module({
  imports: [],
  controllers: [AppController,ProdutosController],
  providers: [AppService,ProdutosService],
})
export class AppModule {}
