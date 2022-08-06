// dentro do objeto
const pessoa = {
    firstName:"André",
    lastName:"soares",
    id:1,
    fullName:function(){
        console.log( `${this.firstName} ${this.lastName} `)
    },
    getId:function(){
        console.log( this.id);
    }
};

pessoa.fullName();
pessoa.getId();

// fora da função
console.log(this)

// Dentro da função
(function(){
    console.log(this)
})();