import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos.controller';
import { Produto } from './produtos.models';
import { ProdutosService } from './produtos.services';


//PRECISA COLOCAR NO APP.MODULE AS CONTROLLERS E OS SERVICES
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
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
