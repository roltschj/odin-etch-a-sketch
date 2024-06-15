document.addEventListener('DOMContentLoaded', function(event) {
    function addRow(squaresPerSide) {

        const squareLength = (800 / squaresPerSide) + "px";
        const newDiv = document.createElement("div");

        newDiv.className = "row";

        for ( j = 0; j < squaresPerSide; j++ ) {
            const newSquare = document.createElement("div");
            newSquare.className = "gridSquare";
            newSquare.style.height = squareLength;
            newSquare.style.width = squareLength;
            newSquare.addEventListener("mouseover", (event) => {
                newSquare.style.backgroundColor = getRandomColor();
            })
            newDiv.appendChild(newSquare);
        }

        const container = document.querySelector('#container');

        newDiv.style.height = squareLength;
        container.appendChild(newDiv);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for ( i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function makeGrid(squaresPerSide = 16) {
        for ( i = 0; i < squaresPerSide; i++ ) {
            addRow(squaresPerSide);
        }
    }

    function killGrid() {
        document.querySelectorAll('.row').forEach(row => row.remove());
    }

    const newButton = document.querySelector('#newGridButton');
    newButton.addEventListener("click", event => {
        killGrid();
        var newNumberOfSides = 101;

        while (newNumberOfSides > 100) {
            newNumberOfSides = prompt("You have selected New Grid. How many squares per side? (max 100):", 16);
        }

        makeGrid(newNumberOfSides);
    });

    makeGrid();

});