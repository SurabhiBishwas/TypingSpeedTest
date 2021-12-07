const setOfWords=[
    "Creativity is intelligence having fun",
    "Every moment is a fresh beginning",
    "We may encounter many defeats but we must not be defeated",
    "Be the change that you wish to see in the world",
    "You are never too old to set another goal or to dream a new dream",
    "Believe you can and you’re halfway there",
    "All our dreams can come true if we have the courage to pursue them"
];

const msg=document.getElementById("msg");
const typedWords=document.getElementById("myWords");
const btn=document.getElementById("btn");
let startTime, endTime;

const playGame = () =>
{
    let randomNumber=Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];    
    let date=new Date();
    startTime=date.getTime();
    btn.innerText="Submit";
}

const endGame = () =>
{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    //console.log(totalTime);
    let totalStr=typedWords.value;
    let wordCount=wordCounter(totalStr);
    console.log(wordCount);
    let speed=Math.round((wordCount/totalTime)*60);
    let finalMsg="You typed total at speed of "+speed+" words per minute. ";
    finalMsg+= compareWords(msg.innerText,totalStr);
    msg.innerText=finalMsg;
}

const compareWords= (str1, str2)=>
{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let count=0;
    words1.forEach(function(item, index)
    {
        if(item==words2[index])
        {
            count++;
        }
    })
    let errorWords=(words1.length-count);
    return (count+" correct out of "+words1.length+" words and the total number of errors are "+errorWords+".");
}

const wordCounter=(str)=>
{
    let response=str.split(" ").length;
    //console.log(response);
    return response;
}

btn.addEventListener("click",function(){
    if(this.innerText=="Start")
    {
        typedWords.disabled=false;
        playGame();
    }
    else if(this.innerText=="Submit")
    {
        typedWords.disabled=true;
        btn.innerText="Start";
        endGame();
    }
})