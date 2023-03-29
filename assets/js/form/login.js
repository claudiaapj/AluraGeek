
(() =>{
    var login = document.querySelector("[data-login]");
   

    login = addEventListener("submit", event => {
        event.preventDefault();
        const user = event.target.querySelector("[data-user]");
        const senha = event.target.querySelector("[data-senha]");

        if(user.value == "admin@alura.com" && senha.value == "admin23"){
            window.location.href = "../../paginas/produtos.html"
        }else{
            const erro = document.querySelector("[data-erro]");
            erro.innerHTML = " Usuário não autorizado, confirme seu e-mail e senha"

        }
    })
})();