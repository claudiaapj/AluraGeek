//conexão com o API
const listaProdutos = () => {  
    return fetch(` http://localhost:3000/produtos`)
    .then(resposta =>{
        return resposta.json()
    })
}

const criaProduto = ( src, categoria, nome,  preco, descricao) => {
    return fetch(` http://localhost:3000/produtos`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            src: src,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao,

        })
    })
    .then(resposta => {
        if(resposta.ok) {
            return resposta.body;
        }
        throw new Error("Não foi possível cadastrar novo produto");
    });
};

export const produtosServices = {
    listaProdutos,
    criaProduto
}

