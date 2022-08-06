// 1ª forma
function numeroPositivo(num){
    let resultado;
    if(num < 0){
        resultado = false;
    }else{
        resultado = true;
    }
    console.log(resultado);
}
numeroPositivo(2)

// 2ª forma
function numeroPositivo1(num){
    let resultado;
    const ehNegativo = num < 0;
    if(ehNegativo){
        resultado = false;
    }else{
        resultado = true;
    }
    console.log(resultado);
}

numeroPositivo1(2)

// 3ª forma
function numeroPositivo2(num){
    const ehNegativo1 = num < 0;
    if(ehNegativo1){
        return false;
    }
    console.log(true);
}

numeroPositivo2(2)