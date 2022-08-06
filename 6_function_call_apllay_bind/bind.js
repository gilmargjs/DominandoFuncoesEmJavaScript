const retornaNome = function(){
    return this.nome;
};

let gilmar = retornaNome.bind({nome:'Gilmar José'});

console.log(gilmar())