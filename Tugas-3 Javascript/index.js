// LATIHAN SOAL 1 
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var per1 = pertama.substring(0,4);
var per2 = pertama.substring(12,18);
var per3 = kedua.substring(0, 7);
var per4 = kedua.substring(8, 18);

var upper = per4.toUpperCase();

console.log(per1, per2, per3, upper);

// LATIHAN SOAL 2 
var kataPertama = 10;
var kataKedua = 2;
var kataKetiga = 4;
var kataKeempat = 6;

console.log(kataPertama + kataKedua * kataKetiga + kataKeempat);

// LATIHAN SOAL 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);







// var sayHello = "Hello World!" 
// console.log(sayHello)

// var name = "John" // Tipe
// var angka = 12
// var todayIsFriday = false 

// console.log(name) // "John"
// console.log(angka) // 12
// console.log(todayIsFriday) // false

// var items
// console.log(items) // Undefine

// var sentences = "Javascript" 
// console.log(sentences[0]) // "J"
// console.log(sentences[2]) // "v"

// var word = "Javascript is awesome"
// console.log(word.length) // 21 

// console.log('i am a string'.charAt(3)); // 'm'

// var string1 = 'good';
// var string2 = 'luck';
// console.log(string1.concat(string2)); // goodluck

// var text = 'dung dung ces!';
// console.log(text.indexOf('dung'));  // 0
// console.log(text.indexOf('u'));     // 1
// console.log(text.indexOf('jreng')); // -1

// var car1 = 'Lykan Hypersport';
// var car2 = car1.substring(6);
// console.log(car2); // Hypersport

// var motor1 = 'zelda motor';
// var motor2 = motor1.substr(2, 2);
// console.log(motor2)

// var letter = 'This Letter Is For You';
// var upper  = letter.toUpperCase();
// console.log(upper);

// var letter = 'This Letter Is For You';
// var lower  = letter.toLowerCase();
// console.log(lower);

// var username    = ' administrator ';
// var newUsername = username.trim(); 
// console.log(newUsername)

// var int  = 12;
// var real = 3.45;
// var arr  = [6, 7, 8];

// var strInt  = String(int);
// var strReal = String(real);
// var strArr  = String(arr);

// console.log(strInt);  // '12'
// console.log(strReal); // '3.45'
// console.log(strArr);  // '6,7,8'

// var number = 21;
// console.log(number.toString()); // '21'
// var array = [1,2];
// console.log(array.toString());  // '1,2'

// var number1 = Number("90");   // number1 = 90
// var number2 = Number("1.23"); // number2 = 1.23
// var number3 = Number("4 5");  // number3 = NaN

// var int  = '89';
// var real = '56.7';
// var strInt_1 = parseInt(int);  // strInt_1 = 89
// var strInt_2 = parseInt(real); // strInt_2 = 56
// var strReal_1 = parseFloat(int); // strReal_1 = 89
// var strReal_2 = parseFloat(int); // strReal_2 = 56.7

// var angka = 100
// console.log(angka == 100) // true
// console.log(angka == 20) // false

// var sifat = "rajin"
// console.log(sifat != "malas") // true
// console.log(sifat != "bandel") //true

// var angka = 8
// console.log(angka == "8") // true, padahal "8" adalah string.
// console.log(angka === "8") // false, karena tipe data nya berbeda
// console.log(angka === 8) // true 

// var angka = 11
// console.log(angka != "11") // false, padahal "11" adalah string
// console.log(angka !== "11") // true, karena tipe datanya berbeda
// console.log(angka !== 11) // false

// console.log( number < 20 ) // true
// console.log( number > 17 ) // false
// console.log( number >= 17 ) // true, karena terdapat sama dengan
// console.log( number <= 20 ) // true

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(true || false || false); // true
// console.log(false || false); // false

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && false); // false
// console.log(false && true && true); // false
// console.log(true && true && true); // true