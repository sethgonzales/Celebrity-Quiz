// User Interface Logic

function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("BP").setAttribute("class", "hidden");
  document.getElementById("JL").setAttribute("class", "hidden");
  document.getElementById("MBJ").setAttribute("class", "hidden");
  document.getElementById("NP").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const color = document.querySelector("input#color").value;
    const season = document.querySelector("input#season").value;

if (!color || !season) {
  document.getElementById("error-message").removeAttribute("class");
} else {
    if (color === "red" && season === "summer") {
      document.getElementById("BP").removeAttribute("class");
    } else if (color === "red" && season === "winter") {
      document.getElementById("JL").removeAttribute("class");
     } else if (color === "blue" && season === "summer") {
        document.getElementById("MBJ").removeAttribute("class");
      } else if (color === "blue" && season === "winter") {
        document.getElementById("NP").removeAttribute("class");
    } 
    }
  }
};