
function recebeArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os Parâmetros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo objetct");

        if (typeof num !== 'number') throw new TypeError("Número  precisa do tipo Number");

        if (arr.length !== num) throw new RangeError("tamanho do array é inválido");

        console.log(arr)
    } catch (e) {
        
    if (e instanceof ReferenceError) {
        console.log("Este erro é um Reference Error!");
        console.log(e.message)
    } else if (e instanceof TypeError) {
        console.log("Este erro é um TypeError!");
        console.log(e.message);
    } else if (e instanceof RangeError) {
        console.log("Este erro é um RangeError!");
        console.log(e.message);
    } else {
        console.log("Tipo de erro não Esperado:" + e)
    }
    }
}
recebeArray([1,5,'ola',true],4)