let res = 0;
let disval="";
let opclick = 0;
let nlist =[];
let oplist =[];

const dis = document.querySelector('.display');
const nbtns = document.querySelectorAll('.dig');

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


function mod(a,b){
    let rem = 0;
    rem = a%b;
    return rem;
}


function operate(){
    let op,a,b;
    op = oplist[0];
    console.log(op);
    a = parseInt(nlist[0]);
    b = parseInt(nlist[1]);
    
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


        case '%':
            res=mod(a,b);
            break;
  
        
    }

    dis.innerHTML=res;
    nlist=[];
    oplist=[];


}





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



        case '%':
            dis.innerHTML+="%";
            oplist.push('%');
            break;
            
        }
        }


        else if(nlist.length==2){

            operate();
            nlist.push(res);

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
        
                    

                case '%':
                    dis.innerHTML+="%";
                    oplist.push('%');
                    break;
                        
                }

        }
          
    })
});


const eq = document.querySelector('.eq');
eq.addEventListener('click',function(){
    
    nlist.push(disval);
    
    operate();


    disval=res;
});