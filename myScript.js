// 1.soru:


// differenceMultipleAdded fonksiyonunu yazınız.
// girilen input = differenceMultipleAdded(72) 
// output =  5
// girilen değerin rakamları çarpımı ile toplamı farkını alıyor (7*2)-(7+2) = 5
// differenceMultipleAdded(24) = (2*4)-(2+4) = 2



function differenceMultipleAdded(){

    let input1=prompt("2 rakamlı bir sayı giriniz");
    let tendigit = Math.floor((input1%100)/10);
    let onedigit =input1%100%10;
    let carpım=tendigit*onedigit;
    let toplam=tendigit+onedigit;
    return carpım-toplam;   
} 
console.log(differenceMultipleAdded());





                                // 2.soru

// findChildren fonksiyonunu yazınız.
// girilen input = findChildren(72) 
// output =  (8*8) + (2*2) = 68
// sayıya en yakın iki kare toplamını buluyor
// findChildren(12) = (3*3) + (1*1) = 10
// not: Bu sorular turkcell in işe alım mülakat sorularında sorulmuştur.

function findChilderen(sayi){

  let closesSquare1 = Math.floor(Math.sqrt(sayi));
  let closesSquare2=Math.floor(Math.sqrt(sayi-Math.pow(closesSquare1,2)));
  let output=(closesSquare1*closesSquare1)+(closesSquare2*closesSquare2);
  console.log(output);
  return output;
 
}
findChilderen(77);

