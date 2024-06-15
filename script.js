document.addEventListener('DOMContentLoaded', function(event) {
    function addRow(width, height) {

        const squareHeight = (800 / height) + "px";
        const squareWidth = (800 / width) + "px";
        const newDiv = document.createElement("div");

        newDiv.className = "row";

        for ( j = 0; j < width; j++ ) {
            const newSquare = document.createElement("div");
            newSquare.className = "gridSquare";
            newSquare.style.height = squareHeight;
            newSquare.style.width = squareWidth;
            newSquare.addEventListener("mouseover", (event) => {
                newSquare.style.backgroundColor = "black";
            })
            newDiv.appendChild(newSquare);
        }

        const container = document.querySelector('#container');

        newDiv.style.height = squareHeight;
        container.appendChild(newDiv);
    }

    function makeGrid(width = 16, height = 16) {
        for ( i = 0; i < height; i++ ) {
            addRow(width, height);
        }
    }

    makeGrid();

});