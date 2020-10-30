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

