//Yo
document.addEventListener('DOMContentLoaded', () => {
    //declaring our variables
    const buttons = document.querySelectorAll(".btn");
    const turnHeader = document.querySelector(".turns");
    const board = [
        ["", "", ""], // row 0 → (0,0), (0,1), (0,2)
        ["", "", ""], // row 1 → (1,0), (1,1), (1,2)
        ["", "", ""]  // row 2 → (2,0), (2,1), (2,2)
    ];

    const winPatterns = [
        // Rows
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],

        // Columns
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        // Diagonals
        [[0, 0], [1, 1], [2, 2]], // top-left to bottom-right
        [[0, 2], [1, 1], [2, 0]]  // top-right to bottom-left
    ];

    function resetGame() {
        location.reload(); // refreshes the page completely
    }

    function checkWinner(){
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern; //array destructuring

            //taking the symbols in the positions of those arrays in winPattern for each one
            const valA = board[a[0]][a[1]];
            const valB = board[b[0]][b[1]];
            const valC = board[c[0]][c[1]];

            if (valA && valA === valB && valB === valC) {
                // Winner found!
                const cordA = a[0].toString() + a[1].toString();
                const cordB = b[0].toString() + b[1].toString();
                const cordC = c[0].toString() + c[1].toString();

                //change color of those button blocks to winner colour
                const winBlockA = document.getElementById(`${cordA}`);
                const winBlockB = document.getElementById(`${cordB}`);
                const winBlockC = document.getElementById(`${cordC}`);

                winBlockA.style.backgroundColor = "green";
                winBlockB.style.backgroundColor = "green";
                winBlockC.style.backgroundColor = "green";

                setTimeout(() => {
                    alert(`Player ${valA} wins!`);
                }, 50); // slight delay

                //resetting the page for a new game
                setTimeout(() => {
                    resetGame();
                }, 100);
            }
        }

    }

    //main functionality stuff
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (turnHeader.textContent === "Player X's turn"){
                if (button.textContent === "X" || button.textContent === "O"){
                    alert("A player has already played there!");
                } else{
                    const id = button.id; //gets the cell so we can fill it in on the board
                    board[id[0]][id[1]] = "X";
                    console.log(board);
                    button.textContent = "X";
                    turnHeader.textContent = "Player O's turn";
                    checkWinner();
                }  
            }else {
                if (button.textContent === "X" || button.textContent === "O"){
                    alert("A player has already played there!");
                } else{
                    const id = button.id; //gets the cell so we can fill it in on the board
                    board[id[0]][id[1]] = "O";
                    console.log(board);
                    button.textContent = "O";
                    turnHeader.textContent = "Player X's turn";
                    checkWinner();
                }  
            }
        })
    })

    /* Ideally we'd need a useEffect type of function that can constantly run and
    check if the symbols in the different 'tals and diagonals are the same
    to declare a winner, but as far as I know we don't have such outside of React */
})