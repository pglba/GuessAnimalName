const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play =false;
let newWords= "";
let randWords= "";
let sWords =['dog','zebra','cat','horse','hen','parrot','sparrow','lion','tiger','leopard','duck','peacock','elephant','panda','snake','dear','shark','sheep','Kangaroo','giraffe','monkey','rabbit','frog','crocodile','hippopotamus','camel','goat','donkey','buffalo','crow'];
console.log(sWords.length);
const createNewWords = () =>{
    let ranNum = Math.floor(Math.random()* sWords.length);
    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}
const scrambleWords = (arr) =>{
    for(let i=arr.length-1 ; i>0;i--){
        let temp = arr[i];
        let j= Math.floor(Math.random()*(i+1));
      
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}


btn.addEventListener('click', function(){
    if(!play){
        play=true;
        btn.innerHTML = "GUESS";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split(""));
        msg.innerHTML = `GUESS THE WORD: ${randWords.join("")}`;
    }
    else{
        let tempWord = guess.value;
        if(tempWord ==newWords){
            play=false;
            msg.innerHTML= `AWESOME IT'S CORRECT`;
            btn.innerHTML= "START AGAIN";
            guess.classList.toggle('hidden');
            guess.value="";
        }
        else{
            msg.innerHTML= `Sorry its Incorrect. Pls try again ${randWords.join("")}`;
        }
    }
})