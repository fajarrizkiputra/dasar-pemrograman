// JAWABAN SOAL 1
var daftarHewan = ['2. Komodo','5. Buaya','3. Cicak','4. Uler','1. Tokek'];
console.log(daftarHewan.sort()); 

// JAWABAN SOAL 2

function introduce(){
    console.log(data);
} 
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
 
var perkenalan = introduce(data)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming"

// JAWABAN SOAL 3 
function hitung_huruf_vokal(){

}
var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1 , hitung_2); // 3 2

// JAWABAN SOAL 4
function angka(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);  // 4
    console.log(arg[2]);  // 8
    console.log(arg[3]);  // 3
    console.log(arg[4]);  // 7
}

angka(-2, 0, 2, 4, 8);

// function munculkanAngkaDua() {
//     return 10
//   }
   
//   var tampung = munculkanAngkaDua();
//   console.log(tampung)

//   function kalikanDua(angka) {
//     return angka * 2
//   }
   
//   var tampung = kalikanDua(2);
//   console.log(tampung) 

//   function tampilkanAngka(angkaPertama, angkaKedua) {
//     return angkaPertama + angkaKedua
//   }
   
//   console.log(tampilkanAngka(5, 3))

//   function tampilkanAngka(angka = 1) {
//     return angka
//   }
   
//   console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
//   console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1

//   var fungsiPerkalian = function(angkaPertama, angkaKedua) {   
//     return angkaPertama * angkaKedua 
//  }
//  console.log(fungsiPerkalian(2, 4))

//  var personArr = ["John", "Doe", "male", 27]
//  var personObj = {
//      firstName : "John",
//      lastName: "Doe",
//      gender: "male",
//      age: 27
//  }
  
//  console.log(personArr[0]) // John
//  console.log(personObj.firstName) // John 

//  var mobil = [
//     {merk: "BMW", warna: "merah", tipe: "sedan"}, 
//     {merk: "toyota", warna: "hitam", tipe: "box"}, 
//     {merk: "audi", warna: "biru", tipe: "kolbak"}
//   ]
//   mobil.forEach(function(item){
//     console.log("warna : " + item.warna)
//  })
//  var arrayWarna = mobil.map(function(item){
//     return item.warna
//  })

// var tanaman = ["Padi", "Kacang", "Jagung", "Kedelai"];

// // apakah kacang sudah ada di dalam array tanaman?
// var adaKacang = tanaman.includes("Kacang");

// console.log(adaKacang); // -> true

// // apakah bayam ada?
// var adaBayam = tanaman.includes("Bayam");

// console.log(adaBayam); // -> false



  
