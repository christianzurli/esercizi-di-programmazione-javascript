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
