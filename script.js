document.addEventListener('DOMContentLoaded', function(event) {
    function addRow() {
        const newDiv = document.createElement("div");

        newDiv.className = "row";

        for ( j = 0; j < 4; j++ ) {
            const newSquare = document.createElement("div");
            newSquare.className = "gridSquare";
            newDiv.appendChild(newSquare);
        }

        const container = document.querySelector('#container');

        container.appendChild(newDiv);
    }

    for ( i = 0; i < 4; i++ ) {
        addRow();
    }
});