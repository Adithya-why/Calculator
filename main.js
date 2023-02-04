function add(a,b){
    let sum=0;
    sum = a+b;
    return sum;
}

function sub(a,b){
    let dif=0;
    dif = a-b;
    return dif;
}


function mul(a,b){
    let pro=0;
    pro = a*b;
    return pro;
}


function div(a,b){
    let quo=0;
    quo = a/b;
    return quo;
}


function operate(){
    let op,a,b;
    op = prompt("Enter a operator");
    a = parseInt(prompt("Enter the first number"));
    b = parseInt(prompt("Enter the second number"));

    switch(op){
        case '+':
            console.log(add(a,b));
            break;
        
         case '-':
            console.log(sub(a,b));
            break;


        case '*':
            console.log(mul(a,b));
            break;



        case '/':
            console.log(div(a,b));
            break;

        default:
            console.log("Enter a valid operator");
    }

}


let val = 0;

const nbtns = document.querySelectorAll('.dig');
nbtns.forEach(dig => {
    dig.addEventListener('click',function(e){
        const dis = document.querySelector('.display');
        let clsn = (e.target.className).split(" ")[1];
        dis.innerHTML+=clsn;
        val = dis.innerHTML;
    
    })

    
});


const clr = document.querySelector('.clr');
clr.addEventListener('click',function(){
    const dis = document.querySelector('.display');
    dis.innerHTML = 0;
    val = 0;
})



const opbtns = document.querySelectorAll('.op');
opbtns.forEach((op) => {
    op.addEventListener('click',function(e){
        
    })
})