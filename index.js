let display = document.getElementById("display");

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let plus  = document.getElementById("plus");
let minus = document.getElementById("minus");
let mul   = document.getElementById("mul");
let div   = document.getElementById("div");
let equal = document.getElementById("btn=");
let clear = document.getElementById("clear");




let a="";
let rs="";
let op = "";

plus.addEventListener("click",()=>{
    if(rs===""){
        rs = a;
        a="";
        display.value = "+";
        op = "+"
    }
    else{
        a=parseFloat(rs)+parseFloat(a)
        rs=""
    }
})

minus.addEventListener("click",()=>{
   if(rs===""){
        rs = a;
        a="";
        display.value = "-";
        op = "-"
    }
    else{
        a=parseFloat(rs)-parseFloat(a)
        rs=""
    }
})

mul.addEventListener("click",()=>{
    if(rs===""){
        rs = a;
        a="";
        display.value = "*";
        op = "*"
    }
    else{
        a=parseFloat(rs)*parseFloat(a)
        rs=""
    }
})

div.addEventListener("click",()=>{
    if(rs===""){
        rs = a;
        a="";
        display.value = "/";
        op = "/"
    }
    else{
        a=parseFloat(rs)/parseFloat(a)
        rs=""
    }
})

clear.addEventListener("click", () => {
    a = "";
    rs = "";
    op = "";
    display.value = "";
    display.placeholder = "0";
});




equal.addEventListener(("click"),()=>{
    calculate()
    display.value = rs;
    a= rs;
    rs="";
})

function calculate() {
    let num1 = parseFloat(rs);
    let num2 = parseFloat(a);
    
    if (op == "+") 
        rs = num1 + num2;
    else if (op == "-") 
        rs = num1 - num2;
    else if (op == "*")
        rs = num1 * num2;
    else if (op == "/")
        rs = num1 / num2;
}


btn0.addEventListener(("click"),()=>{
    a= a+"0"
    display.value = a
})
btn1.addEventListener(("click"),()=>{
    a= a+"1"
    display.value = a
})
btn2.addEventListener(("click"),()=>{
    a= a+"2"
    display.value = a
})
btn3.addEventListener(("click"),()=>{
    a= a+"3"
    display.value = a
})
btn4.addEventListener(("click"),()=>{
    a= a+"4"
    display.value = a
})
btn5.addEventListener(("click"),()=>{
    a= a+"5"
    display.value = a
})
btn6.addEventListener(("click"),()=>{
    a= a+"6"
    display.value = a
})
btn7.addEventListener(("click"),()=>{
    a= a+"7"
    display.value = a
})
btn8.addEventListener(("click"),()=>{
    a= a+"8"
    display.value = a
})
btn9.addEventListener(("click"),()=>{
    a= a+"9"
    display.value = a
})

dbtn.addEventListener("click", () => {
    if (!a.includes(".")) {
        a = a + ".";
        display.value = a;
    }
});
