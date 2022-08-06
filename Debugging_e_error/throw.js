function verificaPalindromo(string){
    if(!string) throw "Seu codigo tem problemas";
    console.log(string === string.split('').reverse().join(''));

}
function tryCatExemplo(string) {
    try{
        verificaPalindromo(string)
    }catch (e) {
    console.log(e)
}
}
tryCatExemplo('')

function verificaPalindromo1(string){
    if(!string) throw "Seu codigo tem problemas também";
    console.log(string === string.split('').reverse().join(''));

}

function tryCatExemplo1(string) {
    try{
        verificaPalindromo1(string)
    }catch (e) {
        throw e
}
finally{
    console.log('a string foi   '+ string)
}
}
tryCatExemplo1('ala')
