const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let newbtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
// let drawmsg=document.querySelector("#drawmsg")
let c=0

let turn0=true;


const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        c++;
        if(turn0){
            box.innerText="0"
            turn0=false
        }
        else{
            box.innerText="X"
            box.style.color = "green"
            turn0=true
        }
        box.disabled=true
        checkwinner();
        checkdraw(c)
    })
})

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disableboxes();
}

const checkdraw=(c)=>{
    if(c===9)
    {
        console.log("Draw")
        msgcontainer.classList.remove("hide")
        msg.innerText="Draw"
    }
}

const checkwinner=()=>{
    for(let pattern of winPatterns){
        //console.log(pattern[0],pattern[1],pattern[2])
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        // console.log(pos1)
        // console.log(pos2)
        // console.log(pos3)
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2==pos3)
            {
                //console.log(`winner is ${pos1}`)

                showWinner(pos1)
            }
        }
    }
}
newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)