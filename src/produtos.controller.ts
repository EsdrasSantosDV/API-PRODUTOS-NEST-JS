import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController{

    //DECORETORS
    //QUANDO TIVER UMA REQUISIÇÃO DO TIPO GET
    @Get()
    obterTodos():string{
        return 'Lista todos os produtos';
    }

    //PARAMETRO
    @Get(':id')
    obterUm(@Param()params):string
    {
        return `Retorna os dados do produto ${params.id}`;
    }

    @Post()
    criarproduto(@Body() produto):string{
        console.log(produto);
        return 'Produto criado';
    }

    @Put()
    alterarproduto(@Body() produto):string{
        console.log(produto);
        return 'Produto alterado';
    }

    @Delete(':id')
    apagar(@Param()params):string{
        return `Apaga o produto ${params.id}`;
    }
}