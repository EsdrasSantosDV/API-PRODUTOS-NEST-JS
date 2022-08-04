import { Injectable } from "@nestjs/common";
import { Produto } from "./produtos.models";
@Injectable()
export class ProdutosService{
    produtos: Produto[]=
    [
        new Produto("LIV01","LIVRO TDD E BDD na prática", 29.90),
        new Produto("LIV02","LIVRO INICIANDO COM FLUTTER",39.94),
        new Produto("LIV03","INTELIGENCIA ARTIFICIAL COMO SERVICO",34.42),

    ];

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