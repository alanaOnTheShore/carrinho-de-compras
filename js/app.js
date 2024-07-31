let totalGeral;
limpar();

function adicionar() {
        //recuprar valores nome do produto, quantidade, valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let nomeProduto = produto.split('-')[0];//divide valor em duas arrays, antes e depois do traço, e pega a de posição 0
    let valorPorProduto = produto.split('R$')[1];

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${totalIndividual}</span>
  </section>`; 
    //calcular total
    totalGeral = totalGeral + totalIndividual;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = '';

 }

 function limpar(){
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').textContent = 'R$0';
 }