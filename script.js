const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


const check = () => {
  const input = userInput.value
  const validFormat = [
    /^(1[\s-]?)?(\(\d{3}\)|\d{3})[\s-]?[\s]?\d{3}[\s-]?\d{4}$/,
    /^\d{10}$/
  ]
  const isValid = validFormat.some((valid) => {
  return valid.test(input);
});

  if ( input.length === 0) {
    alert("Please provide a phone number")
  } else if (isValid) {
    resultsDiv.innerHTML = `<p>Valid US number:  ${input}</p>`;
  } else {
    resultsDiv.innerHTML = `<p>Invalid US number:  ${input}</p>`;
  }
}

const clear = () => {
  resultsDiv.innerHTML = "";
  userInput.value = "";
}


checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear)

