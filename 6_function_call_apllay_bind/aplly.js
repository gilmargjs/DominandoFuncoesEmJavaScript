const pessoa1 = {
    nome:'Miguel',
};

const animal1 = {
    nome: 'Murphy',
};

function getSomething1(){
    console.log(this.nome)
}

getSomething1.apply(pessoa1)


const myobj1 = {
    num1:2,
    num2:4,
};
function soma(a, b){
    console.log(this.num1 + this.num2+ a + b)}

// obs: Diferente do call o apllay é passado dentro de um Array '[1,5]'
soma.apply(myobj1,[1,5]);