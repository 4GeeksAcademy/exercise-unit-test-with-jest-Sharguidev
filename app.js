
 // module.exports = { sum };

 function fromDollarToYen (dollars){
    let Yen = dollars * 156.5;
    return Yen;
 }

 function fromEuroToDollar(euros){
    let dollar = euros * 1.07;
    return dollar;
 }

 function fromYenToPound(Yen){
    let pound = Yen * 0.87;
    return pound;
 }

 module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound};