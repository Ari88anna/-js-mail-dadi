//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// chiedo all'utente la mail
var mailUtente = prompt("Inserisci la tua email");
console.log(mailUtente);

// lista di mail che possono accedere
var listaMail = ['sognodinverno@gmail.com', 'cerebrolesi@gmail.com', 'chelansiasiaconte@homail.it', 'mainagioia@yahoo.it'];


 //controllo che la mail sia nella lista di chi può accedere
var mailOk = false;

for ( var i=0; i<listaMail.length; i++) {
    var mailCheck = listaMail[i];

    if ( mailUtente == mailCheck) {
        mailOk = true;
        console.log(mailOk)
    } else {
        mailOk = false;
        console.log(mailOk)
    }      
}

 if (mailOk) {
     alert('Ok la mail è giusta');
 } else {
    alert ('La mail non è giusta');
}











