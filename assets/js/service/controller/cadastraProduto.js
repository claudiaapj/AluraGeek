import { produtosServices } from "../produtos-services.js";

const formulario =  document.querySelector("[data-form-produto]");

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

const imagem = evento.target.querySelector('[data-input-imagem]').value 
const categoria =  evento.target.querySelector('[data-input-categoria]').value
const nome =  evento.target.querySelector('[data-input-nome]').value
const preco =  evento.target.querySelector('[data-input-preco]').value
const descricao =   evento.target.querySelector('[data-textarea-desc]').value

produtosServices.criaProduto(imagem, categoria, nome, preco, descricao)
.then(() =>{
    direciona('../../../../paginas/produtos.html');
})
    
})

function direciona(url){
    const pagina = window.open(url);
    pagina.focus();
}

