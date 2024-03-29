let daycharge = 500

let days = 7
let discountBill
let bill  = daycharge * days
if (days > 2 && days <= 5){
   let  discount = 5
    discountBill = bill - (bill* discount) / 100
} 
else if (days > 5){
 let discount = 15
    discountBill = bill - (bill* discount) / 100
} 
else{
    discountBill = daycharge
}

console.log(discountBill)