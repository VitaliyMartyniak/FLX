var startPrice = prompt('Задайте початкову ціну (діапазон значень від 0 до 9999999)', "");
var discount = prompt('Задайте знижку (у відсотках)', "");
if (startPrice < 0 || startPrice > 9999999 || discount < 0 || discount > 99 || isNaN(startPrice) || isNaN(discount)) {
    alert("Invalid input data");
} else {
    var F = (startPrice / 100) * (100 - discount);
    var S = startPrice - F;
    startPrice = parseFloat(startPrice).toFixed(2);
    F = parseFloat(F).toFixed(2);
    S = parseFloat(S).toFixed(2);
    alert('Price without discount: ' + startPrice + '\n' + 'Discount: ' + discount
    + '% ' + '\n' + 'Price with discount: ' + F + '\n' + 'Saved: ' + S);
}
