var ball=document.getElementById('ball');
document.addEventListener('keydown',moveBall);

var left = 0, t=0;

function moveBall(event)
{
    var  elementW=ball.offsetWidth;
    console.log(elementW);
    var browserW=document.documentElement.clientWidth;
    var browserH= document.documentElement.clientHeight;

    var keyPressed= event.keyCode;

    if(keyPressed==68) { //d means right
        if(left+elementW+10<=browserW){
            ball.style.left=left+10+"px";
            left+=10;
        }
        else{
            ball.style.left=browserW-elementW+"px";
        }
    } 
    else if(keyPressed==83) {  //s move down
        if(t+elementW+10<=browserH){
            ball.style.top=t+10+"px";
            t+=10;
        }
        else{
            ball.style.top=browserH-elementW+"px";
        }
    }
    else if(keyPressed==87){  //w move to top
        if(t-10>=0){
            ball.style.top=t-10+"px";
            t-=10;
        }
        
    }
    else if(keyPressed==65){  //move to left
        if(left-10>=0){
            ball.style.left=left-10+"px";
            left-=10;
        }
        
    }
}