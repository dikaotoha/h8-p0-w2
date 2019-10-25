/*
ini contoh
for(var i=3;i>0;i--){
    console.log(i, "ini index i");
    for(var j=0;j<=3;j++){
        console.log(j,"ini index j");
    }

}


*/



// //nomer 1
console.log("/////////////////////////////////////")
console.log("nomor 1")
var i = 1;
var j = 10;
console.log("LOOPING PERTAMA");
while(i < 11) { // Loop akan terus berjalan selama nilai i masih dibawah 10
  console.log(i*2+ ' - I love coding'); // Menampilkan nilai i pada iterasi tertentu
  i++; // Mengubah nilai i dengan menambahkan 1
}
console.log("LOOPING KEDUA");
while (j>0) {
    console.log(j*2+ ' - I will become fullstack developer');
    j--;
}

// //nomer 2
console.log("/////////////////////////////////////")
console.log("nomor 2")
console.log("LOOPING PERTAMA");
for(var i=1;i<11;i++){
    console.log(i*2+ " - I love coding");
}
console.log("LOOPING KEDUA")
for(var j=10;j>0;j--){
    console.log(j*2+ " - I will become fullstack developer");
}

//nomer 3
console.log("/////////////////////////////////////")
console.log("nomor 3")
for(var i=1; i<=100;i++){
    if(i%2!==0){
        console.log("GANJIL");
    }
    else{
        console.log("GENAP");
    }
}

//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)

//contoh - untuk pertambahan counter 2
//counter sekarang = 1,
//output
""
//counter sekarang = 3,
//output
"3 KELIPATAN 3"
// dan seterusnya :)

//contoh - untuk pertambahan counter 5
//counter sekarang = 1,
//output
""
//counter sekarang = 6,
//output
"6 KELIPATAN 6"
// dan seterusnya :)

//contoh - untuk pertambahan counter 9
//counter sekarang = 1,
//output
""
//counter sekarang = 10,
//output
"10 KELIPATAN 10"
// dan seterusnya :)


//for(var j=0;j<=2;j--){
    //console.log(j,"i will become fullstack developer");
//}
/*
cetak LOOPING PERTAMA
 cetak i + i love coding ==> 10x

cetak LOOPING KEDUA
 cetak j + i will become fullstack developer
*/

/*
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer
*/

