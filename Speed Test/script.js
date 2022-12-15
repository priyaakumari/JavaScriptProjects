const setOfWords= ["Collect information about your geographical location which can be accurate to within several meters",
    "We use cookies to personalise content and ads, to provide social media features and to analyse our traffic",
    "We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services"];

    const paragraph=document.getElementById('paragraph');
    const typeWords=document.getElementById('textarea');
    const button=document.getElementById('btn');
    typeWords.disabled=true;
    var startTime, EndTime;

    function showText(){
        let date=new Date();
        startTime=date.getTime();
        console.log("event called");
        var idx=Math.floor(Math.random()*setOfWords.length);
        // console.log(idx, setOfWords[idx]);
        paragraph.innerText=setOfWords[idx];

        button.innerText="Done";

    }

   
    button.addEventListener('click',function(){
        if(this.innerText=='Start'){
            typeWords.disabled=false;
            
            showText();
        }
        else{
            typeWords.disabled=true;
            button.innerHTML='Start';
            
            // let arrayOfTypeWords=typeWords.innerHTML.split(" ");
            // let lenOfTextArea=arrayOfTypeWords.length;
            // let temp=lenOfTextArea;
            // let numOfCorrectWords=0;
            // let i=0;
            // while(temp-->0){
            //     if(arrayOfPara[i]== arrayOfTypeWords[i++]){
            //         numOfCorrectWords++;
            //     }
            //     else{
            //         break;
            //     }
            // }

            let date=new Date();
            EndTime=date.getTime();
            var diff=(EndTime-startTime)/1000;
            let arrayOfPara=paragraph.innerHTML.split(" ");
            let lenOfPara=arrayOfPara.length;
            let lenOfTextArea=counter(typeWords.value);
            console.log(lenOfTextArea);
            console.log(lenOfPara);
            let speed=Math.round((lenOfTextArea/diff)*60);

            let numOfCorrectWords=comapreWords(paragraph.innerText,typeWords.value);
            let wrongWords=lenOfTextArea-numOfCorrectWords;
            

            paragraph.innerHTML= "Your Typing speed is "+ speed + " words per minute. Total number of correct words "+ numOfCorrectWords+ ", "+ wrongWords+ " number of wrong words and total number of words "+ lenOfPara;
            typeWords.value="";
        }
    });

    function counter(str){

        let cnt= str.split(" ").length;
        console.log(cnt);
        return cnt;
    }

    function comapreWords(str1 ,str2){
        let word1=str1.split(" ");
        let word2= str2.split(" ");
        let cnt=0;

        word1.forEach(function(item ,index){
            if(item==word2[index]){
                cnt++;
            }
        })

        let errorWords= (word1.length-cnt);
        return cnt;
    }

    