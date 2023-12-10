const nome="Patrick"
let nome2=""
let pessoadefault= {
    nome: "Marcelo",
    idade: "33",
    trabalho: "Programador"
}

let nomes = ["Marcelo","Maria Silva","Pedro silva"];
let pessoas = [
    {
        nome: "Marcelo",
        idade: "33",
        trabalho: "Programador"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    },
];


function alterarnome() {
    nome2 = "Maria silva";
    console.log("Valor alterado");
    console.log(nome2);
}

function recebeealteranome(novonome){
    nome2 = novonome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}


function imprimirpessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);
    
    console.log("idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);

}

function adicionarpessoa(pessoa){
    pessoas.push(pessoa)
}


function imprimirpessoas() {
    pessoas.array.forEach(item => {
        console.log("nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);
    
        console.log("trabalho:");
        console.log(item.trabalho);
    });
}


imprimirpessoas();

console.log(pessoas);

adicionarpessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
})

//console.log(pessoas);

//imprimirpessoa(pessoadefault);


//imprimirpessoa({
  //  nome: "Maria Silva",
    //idade: "25",
    //trabalho: "UX/UI Desininer"
//})




//recebeealteranome("João Silva Pereira");
//recebeealteranome("Maria Silva")

//alterarnome();