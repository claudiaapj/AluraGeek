const criaNovaLinha =  (nome, src, categoria, preco, id) => {
    const linhaNovoProduto = document.createElement('div');

    const conteudo = `  <img src="${src}" alt="">
    <p class="descricao">${nome}</p>
    <p class="preco">${preco}</p>
    <button class="ver__prod">Ver produto</button>`

    linhaNovoProduto.innerHTML = conteudo;

    return linhaNovoProduto;
}

const form = document.querySelector("[data-prod]");



const http = new XMLHttpRequest();

http.open('GET', "http://localhost:3000/produtos");

http.send();

http.onload = () =>{
    const data =  JSON.parse(http.response);

    data.forEach(elemento => {
        form.appendChild(criaNovaLinha(elemento.nome, elemento.src, elemento.categoria,elemento.preco, elemento.id))
        
    });
   

}

