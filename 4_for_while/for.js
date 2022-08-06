function multiplicaPorDois(arr){
    let multiplicados = [];
    let impares = [];
    let pares = [];
    for(let i = 0;i < arr.length;i++){
        multiplicados.push(arr[i] * 2);
       if(arr[i] % 2 === 0) {
        pares.push(arr[i])
    }else {impares.push(arr[i])};
        
    }
    console.log(multiplicados)
    console.log(pares)
    console.log(impares)
}
let meusNumeros = [10,22,31,45,53,60]
multiplicaPorDois(meusNumeros)