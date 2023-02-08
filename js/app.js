// console.log('Test')


// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. Se il numero è dispari, lo salviamo in una lista. 
// Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari. Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).



let numero, resto;
const numeriDispari = [];


while ( numeriDispari.length < 10 ) {

    console.log('siamodentro');

    numero = parseInt(prompt('Inserisci un numero'));

    resto = numero % 2;
    console.log(resto)

    if ( !isNaN(numero) && resto === 1 ) {
        
        numeriDispari.push(numero);
        console.log(numeriDispari);
    } 

    
}


// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.
for (let i = 0; i < numeriDispari.length; i++) {
    console.log(numeriDispari[i])
}


