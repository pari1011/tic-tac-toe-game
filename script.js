let boxes=document.querySelectorAll(".box")
let gameContainer=document.querySelector(".container")
let resetbtn=document.querySelector("#reset-btn")
let newbtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turnO= true      //playerX, playerO
let count=0

const WinPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++
        if(turnO==true){
            box.innerText="o"
            turnO=false
        }
        else{
            box.innerText="x"
            turnO=true

        }
        box.disabled=true
        checkwinner()

    })


    

})

const enableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false
        box.innerText=""
        msgContainer.classList.add("hide")
        gameContainer.classList.remove("hide")
        resetbtn.classList.remove("hide")

    })
}

const resetGame=()=>{
    turnO=true
    enableboxes()
      
}

const disableboxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true

    })
 
}
const showWinner=(winner)=>{
    msgContainer.classList.remove("hide")
    gameContainer.classList.add("hide")
    resetbtn.classList.add("hide")
    msg.innerText=`congratulations! winner is ${winner}`
    disableboxes()
}

const drawCondition=()=>{
    msgContainer.classList.remove("hide")
    gameContainer.classList.add("hide")
    resetbtn.classList.add("hide")
    msg.innerText=`oops! the game is draw`
    disableboxes()

}

const checkwinner=()=>{
    for(pattern of WinPatterns){
        let pos1Val=boxes[pattern[0]].innerText
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText
        if(pos1Val !="" && pos2Val !="" && pos3Val !="s" ){
            if (pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val)
            }
            if(count==9){
                 drawCondition()
            }
        }
    }
}

newbtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click",resetGame)

        
        
        
        




