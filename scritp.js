const fs = require('fs');

// 1 LER O JSON
function lerDados(){

    const dadosBrutos = fs.readFileSync('dados.json');
    const dados = JSON.parse(dadosBrutos);
    return dados;

}

// 2 LISTAGEM DOS PRODUTOS
function listarProdutos(){

    const produtos = lerDados();

    produtos.forEach(produto =>{
        console.log(` Nome: ${produto.nome}, Preço: ${produto.preco}`);
    });
}

//listarProdutos();

// 3 CALCULAR O TOTAL DO ESTOQUE

function calcularValorEstoque(){

    const produtos = lerDados();
    let valorTotal = 0;

    produtos.forEach( produto =>{
        valorTotal += produto.preco * produto.quantidade;
    });

    console.log(`Valor Total do Estoque:
         ${valorTotal.toFixed(2)} `)
}
listarProdutos();
calcularValorEstoque();
