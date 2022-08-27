let display;
let buttons;
let value;

function aa() {
  display = document.getElementById("display");
  buttons = Array.from(document.getElementsByClassName("button"));
  buttons.map((button) => {
    button.addEventListener("click", (e) => {
      value = e.target.value;
      console.log(value);
      switch (value) {
        case "C":
          display.value = "";
          break;
        case "←":
          //slice(starting point,number of items to remove) if the second number is negative it starts remove things from the end)
          display.value = display.value.slice(0, -1);
          break;
          case "=":
            try{
              display.value = eval(display.value);
            } catch{
              display.value = "Syntax error"
            }
            
            break
        default:
          display.value += e.target.value;
      }
    });
  });
  //   console.log(display);
  //   console.log(buttons);
}
