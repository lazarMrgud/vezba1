const Xksznak ="x"
const Oznak ="o"

let circleTurn
const winningMessageElement =document.getElementById("winningMessage");
const WINNER_COMBINATION=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



const cellelement =document.querySelectorAll("[data-cell]")
const borad=document.getElementById("board")


function kadakliknesnnakolonu(e){
    cellelement.forEach(cell=>{
        const cell=e.target;
        const currentClass= circleTurn ? Xksznak:Oznak;
        placeMark(cell, currentClass)

        if(chackWin(currentClass)){
            endgame(false)
        } else if (isDraw()) {
            endGame(true)

        }else{
            swapturn()
            ostavljanjefunkcijedaradi()
            console.log(chackWin)

        }
        
    })

}


function  startgame() {

    circleTurn =false
    cell.forEach(cell=>{
        cell.classlist.remove(Xksznak )
        cell.classlist.remove(Oznak)
        cell.removeEventListener("click",kadakliknesnnakolonu );
        cell.addEventListener("click",kadakliknesnnakolonu,  )
    })



    
}


function placeMark(cell, currentClass){
    cell.classlist.add( currentClass);
}
function swapturn() {
    circleTurn=!circleTurn
}

function chackWin(currentClass){
    return WINNING_COMBINATIONS.some(combination=>{
        return combination.every (index=>{
            return cellElement [index].classlist.contains(currentClass)
        });
    });
}





function endgame(draw){
    if(draw){
        winningMessageElement.innerText="Draw"
    }else{
        /* u zavisnosti sta je u cureentturn on ce uzeti taj ztext */
        winningMessageElement.innerText=`${circleTurn ? "O, s" : "X, s"} Wins`
    }
    /*ova se javlja u svakom slucaju izgubi/pobedi*/
    winningMessageElement.classList.add(show);
}

function isDrow() {
    return [...cellelement].every(cell =>{
        return cell.classList.contains(Xksznak) || cell.classList.contains(Oznak);
    })
}

function podesavanjeigre() {
    borad.classList.remove(Xksznak)
    borad.classList.remove(Oznak)
    if(circleTurn){
        /* ovde dodaje nevidljivi krst ili okruglo*/ 
        borad.classList.add(Oznak)
    }else{
        /* ovde dodaje nevidljivi krst ili okruglo*/ 
        borad.classList.add(Xksznak)
    }




}