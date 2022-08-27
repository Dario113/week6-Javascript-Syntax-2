//getTemperature, get the temperature value through a prompt and than check if it is an integer


function getTemperature() {
  let temperature;
  let i = 0;
  while (i == 0) {
    temperature = prompt("how much is the temperature now?");
    temperature = parseInt(temperature); //convert a string into an integer
    if (Number.isInteger(temperature)) {
      //check if the temperature is an integer
      i = 1;
    } else {
      alert("please insert a whole number");
    }
  }
  return temperature;
}

//similar to getTemperature, getCondiction get the string through a prompt, than compare it with an array of right answers
function getCondiction() {
  let condiction;
  let arr = ["Sunny", "Cloudy", "Raining", "Snowing", "Thunder"];
  let i = 0;
  while (i == 0) {
    //if i == 0 means that the value is wrong
    condiction = prompt(
      "Insert the weather condiction, choose one between: Sunny, Cloudy, Raining, Snowing, Thunder"
    );

    for (let element of arr) {
      //comparison
      if (element == condiction) {
        i = 1;
      }
    }

    if (i == 0) {
      //ask again to insert the right value
      alert(
        "please insert a suitable condition, be carefull about the uppercase"
      );
    }
  }
  return condiction;
}

function trigger() {
  while (true) {
    //passing true as argument, allow to make an infinite loop
    let goToWork;
    let sentence;
    let temperature = getTemperature();
    let condiction = getCondiction();
    switch (
      true //passing true as argument allow to use logical operators in the cases
    ) {
      case temperature > 30: 
        switch (condiction) {//inside any case there is another switch, it is necessary to understand if he can go to work or not
          case "Sunny":
          case "Cloudy":
          case "Raining":
          case "Snowing":
          case "Thunder":
            goToWork = false;
            break;
        }
        break;

      case temperature > 20:
        switch (condiction) {
          case "Sunny":
          case "Cloudy":
          case "Raining":
            goToWork = true;
            break;
          case "Snowing":
          case "Thunder":
            goToWork = false;
            break;
        }
        break;

      case temperature >= 10: 
        switch (condiction) {
          case "Sunny":
          case "Cloudy":
            goToWork = true;
            break;
          case "Raining":
          case "Snowing":
          case "Thunder":
            goToWork = false;
            break;
        }
        break;

      case temperature < 10:
        switch (condiction) {
          case "Cloudy":
          case "Raining":
          case "Sunny":
          case "Snowing":
          case "Thunder":
            goToWork = false;
            break;
        }
        break;
    }

    if (goToWork) {
      sentence = "it's a perfect day to work outside";
    } else {
      sentence = "better stay at home";
    }
    alert(
      `Today the weather is ${condiction} and the temperature is ${temperature} degree, ${sentence}`
    );
  }
}