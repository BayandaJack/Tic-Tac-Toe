//Yo
document.addEventListener('DOMContentLoaded', () => {
    //declaring our variables
    const buttons = document.querySelectorAll(".btn");

    //main functionality stuff
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = "X";
        })
    })
})