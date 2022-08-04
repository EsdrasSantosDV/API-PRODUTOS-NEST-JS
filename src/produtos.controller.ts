import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produtos.models";
@Controller('produtos')
export class ProdutosController{
    produtos: Produto[]=
    [
        new Produto("LIV01","LIVRO TDD E BDD na prática", 29.90),
        new Produto("LIV02","LIVRO INICIANDO COM FLUTTER",39.94),
        new Produto("LIV03","INTELIGENCIA ARTIFICIAL COMO SERVICO",34.42),

    ];


    //DECORETORS
    //QUANDO TIVER UMA REQUISIÇÃO DO TIPO GET
    @Get()
    obterTodos():Produto[]{
        return this.produtos;
    }

    //PARAMETRO
    @Get(':id')
    obterUm(@Param()params):Produto
    {
        return this.produtos[0];
    }

    @Post()
    criarproduto(@Body() produto:Produto){
        produto.id=100;
        this.produtos.push(produto);
    }

    @Put()
    alterarproduto(@Body() produto:Produto):Produto{
       
        return produto;
    }

    @Delete(':id')
    apagar(@Param()params){
        this.produtos.pop();
    }
}