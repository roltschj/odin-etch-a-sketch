document.addEventListener('DOMContentLoaded', function(event) {
    function addElement() {
        const newDiv = document.createElement('div');

        const newContent = document.createTextNode("If it worked, there should be sixteen of these.");

        newDiv.appendChild(newContent);

        const container = document.querySelector('#container');

        container.appendChild(newDiv);
    }

    for ( i = 0; i < 16; i++ ) {
        addElement();
    }
});