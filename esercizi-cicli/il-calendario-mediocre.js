/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/
var mese_30 = ['Aprile', 'Giugno', 'Settembre', 'Novembre']
var mese_28 = ['Febbraio']
var mese_31 = ['Gennaio','Marzo', 'Maggio', 'Luglio', 'Agosto', 'Ottobre', 'Dicembre']
var settimana = ['Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato', 'Domenica']
var input = 'Gennaio'
var day = 5

var days;
if (mese_28.indexOf(input) != -1)
    days = 28
else if (mese_30.indexOf(input) != -1)
    days = 30
else if (mese_31.indexOf(input) != -1)
    days = 31
else
    console.log('Not Valid Input')

var i;
var giorno
for (i = 1; i <= days; i++) {

    var pos = (day+i-1)
    var pos2 = pos % settimana.length

    giorno = settimana[pos2]
    console.log(giorno + " " + i);
}
