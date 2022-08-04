import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produtos.models";
import { ProdutosService } from "./produtos.services";
@Controller('produtos')
export class ProdutosController{
    constructor(private produtosService:ProdutosService){

    }
   

    //DECORETORS
    //QUANDO TIVER UMA REQUISIÇÃO DO TIPO GET
    @Get()
    obterTodos():Produto[]{
        return this.produtosService.obterTodos();
    }

    //PARAMETRO
    @Get(':id')
    obterUm(@Param()params):Produto
    {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    criarproduto(@Body() produto:Produto){
        
        this.produtosService.criar(produto);
    }

    @Put()
    alterarproduto(@Body() produto:Produto):Produto{
       
        return this.produtosService.alterar(produto);
    }

    @Delete(':id')
    apagar(@Param()params){
        this.produtosService.apagar(params.id)
    }
}