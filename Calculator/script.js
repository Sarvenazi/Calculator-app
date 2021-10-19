let cDisplay = document.querySelector(".current");
// let pDisplay = document.querySelector(".previous");
let buttons = document.getElementsByTagName("button");
buttons = [...buttons];

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        cDisplay.innerText = "";
        // pDisplay.innerText = "";
        break;
      case "=":
        try {
          if (cDisplay.innerText == "") {
            cDisplay.innerText = "Enter a valid input";
          } else {
            cDisplay.innerText = eval(cDisplay.innerText);
          }
        } catch {
          cDisplay.innerText = "Enter a valid input";
        }

        break;
      default:
        cDisplay.innerText += e.target.innerText;
    }
  });
});
