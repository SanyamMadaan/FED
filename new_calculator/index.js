let heading=document.getElementById('heading');
let str='CALCULATOR';
let i=0,l=str.length-1;
let t=setInterval(()=>{
    if(i==l){
        clearInterval(t);
    }
    heading.innerHTML+=str[i];
    i++;
},200);

let buttons=document.querySelector('.buttons');
//row 1
let row1=document.createElement('div');
let btn_clear=document.createElement('button');
btn_clear.innerHTML='C';
btn_clear.id='clear';
let btn_mod=document.createElement('button');
btn_mod.innerHTML='%';
btn_mod.className="operator";
let btn_divide=document.createElement('button');
btn_divide.innerHTML='/';
btn_divide.className="operator";
let btn_back=document.createElement('button');
btn_back.innerHTML='Del';
btn_back.id="back";
btn_back.className="operator";

row1.appendChild(btn_clear);
row1.appendChild(btn_mod);
row1.appendChild(btn_divide);
row1.appendChild(btn_back);

buttons.appendChild(row1);

//row 2
let row2=document.createElement('div');
let btn_seven=document.createElement('button');
btn_seven.innerHTML=7;
let btn_eight=document.createElement('button');
btn_eight.innerText=8;
let btn_nine=document.createElement('button');
btn_nine.innerHTML=9;
let button_multiply=document.createElement('button');
button_multiply.innerHTML='*';
button_multiply.className="operator";

row2.appendChild(btn_seven);row2.appendChild(btn_eight);
row2.appendChild(btn_nine);
row2.appendChild(button_multiply);

buttons.appendChild(row2);

//row3
let row3=document.createElement('div');
let btn_four=document.createElement('button');
btn_four.innerHTML=4;
let btn_five=document.createElement('button');
btn_five.innerText=5;
let btn_six=document.createElement('button');
btn_six.innerHTML=6;
let button_minus=document.createElement('button');
button_minus.innerHTML='-';
button_minus.className="operator";

row3.appendChild(btn_four);
row3.appendChild(btn_five);
row3.appendChild(btn_six);
row3.appendChild(button_minus);

buttons.appendChild(row3);

//row4
let row4=document.createElement('div');
let btn_one=document.createElement('button');
btn_one.innerHTML=1;
let btn_two=document.createElement('button');
btn_two.innerText=2;
let btn_three=document.createElement('button');
btn_three.innerHTML=3;
let button_plus=document.createElement('button');
button_plus.innerHTML='+';
button_plus.className="operator";

row4.appendChild(btn_one);
row4.appendChild(btn_two);
row4.appendChild(btn_three);
row4.appendChild(button_plus);

buttons.appendChild(row4);

//row5
let row5=document.createElement('div');
let btn_zero=document.createElement('button');
btn_zero.innerHTML=0;
btn_zero.id='zero_btn';
let btn_dot=document.createElement('button');
btn_dot.innerText='.';
let btn_equal=document.createElement('button');
btn_equal.innerHTML='=';
btn_equal.id="show_result";

row5.appendChild(btn_zero);
row5.appendChild(btn_dot);
row5.appendChild(btn_equal);

buttons.appendChild(row5);

let display="";
let result=document.getElementById('result');
let button=document.querySelectorAll('button');
document.body.addEventListener('keydown',(e)=>{
    let btn=e.key;
    console.log(btn);
    if(btn=='C' || btn=='c'){
        display="";
        result.innerHTML=display;
    }
    else if(btn=='Backspace'){
        display=display.slice(0,-1);
        result.innerHTML=display;
    }
    else if(btn=='Enter'){
        try{
        display=eval(display);
        if(display=="Infinity") result.innerHTML="Infinity"
        else result.innerHTML=display;
        display=String(display);
    }catch(e){
        display="";
        result.innerHTML='Invalid Input';
        console.log(e);
    }
    }

    else{
        if(btn!='Shift' && btn!='Meta'){
        display+=btn;
        result.innerHTML=display;
    }
    }
})
button.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(btn.innerHTML=='C'){
            display="";
            result.innerHTML=display;
        }
        else if(btn.innerHTML=='Del'){
            display=display.slice(0,-1);
            result.innerHTML=display;
        }
        else if(btn.innerHTML=='='){
            try{
            display=eval(display);
            result.innerHTML=display;
            display=String(display);
        }catch(e){
            display="";
            result.innerHTML='Invalid Input';
            console.log(e);
        }
        }
        else{
            display+=btn.innerHTML;
            result.innerHTML=display;
        }
    })
})
