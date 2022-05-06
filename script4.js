//  creare pag web con titolo: 'Function library example' 
//  in cui dovremo dare input,ne calcoleremo quadrato, 
//  cubo, fattoriale. 

const request = prompt('insert number:'); 

const number = parseFloat(request); 

function quadrato(number) {
    return number ** 2;
} 

function cubo(number){ 
    return number ** 3;
}

function fattoriale(number){ 

    let x = number; 
    while (x > 1) {
        number *= x - 1; 
        x--;
    }
    return number;       
   }   

console.log(quadrato(number));
console.log(cubo(number)); 
console.log(fattoriale(number)); 

alert(quadrato(number) + cubo(number + fattoriale(number)))
