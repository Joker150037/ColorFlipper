let container=document.querySelector('.container');
let button=document.querySelector('button');
let randomList=['color','rgba','hex'];
let color=['red','green','doggerblue','violet','gray'];
let span=document.querySelector('.text');
let hex=['a','b','c','d','e','f','1','3','4','5','6','7','8','9','0'];
button.addEventListener('click',changeColor);
function changeColor()
{   
    let pick=randomList[Math.floor(Math.random()*3)];
    if(pick=='color')
    {
        let backgroundColor=color[Math.floor(Math.random()*5)]
        container.style.background=backgroundColor;
        button.style.background=backgroundColor;
        span.textContent=backgroundColor.toUpperCase();
    }
    
    if(pick=='hex')
    {
        
        let hexadecimal='';
        for(let i=0;i<6;i++){
            let index=Math.floor(Math.random()*hex.length);
            hexadecimal+=(hex[index]);
        }
        container.style.background='#'+hexadecimal;
        button.style.background='#'+hexadecimal;
        span.textContent='#'+hexadecimal;
    }
    if(pick=='rgba'){
        let r=Math.floor(Math.random()*256);
        let g=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        let a=Math.round((Math.random())*10)/10;
        container.style.background='rgba('+r+','+g+','+b+','+a+')';
        span.textContent='rgba('+r+','+g+','+b+','+a+')';
        button.style.background='rgba('+r+','+g+','+b+','+a+')';
    }
}

