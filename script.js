let intentos = 6;
let diccionario = ["ITEMS", "PAPER", "ANGEL", "MADRE", "PADRE"];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];


const BUTTON = document.getElementById("guess-button");

BUTTON.addEventListener("click", intentar);

function intentar (){
    let intento = document.getElementById("guess-input").value.toUpperCase(); 

    intentos = intentos - 1
    console.log("te quedan", intentos, "intentos");

    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = 'row';   
    
    

    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
    
         if (intento[i]===palabra[i]){
            
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = '#79b851';

         if (intento===palabra){
            terminar("<h1>GANASTE!😀</h1>")
         }   
            
        } else if(palabra.includes(intento[i]) ) {
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = '#f3c237';
        } else {
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = '#a4aec4';

        } if (intentos==0){
            terminar("<h1>PERDISTE!😖</h1>")

        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    
    } function random () {
        Math.floor(Math.random() * 5) +1;
    }
    
    
    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        BUTTON.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
    }
    






