
let vitorias = 200;
let derrotas = 10;
const saldoHankeado = saldoDeVitorias(vitorias,derrotas);

const nivelJogador = ClassificarNivelDoJogador(saldoHankeado);

function saldoDeVitorias(vitorias, derrotas){
    return vitorias - derrotas;
}

function classificacaoHankeada(saldoHankeado, nivel){

    if(saldoHankeado <= 10){
        return `O Herói tem um saldo de ${saldoHankeado} vitorias está no nível ** ${nivel} **`
    }if(saldoHankeado >= 11 && saldoHankeado <=20){
        return `O Herói tem um saldo de ${saldoHankeado}vitorias está no nível ** ${nivel} **`
    }if(saldoHankeado >= 21 && saldoHankeado <=50){
        return `O Herói tem um saldo de ${saldoHankeado} vitorias está no nível ** ${nivel} **`
    }if(saldoHankeado >= 51 && saldoHankeado <=80){
        return `O Herói tem um saldo de ${saldoHankeado} vitorias está no nível ** ${nivel} **`
    }if(saldoHankeado >= 81 && saldoHankeado <=90){
        return `O Herói tem um saldo de ${saldoHankeado} vitorias está no nível ** ${nivel} **`
    }if(saldoHankeado >= 91 && saldoHankeado <=100){
        return `O Herói tem um saldo de ${saldoHankeado} vitorias está no nível ** ${nivel} **`
    }if(saldoHankeado >= 101 ){
        return `O Herói tem um saldo de ${saldoHankeado} vitorias está no nível ** ${nivel} **`
    }
}

function ClassificarNivelDoJogador(saldoHankeado){
    if(saldoHankeado <= 10){
        return "Ferro"
    }if(saldoHankeado >= 11 && saldoHankeado <=20){
        return "Bronze"
    }if(saldoHankeado >= 21 && saldoHankeado <=50){
        return " Prata"
    }if(saldoHankeado >= 51 && saldoHankeado <=80){
        return "Ouro"
    }if(saldoHankeado >= 81 && saldoHankeado <=90){
        return "Diamante"
    }if(saldoHankeado >= 91 && saldoHankeado <=100){
        return "Lendário"
    }if(saldoHankeado >=101){
        return "Imortal"
    }
    
}

console.log(classificacaoHankeada(saldoHankeado,nivelJogador));

