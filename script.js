//Yo
document.addEventListener('DOMContentLoaded', () => {
    //declaring our variables
    const buttons = document.querySelectorAll(".btn");
    const turnHeader = document.querySelector(".turns");

    //main functionality stuff
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (turnHeader.textContent === "Player X's turn"){
                if (button.textContent === "X" || button.textContent === "O"){
                    alert("A player has already played there!");
                } else{
                    button.textContent = "X";
                    turnHeader.textContent = "Player O's turn";
                }  
            }else {
                if (button.textContent === "X" || button.textContent === "O"){
                    alert("A player has already played there!");
                } else{
                    button.textContent = "O";
                    turnHeader.textContent = "Player X's turn";
                }  
            }
        })
    })

    /* Ideally we'd need a useEffect type of function that can constantly run and
    check if the symbols in the different 'tals and diagonals are the same
    to declare a winner, but as far as I know we don't have such outside of React */
})