interface produto {
    codigoProduto: number,
    qtde: number,
    preco: number
}

interface relatorioProduto {
    codigoProduto: number,
    qtde: number,
    preco: number,
    totalProduto: number
}

function gerarRelatorioVendas(produtos: produto[]) : string {

    let relatorio: relatorioProduto[] = [];

    let codProdutoMaisVendido: number = 0;
    let valorProdutoMaisVendido: number = 0;
    let maiorQtde: number = 0;
    let totalLoja: number = 0;

    produtos.forEach(produto => {

       let totalProd = produto.qtde * produto.preco;
       totalLoja += totalProd;

       if (produto.qtde > maiorQtde) {
        maiorQtde = produto.qtde;
        codProdutoMaisVendido = produto.codigoProduto;
        valorProdutoMaisVendido = produto.preco;
       }

       relatorio.push({
        codigoProduto: produto.codigoProduto,
        qtde: produto.qtde,
        preco: produto.preco,
        totalProduto: totalProd
     });

    }

);

let comissao: number = totalLoja * 0.05;
let salario: number = 400 + comissao;

return `${ JSON.stringify(relatorio, null, 2)}
Total geral da Loja: ${totalLoja}
Comissão de vendas: ${comissao.toFixed(2)}
Salário final: ${salario.toFixed(2)}
Produto mais vendido: ${codProdutoMaisVendido}
Valor do produto: ${valorProdutoMaisVendido}`;  

    
}

console.log(gerarRelatorioVendas([
        {codigoProduto: 1, qtde: 2, preco: 2.50}, //5
        {codigoProduto: 2, qtde: 4, preco: 3.50}, // 14.00
        {codigoProduto: 3, qtde: 1, preco: 1.25}, // 1.25
        {codigoProduto: 4, qtde: 3, preco: 4.50}, // 13.50
        {codigoProduto: 5, qtde: 2, preco: 9.00} // 18.00
]));