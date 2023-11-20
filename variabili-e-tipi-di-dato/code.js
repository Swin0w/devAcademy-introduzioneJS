var importo1 = 124;
var importo2 = 458;
var importo3 = 322;

var totale = importo1 + importo2 + importo3;

document.write('Totale: ' + totale + '€<br><br>');

var tax = totale * 23 / 100;

document.write('Tasse: ' + tax + '€<br><br>');

var g = totale - tax;

document.write('Guadagno netto: ' + g + '€');