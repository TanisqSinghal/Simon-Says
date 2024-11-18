let gamesq = [];
let usersq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let maxlevel = 0;

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;

        LevelUp();
    }
})


function gameflash(btn) {

    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {

    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function LevelUp() {
    usersq = [];
    level++;
    h2.innerText = `level ${level}`;
    //choose random index of a btns array
    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.log(randomidx);
    // console.log(randomcolor);
    // console.log(randombtn);
    gamesq.push(randomcolor);
    console.log(gamesq);
    gameflash(randombtn);
}

function checkans(idx) {
    // console.log("curr level" , level);
    if(usersq[idx] === gamesq[idx]) {
        if(usersq.length == gamesq.length) {
            setTimeout(LevelUp , 1000);
        }
    }
    else {
        h2.innerHTML = `Game over! Your score was <b>${level}<b> <br>Press Any Key To Start .`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        if(level >= maxlevel){
            maxlevel = level;
            h3.innerHTML = `<b>HighScore : ${maxlevel}<b>`;
        }
        ResestAll();
    }
}


function btnpress() {
    let btn = this;
    userflash(btn);


    usercolor = btn.getAttribute("id");
    usersq.push(usercolor);

    checkans(usersq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click" , btnpress);

}


function ResestAll(){
    started = false;
    gamesq = [];
    usersq = [];
    level = 0;

}