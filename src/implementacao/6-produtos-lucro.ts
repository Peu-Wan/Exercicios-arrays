type Produto = {
    nome: string;
    custo: number;
    preco: number;
}


function calcularLucros(produtos: Produto[]): string {

    const resultados : number[] = [0,0,0]

    produtos.forEach(produto => {
        const lucroPercentual = ((produto.preco - produto.custo) / produto.custo) * 100

        if (lucroPercentual < 10 ) {
            resultados[0]++;
        } else if (lucroPercentual >= 10 && lucroPercentual <= 30) {
            resultados[1]++;
        } else {
            resultados[2]++;
        }
    });
return `O relatório aponta que: \n produtos com lucro baixo: ${resultados[0]}\n médio lucro: ${resultados[1]} \n alto lucro: ${resultados[2]}`;
}

console.log(calcularLucros([
        { nome: "Arroz 5kg", custo: 25.00, preco: 26.00 },
        { nome: "Feijão 1kg", custo: 8.00, preco: 8.40 },
        { nome: "Açúcar 1kg", custo: 4.00, preco: 4.20 },
        { nome: "Leite UHT", custo: 5.00, preco: 5.20 },
        { nome: "Óleo Soja", custo: 7.00, preco: 7.30 },
        { nome: "Sal Refinado", custo: 2.00, preco: 2.10 },
        { nome: "Café 500g", custo: 15.00, preco: 16.00 },
        { nome: "Macarrão", custo: 3.50, preco: 3.70 },
        { nome: "Farinha", custo: 4.50, preco: 4.80 },
        { nome: "Manteiga", custo: 12.00, preco: 12.50 },
        { nome: "Detergente", custo: 2.50, preco: 2.60 },
        { nome: "Sabão Pó", custo: 18.00, preco: 19.50 },
        { nome: "Esponja", custo: 1.50, preco: 1.60 },
        { nome: "Papel Hig.", custo: 14.00, preco: 15.00 },
        { nome: "Creme Dental", custo: 3.00, preco: 3.20 },
        { nome: "Bolacha", custo: 3.00, preco: 3.60 },
        { nome: "Iogurte", custo: 4.00, preco: 4.80 },
        { nome: "Queijo", custo: 30.00, preco: 36.00 },
        { nome: "Presunto", custo: 20.00, preco: 25.00 },
        { nome: "Suco Caixa", custo: 5.00, preco: 6.20 },
        { nome: "Refrigerante", custo: 8.00, preco: 10.00 },
        { nome: "Cerveja", custo: 4.00, preco: 5.00 },
        { nome: "Vinho", custo: 40.00, preco: 50.00 },
        { nome: "Chocolate", custo: 6.00, preco: 7.50 },
        { nome: "Salgadinho", custo: 5.00, preco: 6.50 },
        { nome: "Gelatina", custo: 1.00, preco: 1.25 },
        { nome: "Maionese", custo: 7.00, preco: 8.50 },
        { nome: "Ketchup", custo: 6.00, preco: 7.20 },
        { nome: "Mostarda", custo: 5.00, preco: 6.00 },
        { nome: "Azeite", custo: 35.00, preco: 42.00 },
        { nome: "Amendoim", custo: 5.50, preco: 8.90 },
        { nome: "Castanha", custo: 15.00, preco: 25.00 },
        { nome: "Paçoca", custo: 0.50, preco: 1.00 },
        { nome: "Pipoca", custo: 2.00, preco: 4.00 },
        { nome: "Bala Pacote", custo: 10.00, preco: 15.00 },
        { nome: "Chiclete", custo: 0.20, preco: 0.50 },
        { nome: "Pirulito", custo: 0.30, preco: 0.70 },
        { nome: "Barra Cereal", custo: 2.00, preco: 3.50 },
        { nome: "Energético", custo: 6.00, preco: 12.00 },
        { nome: "Água Mineral", custo: 1.00, preco: 3.00 },
        { nome: "Sorvete", custo: 15.00, preco: 22.00 },
        { nome: "Picolé", custo: 2.00, preco: 5.00 },
        { nome: "Açaí 500ml", custo: 12.00, preco: 20.00 },
        { nome: "Granola", custo: 8.00, preco: 13.00 },
        { nome: "Mel 250g", custo: 15.00, preco: 25.00 },
        { nome: "Torrada", custo: 4.00, preco: 6.50 },
        { nome: "Geleia", custo: 10.00, preco: 16.00 },
        { nome: "Chá Verde", custo: 5.00, preco: 9.00 },
        { nome: "Amêndoas", custo: 20.00, preco: 35.00 },
        { nome: "Nozes", custo: 25.00, preco: 45.00 }
    ])
);
