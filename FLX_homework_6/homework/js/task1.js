var a = prompt('Задайте змінну a (а не дорівнює 0)', "");
var b = prompt('Задайте змінну b', "");
var c = prompt('Задайте змінну c', "");

if (a === "0" || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data');
} else {
    var D = b * b - 4 * a * c;
    var x1, x2;
    if (D > 0) {
       x1 = (-b + Math.sqrt(D))/(2 * a); 
       x2 = (-b - Math.sqrt(D))/(2 * a);
       alert("x1 = " + x1 + " , " + "x2 = " + x2); 
    } else if (D === 0) {
       x1 = -b / (2 * a);
       alert("x1 = " + x1); 
    } else if (D < 0) {
       alert("No solution"); 
    }
}

