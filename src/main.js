const rulesOpen = document.querySelector(".rules__btn");
const rulesClose = document.querySelector(".rules__close");

rulesOpen.addEventListener("click", () =>
  rulesOpen.parentElement.nextElementSibling.classList.add("show")
);

rulesClose.addEventListener("click", () =>
  rulesOpen.parentElement.nextElementSibling.classList.remove("show")
);

const mainGame = document.querySelector(".game");
const mainPickBtn = document.querySelectorAll(".game__pick");
const mainDuel = document.querySelector(".duel");
const mainPickDuel = document.querySelector(".duel__pick");
const mainRandom = document.querySelector(".duel__random");

const randomPick = ["rock", "paper", "scissors"];
const declaration = document.querySelector(".duel__declaration");
let currentPoints = document.querySelector(".title__points");
points = 12;

mainPickBtn.forEach((pick) =>
  pick.addEventListener("click", () => {
    const random = Math.floor(Math.random() * randomPick.length);
    mainGame.classList.add("hide");
    mainDuel.classList.add("show");
    mainPickDuel.classList.add(pick.value);
    mainRandom.classList.add(randomPick[random]);
    if (pick.value === randomPick[random]) declaration.innerHTML = "tie";
    else if (
      (pick.value === "rock" && randomPick[random] === "scissors") ||
      (pick.value === "paper" && randomPick[random] === "rock") ||
      (pick.value === "scissors" && randomPick[random] === "paper")
    ) {
      declaration.innerHTML = "you win";
      points += 1;
      currentPoints.innerHTML = points.toString();
    } else {
      declaration.innerHTML = "you lose";
      points -= 1;
      currentPoints.innerHTML = points.toString();
    }
  })
);

const duelBtn = document.querySelector(".duel__btn");
duelBtn.addEventListener("click", () => {
  mainGame.classList.remove("hide");
  mainRandom.classList.remove("rock", "paper", "scissors");
  mainDuel.classList.remove("show");
});
