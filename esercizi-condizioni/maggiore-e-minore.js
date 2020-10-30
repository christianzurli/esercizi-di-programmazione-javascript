/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

var a, b, c, d, min, max
a = 3, b = -1, c = 4, d = -2

max = a
if (b > max) {
    max = b
}
if (c > max) {
    max = c
}
if (d > max) {
    max = d
}

min = a
if (b < min) {
    min = b
}
if (c < min) {
    min = c
}
if (d < min) {
    min = d
}

/*
if ((b > max) && (b>c) && (b>d)) max = b;
if ((c>max) && (c>b) && (c>d)) max = c;
if ((d>max) && (d>b) && (d>b)) max = d;

if ((b<min) && (b<c) && (b<c)) min = b;
if ((c<min) && (c<b) && (c<d)) min = c;
if ((d<min) && (d<b) && (d<c)) min = d;
*/
console.log('maggiore: ' + max + ', minore: ' + min)
