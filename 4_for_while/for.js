function multiplicaPorDois(arr){
    let multiplicados = [];
    for(let i = 0;i < arr.length;i++){
        multiplicados.push(arr[i] * 2);
    }
    console.log(multiplicados)
}
let meusNumeros = [10,22,31,45,53]
multiplicaPorDois(meusNumeros)