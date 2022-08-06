function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;
    

    if (ehNegativo) {
        console.log(" Esse número é negativo!");
    } else if (!ehNegativo && maiorQueDez) {
        console.log("Esse Número é positivo e maior que 10!");
    }else if(num > 0){
    console.log("Esse Número é positivo!");
    }
}

numeroPositivo(11)