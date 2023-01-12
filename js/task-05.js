

document.getElementById("name-input").addEventListener("input", (event) => {
    document.getElementById("name-output").textContent = event.target.value.length > 0 ? event.target.value : "Anonymous"
});