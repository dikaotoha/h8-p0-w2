var nama = '';
var peran = 'Ksatria';

//Output untuk Input nama = 'Mikael' dan peran = ''
if(nama=='Mikhael' && peran==''){
 console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
}

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
    else if(nama=='Nina' && peran=='Ksatria'){
        console.log("Selamat datang di Dunia Proxytia, Nina");
        console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
    }

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
    else if (nama=='Danu' && peran=='Tabib') {
        console.log("Selamat datang di Dunia Proxytia, Danu")
        console.log("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.")  
    }


//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
    else if (nama=='Danu' && peran=='Tabib') {
        console.log("Selamat datang di Dunia Proxytia, Zero")
        console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!")
    }
    else{
        console.log("Nama harus diisi!")
    }
