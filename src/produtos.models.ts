export class Produto{
    id: number;
    codigo:string;
    nome:string;
    preco:number;
    //ID  NÃO E NECESSARIO POR CAUSA DO BANCO
    constructor(codigo:string, nome:string,preco:number)
    {
        this.codigo=codigo;
        this.nome=nome;
        this.preco=preco;
    }
}