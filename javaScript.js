//Selecionando Elementos HTML

const inputTempo = document.getElementById("inputTempo")
const buttonIniciar = document.getElementById("buttonIniciar")
const buttonPausar = document.getElementById("buttonPausar")
const buttonZerar = document.getElementById("buttonZerar")


//FUNÇÕES

    var seg=0;
    var min=0;
    var hor=0;
    var intervalo=0;

     //Função para o cronometro nesse formato '00:00:00'
     const doisDigitos = (digito) =>{

        if(digito<10){
            return('0' + digito);
        }else{
            return(digito);
        }
    }

    const contador = () => {

        seg++;

        if(seg==60){
            min++;
            seg=0;
            if(min==60){
                hor++;
                min=0;
            }
        }

        document.getElementById('inputTempo').value=doisDigitos(hor)+':'+doisDigitos(min)+':'+doisDigitos(seg);

        
    }


    const btnIniciar = () => {
       intervalo = setInterval(contador, 1000);

       //console.log(document.getElementById("inputTempo").value = intervalo)
    }

    const btnPausar = () => {
        clearInterval(intervalo);
    }

    const btnZerar = () => {
        clearInterval(intervalo);
        seg=0;
        min=0;
        hor=0;

        document.getElementById('inputTempo').value=doisDigitos(hor)+':'+doisDigitos(min)+':'+doisDigitos(seg);

        //console.log(document.getElementById("inputTempo").value ="")


    }



    // Eventos

// Escutador de evento do botão INICIAR
buttonIniciar.addEventListener("click",  (event) =>{

    btnIniciar();
    contador();
    doisDigitos();

});

// Escutador de evento do botão PAUSAR
buttonPausar.addEventListener("click",  (event) =>{

    btnPausar();

});

// Escutador de evento do botão ZERAR
buttonZerar.addEventListener("click",  (event) =>{

    btnZerar();

});
