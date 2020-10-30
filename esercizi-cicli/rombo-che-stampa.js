/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/

var n = 5
var stringa = ''
var spazi
var ics = 1
for (i = 1; i <= n; i++) {

    spazi = (n-ics)
    lettere = (n-spazi)
    spazi = (spazi/2)
    stringa += " ".repeat(spazi) + "X".repeat(lettere) + " ".repeat(spazi) +"\n"

    if (i < n/2) {
        ics += 2
    } else {
        ics -= 2
    };

}
console.log(i);

var num = 9
var numIcs = 1
for (riga = 0; riga < num; riga++) {
    var numSpazi = (num - numIcs) / 2
    // disegnare la riga
    var stringa = '\t'
    for (i = 0; i < numSpazi; i++){
        stringa += '_'
    }
    for (i = 0; i < numIcs; i++){
        stringa += 'X'
    }
    for (i = 0; i < numSpazi; i++){
        stringa += '_'
    }
    console.log(stringa)

    // modificare numIcs

    if (riga < parseInt(num / 2))
        numIcs += 2
    else
        numIcs -= 2


}
