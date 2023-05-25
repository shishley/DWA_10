// Initialize the counter
const counter = document.getElementById("counter-value");
counter.textContent = 0;

// Increment the counter when the "Add" button is clicked
document.getElementById("add").addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});

// Decrement the counter when the "Subtract" button is clicked
document.getElementById("subtract").addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) - 1;
});

// Reset the counter when the "Reset" button is clicked
document.getElementById("reset").addEventListener("click", () => {
  counter.textContent = 0;
  alert("Counter has been reset!");
});
