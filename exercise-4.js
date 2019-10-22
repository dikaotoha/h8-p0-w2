var tanggal = 0;
var bulan= 1;
var tahun= 2200;
var deskripsiBulan='';

switch(bulan) {
    case 1:   { 
                deskripsiBulan='Januari';
                break;
            }
    case 2:   { 
                deskripsiBulan='Februari';
                break;
            }
    case 3:   { 
        deskripsiBulan='Maret';
                break; 
            }
    case 4:   { 
        deskripsiBulan='April';
                break; 
            }
    case 5:   { 
         deskripsiBulan='Mei';       
                break;
            }
    case 6:   { 
         deskripsiBulan='Juni';        
                break; 
            }
    case 7:   { 
        deskripsiBulan='Juli';        
                break; 
            }
    case 8:   { 
         deskripsiBulan='Agustus';       
                break;
            }
    case 9:   { 
         deskripsiBulan='September';   
                break;
            }
    case 10:  { 
         deskripsiBulan='Oktober';       
                break; 
            }
    case 11:  { 
        deskripsiBulan='November';       
                break; 
            }
    case 12:  { 
        deskripsiBulan='';        
                break; 
            }
    default:  { 
                console.log("tidak ada bulan ke-"+bulan);
                break;
            }
            
}

if(tanggal>=1 && tanggal<=31){
    if(tanggal>28){
        if(tahun<1900 || tahun>2200){
            console.log("tahun tidak tersedia");
        }
        else if(bulan===2){
            console.log("tidak ada tanggal tersebut");
        }
        else if( tanggal>30 && bulan===4 || bulan===6 || bulan===9 || bulan===11){
                console.log("tidak ada tanggal tersebut");}
        else{
            console.log(tanggal+" "+deskripsiBulan+" "+tahun);
        }
    }
    else if(tahun<1900 || tahun>2200){
        console.log("tahun tidak tersedia");
    }
    else if(bulan===2){
        console.log("tidak ada tanggal tersebut");
    }
    else if( tanggal>30 && bulan===4 || bulan===6 || bulan===9 || bulan===11){
            console.log("tidak ada tanggal tersebut");}
    else{
        console.log(tanggal+" "+deskripsiBulan+" "+tahun);
    }
}
else{
    console.log("tidak ada tanggal tersebut");
}