import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';
import { Produto } from './produtos.models';
import { ProdutosService } from './produtos.services';


//PRECISA COLOCAR NO APP.MODULE AS CONTROLLERS E OS SERVICES
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Latveria67',
      database: 'produtos',
      autoLoadModels:true,
      synchronize:true,
    }),
    SequelizeModule.forFeature([Produto])
  ],
  controllers: [AppController,ProdutosController],
  providers: [AppService,ProdutosService],
})
export class AppModule {}
