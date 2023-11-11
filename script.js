
var store = " ";
var timer =60;
var hit = 0;
var score = 0;
var ranNum;
var clickedNum =" ";
var panel_bottom = document.querySelector("#panelBottom");

panel_bottom.addEventListener("click", function(details){
    clickedNum = Number(details.target.textContent);
    if (clickedNum === hit) {
        increaseScore();
        makebubbles();
        getNewHit();  
    
    }
} );


function increaseScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score;
}

function makebubbles() {
    for (let i = 1; i <=100; i++) {
        ranNum= Math.floor(Math.random()*10);
        store +=`<div id="bubble">${ranNum}</div> `;
    }
    
    document.querySelector("#panelBottom").innerHTML = store;
}


function timerFun() {

    setInterval(() => {
        if (timer>0) {
            timer--;
        document.querySelector(".timerval").textContent=timer;      
            }
        else{
            clearInterval(timer);
            document.querySelector("#panelBottom").innerHTML = ` <h>Game Over</h>`;
            document.querySelector("#panelBottom").style.color= " green";
        }
    }, 1000);
}

 function getNewHit() {
    hit = Math.floor(Math.random()*10);
        document.querySelector(".hitval").textContent = hit;
 }

    timerFun();
    getNewHit();  
    // makebubbles();