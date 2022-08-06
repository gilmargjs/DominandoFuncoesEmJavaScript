function verificaPalindromo2(string) {
    if (!string) throw "Seu codigo tem problemas";
    console.log(string === string.split('').reverse().join(''));

}

function tryCatExemplo2(string) {
    // new Error(message);
    const MeuErro = new Error('essa é minha mensagem')
    try {
        verificaPalindromo2(string)
    } catch (MeuErro) {
        console.log(MeuErro)
    }
}
tryCatExemplo2('')