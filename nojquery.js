var ultimaOperacao = false;
var operador01;
var operacao;
    function clicarNum(n){   
       var saida = document.getElementById("res")
    if(ultimaOperacao){
                saida.innerHTML = n;
        ultimaOperacao = false;
    }
    else{
        saida.innerHTML = parseFloat(saida.innerHTML + n) ;
    }
    }

    function clicarOp(op){
        operador01 = parseFloat(document.getElementById("res").innerHTML);
        operacao = op;
        ultimaOperacao = true;
    }

    function clicarIgual(){
        var saida = document.getElementById("res");
        var operador02 = parseFloat(document.getElementById("res").innerHTML);

        switch (operacao){
            case
            "sum":
            saida.innerHTML = operador01 + operador02;
            break;

            case
            "sub":
            saida.innerHTML = operador01 - operador02;
            break;

            case
            "mult":
            saida.innerHTML = operador01 * operador02;
            break;

            case
            "div":
            saida.innerHTML = operador01 / operador02;
            break;
            
            default:
                saida.innerHTML = "Erro!"
        } 

    }
