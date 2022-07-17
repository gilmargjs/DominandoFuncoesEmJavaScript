function forInExemplo(obj){
    for(prop in obj){
        // acesso as chaves
        console.log(prop)
        
        // acesso aos valores
        console.log(obj[prop])
    }
}


const meuObjeto = {
    nome:"joão",
    idade:"20",
    cidade:"Recife"
}

forInExemplo(meuObjeto)