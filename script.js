let curr="o";
let gameOver = false;

let btn=document.querySelectorAll(".btn");

btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(gameOver) return;

        if(curr==="o"){
            button.innerText="x";
            curr="x";
        }
        else{
            button.innerText="o";
            curr="o";
        }
        if( (btn[0].innerText==="x" && btn[1].innerText==="x" && btn[2].innerText==="x") ||
            (btn[3].innerText==="x" && btn[4].innerText==="x" && btn[5].innerText==="x") ||
            (btn[6].innerText==="x" && btn[7].innerText==="x" && btn[8].innerText==="x") ||
            (btn[0].innerText==="x" && btn[3].innerText==="x" && btn[6].innerText==="x") ||
            (btn[1].innerText==="x" && btn[4].innerText==="x" && btn[7].innerText==="x") ||
            (btn[2].innerText==="x" && btn[5].innerText==="x" && btn[8].innerText==="x") ||
            (btn[0].innerText==="x" && btn[4].innerText==="x" && btn[8].innerText==="x") ||
            (btn[2].innerText==="x" && btn[4].innerText==="x" && btn[6].innerText==="x") ||
            (btn[0].innerText==="o" && btn[1].innerText==="o" && btn[2].innerText==="o") ||
            (btn[3].innerText==="o" && btn[4].innerText==="o" && btn[5].innerText==="o") ||
            (btn[6].innerText==="o" && btn[7].innerText==="o" && btn[8].innerText==="o") ||
            (btn[0].innerText==="o" && btn[3].innerText==="o" && btn[6].innerText==="o") ||
            (btn[1].innerText==="o" && btn[4].innerText==="o" && btn[7].innerText==="o") ||
            (btn[2].innerText==="o" && btn[5].innerText==="o" && btn[8].innerText==="o") ||
            (btn[0].innerText==="o" && btn[4].innerText==="o" && btn[8].innerText==="o") ||
            (btn[2].innerText==="o" && btn[4].innerText==="o" && btn[6].innerText==="o")
         ){
            setTimeout(() => {
                alert("Congrats! YOU WON");
            
            gameOver = true;
            btn.forEach((button) => {
                button.innerText = "";
            });

            gameOver = false;
            curr = "o";
            }, 0);
         }
    })
})