// Jawaban Soal 1
var nilai = 56;

if (nilai <= 55){
    console.log("Nilai indeksnya E");
} else if (nilai > 55 && nilai <= 65){
    console.log("Nilai indeksnya D");
} else if (nilai > 65 && nilai <= 75){
    console.log("Nilai indeksnya C");
} else if (nilai > 75 && nilai <= 85){
    console.log("Nilai indeksnya B");
} else if (nilai > 85 && nilai <= 100){
    console.log("Nilai indeksnya A");
} else {
    console.log("Salah");
}

// Jawaban Soal 2

// Jawaban Soal 3
function segitiga(baris){
let pola = '';

for (let i = 1; i <= baris; i++){
    for (let j = 1; j <= i; j++){
        pola += '#';
    }
    pola += '\n';
}
return pola;
}
console.log(segitiga(3));

function segitiga(baris){
    let pola = '';
    
    for (let i = 1; i <= baris; i++){
        for (let j = 1; j <= i; j++){
            pola += '#';
        }
        pola += '\n';
    }
    return pola;
    }
    console.log(segitiga(7));

// Jawab Soal 4
var suka = [" I love Programming"];
var suka1 = [" I Love Javascript"];
var suka2 = [" I Love Vue.js"];
for(i = 1; i<3; i++) {
    console.log(i+suka);
    console.log(i+suka1); 
    console.log(i+suka2);
  }
  console.log('===');
   
  
 
// var minimarketStatus = "open"
// var telur = "soldout"
// var buah = "soldout" 
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
//     if(telur == "open" || buah == "open" ) {
//         console.log("belanjaan saya tidak lengkap")    
//     } else if( telur == "open") {
//         console.log("telur habis")
//     } else if ( buah == "open" ) {
//         console.log("buah habis")
//     }
// } else {
//     console.log("minimarket tutup, saya pulang lagi")
// }
// var angka=100;
  
// if (angka >= 100)
// {
//    console.log("Angka Satu");
// }
// else if (angka >= 75)
// {
//    console.log("Angka Dua");
// }
// else if (angka >= 65)
// {
//    console.log("Angka Tiga");
// }
// else if (angka>= 55)
// {
//    console.log("Angka Empat");
// }

// var nilai;
// for(var deret = 5; deret > 0; deret--) {
//   nilai += deret;
//   console.log('Nilai : ' + nilai);
// }
 
// console.log('Nilai : ' + nilai);

// if ( true ) {
//     console.log("jalankan code")
// }

// if ( false ) {
//     console.log("code tidak dijalankan")
// }

// var mood = "happy"
// if ( mood == "happy" ) {
//     console.log("hari ini aku bahagia!")
// }

// var minimarketStatus = "open"
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
// } else {
//     console.log("minimarketnya tutup")
// }

// var minimarketStatus = "close"
// var minuteRemainingToOpen = 5
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
// } else if ( minuteRemainingToOpen <= 5 ) {
//     console.log("minimarket buka sebentar lagi, saya tungguin")
// } else {
//     console.log("minimarket tutup, saya pulang lagi")
// }

// var minimarketStatus = "open"
// var telur = "soldout"
// var buah = "soldout" 
// if ( minimarketStatus == "open" ) {
//     console.log("saya akan membeli telur dan buah")
//     if(telur == "soldout" || buah == "soldout" ) {
//         console.log("belanjaan saya tidak lengkap")    
//     } else if( telur == "soldout") {
//         console.log("telur habis")
//     } else if ( buah == "soldout" ) {
//         console.log("buah habis")
//     }
// } else {
//     console.log("minimarket tutup, saya pulang lagi")
// }

// var buttonPushed = 1;
// switch(buttonPushed) {
//   case 1:   { console.log('matikan TV!'); break; }
//   case 2:   { console.log('turunkan volume TV!'); break; }
//   case 3:   { console.log('tingkatkan volume TV!'); break; }
//   case 4:   { console.log('matikan suara TV!'); break; }
//   default:  { console.log('Tidak terjadi apa-apa'); }}

//   while([Kondisi]) { // Kondisi yang menentukan apakah program akan melakukan iterasi. 
//     // Berupa boolean atau true/false.
//       [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
//     }

//     var flag = 1;
// while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
//   console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
//   flag++; // Mengubah nilai flag dengan menambahkan 1
// }

// var deret = 5;
// var jumlah = 0;
// while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
//   jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
//   deret--; // Mengubah nilai deret dengan mengurangi 1
//   console.log('Jumlah saat ini: ' + jumlah)
// }
 
// for([Inisialisasi], [Kondisi], [Incremental/Decremental]) {
//     [Proses] // Merupakan proses yang akan dijalankan dalam satu iterasi
//   }
  
//   for(var angka = 1; angka < 10; angka++) {
//     console.log('Iterasi ke-' + angka);
//   } 

//   var jumlah = 0;
// for(var deret = 5; deret > 0; deret--) {
//   jumlah += deret;
//   console.log('Jumlah saat ini: ' + jumlah);
// }
 
// console.log('Jumlah terakhir: ' + jumlah);

// for(var deret = 0; deret < 10; deret += 2) {
//     console.log('Iterasi dengan Increment counter 2: ' + deret);
//   }
   
//   console.log('-------------------------------');
   
//   for(var deret = 15; deret > 0; deret -= 3) {
//     console.log('Iterasi dengan Decrement counter : ' + deret);
//   } 

//   var flag = 1;
//   while(flag < 10) { // Loop akan terus berjalan, karena nilai flag tidak pernah berubah
//     console.log('Iterasi ke-' + flag);
//   }