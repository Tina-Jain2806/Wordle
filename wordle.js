//Todo 1- 
/*implement on screen keyboard (buttons)*/
const keyb = document.querySelectorAll(".keyb");
const enter = document.getElementById("Enter");
const clear = document.getElementById("Backspace");
const validKeys =[];
const wordList = ['apple','mango','fruit','berry','grape'];
let guess = "";
const ans = "apple";
let m =0;
let n=0;
let play=true;

keyb.forEach(function(temp){
    validKeys.push(temp.id);
})
function onscreen(butt,i,j){
    let span = document.getElementById(`${i}-${j}`);
    span.innerHTML = butt;
    guess+= butt;
    
}
function check(code){
    for(let i=0;i<validKeys.length;i++){
        if(code===validKeys[i]){
            return true;
        }
    }
    return false;
}
function inlist(word){
    if(word in wordList){
        return true;
    }
    return false;
}
window.addEventListener('keydown',(e) => {

    if(play && check(e.code)){
        
        onscreen(e.key.toUpperCase(),m,n);
        if(n > 4){
            if(guess === ans.toUpperCase() || m>4){
                gameover();
            }
            else if(!inlist(guess)){ 
               //  console.log(e.code);    
                // clearrow(m);
                // }
                n=0;
            }
            else{
            guess = "";
            m++;
            n=0;
            }
        }
        else{
            n++;
        }
    }
})

function gameover(){
    play=false;
    console.log("Game over!!");
}
function clearrow(m){
    for (let index = 0; index < 5; index++) {
        let span = document.getElementById(`${m}-${index}`);
        span.innerHTML = "";
    }
    guess = "";
}


//need to verify results
function onscreenkeyboard(keyb){
    keyb.forEach(button => {
        button.addEventListener("click",function(){
            if(play){
            onscreen(button.innerHTML,m,n);
            if(n=== 4){
                if(guess === ans || m>4){
                    gameover();
                    
                }
                else if(!inlist(guess)){
                    clearrow(m);
                    n=0;
                }
                else{
                    m++;
                    n=0;
                    guess = "";
                }
               
            }
            else{
                n++;
            }
        }
        })
    });
}

onscreenkeyboard(keyb);
//Need to take care of new row and if n becomes negative
clear.addEventListener("click",function(){
    console.log("cleared");
    if(n>0){
    n--;
    let span = document.getElementById(`${m}-${n}`);
    console.log(span);
    span.innerHTML = "";
    }
})






/*
todo 2
on keyboard press, verify if valid key is pressed
todo 3
put in span
4
change border of span
5
track of row and column through for loop
6
on row end, it will verify the word in array of strings fetched from dictionary api
7
update colors
8
on winning or game over ,display pop up in z axis

*/

