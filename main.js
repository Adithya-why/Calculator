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
    op = oplist[0];
    console.log(op);
    let res;
    a = parseInt(nlist[0]);
    b = parseInt(nlist[1]);

    console.log(a,b);
    
    switch(op){
        case '+':
           
            res = add(a,b);            

            break;
        
         case '-':
            res= sub(a,b);
            break;


        case '*':
            res=mul(a,b);
            break;



        case '/':
            res=div(a,b);
            break;



        
        
    }


    const dis = document.querySelector('.display');
    dis.innerHTML=res;
    nlist=[];
    nlist.push(res);
    oplist=[];


}


let disval = 0;
let opclick = 0;
let nlist =[];
let oplist =[];

const dis = document.querySelector('.display');
const nbtns = document.querySelectorAll('.dig');
nbtns.forEach(dig => {
    dig.addEventListener('click',function(e){
       
        let clsn = (e.target.className).split(" ")[1];
        dis.innerHTML+=clsn;
        disval += clsn;
    
    })

    
});


const clr = document.querySelector('.clr');
clr.addEventListener('click',function(){
    dis.innerHTML = 0;
    disval = 0;
    nlist=[];
    oplist=[];
})



const opbtns = document.querySelectorAll('.op');
opbtns.forEach((op) => {
    op.addEventListener('click',function(e){
        nlist.push(disval);
        disval=0;
        oper = e.target.className.split(" ")[1];
        
        if(oplist.length<1){
        switch(oper){


        case '+':
            dis.innerHTML+="+"
            oplist.push('+');
            break;
        
        case '-':
            dis.innerHTML+="-";
            oplist.push('-');
            break;


        case '*':
            dis.innerHTML+="*";
            oplist.push('*');
            break;



        case '/':
            dis.innerHTML+="/";
            oplist.push('/');
            break;

            
        }
        }


        else if(nlist.length==2){

            operate();

            switch(oper){


                case '+':
                    dis.innerHTML+="+"
                    oplist.push('+');
                    break;
                
                case '-':
                    dis.innerHTML+="-";
                    oplist.push('-');
                    break;
        
        
                case '*':
                    dis.innerHTML+="*";
                    oplist.push('*');
                    break;
        
        
        
                case '/':
                    dis.innerHTML+="/";
                    oplist.push('/');
                    break;
        
                    
                }

        }




        console.log(nlist);
        console.log(oplist);
       

        

       
    })
})