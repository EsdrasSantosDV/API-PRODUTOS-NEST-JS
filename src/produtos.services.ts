import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produto } from "./produtos.models";
@Injectable()
export class ProdutosService{
    constructor(

        @InjectModel(Produto)
        private produtoModel:typeof Produto
    ){

    }

    obterTodos():Produto[]{
        return this.produtos;
    }

    obterUm(id:number):Produto{
        return this.produtos[0];
    }

    criar(produto:Produto)
    {
        this.produtos.push(produto);
    }

    alterar(produto: Produto):Produto{
        return produto;
    }

    apagar(id:number)
    {
        this.produtos.pop();
    }

}