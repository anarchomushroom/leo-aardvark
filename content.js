// Create array of all nodes on the webpage
const words = [...document.getElementsByTagName("*")]

// Loop through the words
function loop() {
    words.forEach(element => {
        element.childNodes.forEach(child => {
            if (child.nodeType === 3) {
                aardvark(child);
            }
        });
    });
};

// Replace "Varadkar" with "Aardvark"
function aardvark(word) {
    let varadkar = word.nodeValue;
    varadkar = varadkar.replace(/Varadkar/ig, "Aardvark");
    word.nodeValue = varadkar;
}

window.onload = loop();