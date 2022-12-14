const getColor= ()=>{
    const randomNumber=Math.floor(Math.random()*16777215);
    
    const randomCode ="#"+ randomNumber.toString(16);
    console.log(randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById('colorcode').innerText= randomCode;
}

document.getElementById("colorbtn").addEventListener("click",getColor);

getColor();