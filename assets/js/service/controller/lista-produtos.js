import { produtosServices } from "../produtos-services.js";

const criaNovaLinha =  ( src,  nome, preco, categoria, id) => {
    const linhaNovoProduto = document.createElement('div');

    const conteudo = `<div class="produto">
                        <div class="container__botoes">
                            <button class="buttonDelete" type="button">
                            <img class="deleteImage" src="../../../imagens/deletar.png">
                            </button>
                            
                            <a href="#">
                            
                            <button class="buttonEdit" type="button">
                                <img class="editImage" src="../../../imagens/editar.png
                                ">
                            </button>
                            
                            </a>
                        </div> 
                        <img src="${src}" alt="">
                        <p class="descricao">${nome}</p>
                        <p class="preco">${preco}</p>
                        <button class="ver__prod">Ver produto</button>
                    </div>`
    
    

    linhaNovoProduto.innerHTML = conteudo;

    return linhaNovoProduto;
}

const form = document.querySelector("[data-prod]");

 produtosServices.listaProdutos() //fazendo loop e exibindo na tela
.then(data => {
     data.forEach(elemento => {
        form.appendChild(criaNovaLinha(elemento.src, elemento.nome, elemento.preco,  elemento.descricao, elemento.categoria, elemento.id))
})})
