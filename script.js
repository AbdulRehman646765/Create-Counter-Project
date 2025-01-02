// Set initial Count
let count = 0;

// Select value and Buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
const error = document.querySelector(".error");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      if (count > 0) {
        count--;
      } else {
        error.style.display = "block";
        error.innerText = "Value cannot be less than 0!";
      }
      value.style.color = "darkred";
    } else if (styles.contains("increase")) {
      count++;
      value.style.color = "darkgreen";
      error.style.display = "none";
    } else {
      count = 0;
      value.style.color = "black";
      error.style.display = "none";
    }
    // Update the displayed value
    value.textContent = count;
  });
});

const counter = document.querySelector(".counter");
const infoSection = document.querySelector(".info-sec");
const infoIcon = document.getElementById("info-icon");
const closeIcon = document.getElementById("close-icon");

infoIcon.addEventListener("click", () => {
  counter.style.display = "none";
  infoSection.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  counter.style.display = "flex";
  infoSection.style.display = "none";
});
