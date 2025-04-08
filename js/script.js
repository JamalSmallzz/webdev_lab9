function init() {
    // Get the input, button, and output elements
    const input = document.getElementById("entryinput");
    const button = document.getElementById("entrybutton");
    const output = document.getElementById("textoutput");
    button.addEventListener("click", function () {
      const userInput = input.value;
      alert("JamalJowdeh:" + userInput);  
      output.textContent = userInput;
    });
  }
  
  window.addEventListener('load', init);
  