// function problem

function isValidprice(price){
    return typeof price === "number" && price>0;
}
function validemail(email){
    return email.includes("@") && email.includes(".");
}
function discountCal(price,discountper){
    if (!isValidprice(price)){
        return 0;
    }
    let discount= (price * discountper)/100;
    return price - discount;
}
function addVat(price,vat=15){
    let withVat=(price*vat)/100;
    return price+withVat;
}
function format(amount){
    return `${amount.toFixed(2)} BDT`
}
function capitallt(str){
    if (!str) return "";
    return str.charAt(0).toUpperCase()+str.slice(1);
}
function order(user,itemprice,discountcode){
    console.log(`Order processing ${capitallt(user.name)}`)
    if (!validemail(user.email)){
        console.log("invaild email")
        return;
    }
    let currentprice=itemprice
    if (discountcode=="AN10"){
        currentprice=discountCal(itemprice,20)
        console.log("20% Discount")
    }
    console.log(`Final bill: ${format(addVat(currentprice))}`)
    console.log("click to pay")
    console.log("Order Done")
}

let user={
    name : "antor",
    email : "antor@gmail.com"
}
order(user,2000,"AN10")
