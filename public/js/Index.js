const mymodal = new bootstrap.Modal("#register-Modal")

let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session"); 

checklogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const senha = document.getElementById("senha-input").value;
    const checksession = document.getElementById("session-check").checked;

    const account = getaccount(email);

    if(!account) {
        alert("Opps! Verifique o usuário ou a senha.");
        return;
    }

    if(account) {
        if(account.password !== senha) {
            alert("Opps! Verifique o usuário ou a senha.");
            return;
        }

        savesession(email, checksession);

        window.location.href = "home.html";

    }



});



//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = document.getElementById("Email-create-input").value;
    const senha = document.getElementById("password-create-input").value;
    const confirma = document.getElementById("confirma-create-input").value;

    if(email.length <5) { 
        alert("Preencha o campo com um e-mail valido.")
        return;
    }

    if(senha.length<4) {
        alert("Preencha a senha com no mínimo 4 digitos")
        return;
    }

    if(senha != confirma) {
        alert("Os valores nos campos Senha e Confirmar Senha não correspondem.")
        return;
    }


    saveaccount({
        login: email,
        password: senha,
        transactions: [] 
    });

    mymodal.hide();

    function saveaccount(data) {
        localStorage.setItem(data.login, JSON.stringify(data));

    }
    

    alert("Conta criada com sucesso.")


});


function checklogged() {

    if(session) {
        sessionStorage.setItem("logged",session);
        logged = session;

    }
    if(logged) {
        savesession(logged, session);

        window.location.href = "home.html";
    }    
    

}


function savesession(data, savesession) {
    if(savesession) {
        localStorage.setItem("session",data);
    }
    sessionStorage.setItem("logged", data);
}



function getaccount(key){
    const account = localStorage.getItem(key)

    if(account) {
        return JSON.parse(account);
    }

    return ""
}


