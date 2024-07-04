const colors = ["green", "orange", "yellow", "blue", "red"];

let color = 0;

function changeBackground() {
    document.body.style.backgroundColor = colors[color];
    
    color = (color + 1) % colors.length;
}
