//função normal 
const helloWord = function(){
    console.log("Hello Word");
}

helloWord()
// Arrow
const helloWord1 = ()=>{
    console.log("Hello Word");
}
helloWord1()
// outra forma
const helloWord2 = ()=> "Hello Word"
console.log(helloWord2())

// outra forma
const soma = (a, b)=> a + b;
console.log(soma(4, 6))
// mais uma forma
const soma1 = a => a;
console.log(soma1(5))