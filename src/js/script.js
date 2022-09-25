
const ul = document.querySelector('.containerListaProdutos ul');

function montarListaProdutos(listaProdutos) {

    ul.innerHTML = '';
    
    listaProdutos.forEach((produto) => {
        
    });

    listaProdutos.forEach((produto) => {
        const li   = document.createElement('li');
        const img  = document.createElement('img');
        const h3   = document.createElement('h3');
        const p    = document.createElement('p');
        const span = document.createElement('span');

        img.src        = produto.img;
        img.alt        = produto.nome;
        h3.innerText   = produto.nome;
        p.innerText    = produto.preco;
        span.innerText = produto.secao;

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        ul.appendChild(li);
    });
}
montarListaProdutos(produtos);

//Filtrar hortifruti

function filtrarPorHortifruti(){

    const listaHortifruti = produtos.filter((produto) =>{
        return produto.secao === 'Hortifruti';
    })
    montarListaProdutos(listaHortifruti);
    somarTudo(listaHortifruti)
}


const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);


function mostrarTodos(){

    const listaTodos = produtos.map((produto) => {
        return produto;
    })
    montarListaProdutos(listaTodos);
    somarTudo(listaTodos);
}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');

botaoMostrarTodos.addEventListener('click', mostrarTodos);

function busca(){

    let area = document.querySelector('.campoBuscaPorNome').value.toLowerCase();
    
    const pesquisa = produtos.filter((produto) => {
        if(area === produto.nome.toLowerCase()){
            return produto;
        }
    })
    montarListaProdutos(pesquisa);
    somarTudo(pesquisa);
}

const botaoPesquisa = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');

botaoPesquisa.addEventListener('click', busca);

function somarTudo(precoFinal){

    const precoAmostra = document.getElementById('precoTotal')

    const total = precoFinal.reduce((acc, {preco}) => {
        acc += preco
        return acc
    }, 0)
    
    precoAmostra.innerText = total
}
somarTudo(produtos)
