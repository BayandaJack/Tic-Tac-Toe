//Yo
document.addEventListener('DOMContentLoaded', () => {
    //declaring our variables
    const buttons = document.querySelectorAll(".btn");

    //main functionality stuff
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === "X" || button.textContent === "O"){
                alert("A player has already played there!");
            } else{
                button.textContent = "X";
            }
        })
    })
})