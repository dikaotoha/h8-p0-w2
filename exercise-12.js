function konversiMenit(menit) {
    // you can only write your code here!
    var jam=0,
        temp=0;
    var cetak='';
        for(i=menit;i>=60;i-=60){
            jam+=1;
        }
        temp=menit%60;
        if(temp<10){
            cetak=jam+':0'+temp;
        }
        else{
            cetak=jam+':'+temp;
        }
    return cetak;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00 