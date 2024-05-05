// Scripts 

const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const modal = document.getElementById("myModal");
const btn = document.getElementById("modal-btn");
const span = document.getElementsByClassName("close")[0];


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
    resultsDiv.innerHTML = `<p class="result-header">Valid US number <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></p><p class="result-content">${input}</p>`;
  } else {
    resultsDiv.innerHTML = `<p class="result-header">Invalid US number <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"></path></svg></p><p class="result-content">${input}</p>`;
  }
}

const clear = () => {
  resultsDiv.innerHTML = "";
  userInput.value = "";
}

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
checkBtn.addEventListener("click", check);
clearBtn.addEventListener("click", clear)

