import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //PIPES
  //PARA VALIDAR OS DADOS NA API
  app.useGlobalPipes(new ValidationPipe({
    transform:true

  }));
  //DEFINIR QUEM VAI FAZER A INJEÇÃO DE DEPENDENCIA DO CLASS VALIDATOR
  //ESTAMOS DELEGANDO PARA O NEST
  useContainer(app.select(AppModule),{fallbackOnErrors:true});

  const config = new DocumentBuilder()
    .setTitle('API-NEST JS')
    .setDescription('API UTILIZANDO O FRAMEWORK NEST JS')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



  app.enableCors();
  await app.listen(3000);
}
bootstrap();
