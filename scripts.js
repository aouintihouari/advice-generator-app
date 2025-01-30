const diceBtn = document.querySelector(".dice-icon");
const adviceNumber = document.querySelector(".advice-number");
const adviceContent = document.querySelector(".advice-content");

const generateAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return { id: data.slip.id, advice: data.slip.advice };
  } catch (error) {
    console.log("Error: ", error);
  }
};

diceBtn.addEventListener("click", async () => {
  const response = await generateAdvice();
  adviceNumber.textContent = response.id;
  adviceContent.textContent = response.advice;
});
