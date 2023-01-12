const wordRange = document.getElementById('font-size-control');
const wordSize = document.getElementById('text');    

wordRange.oninput = function () {
    wordSize.style.fontSize = this.value + "px";
};


