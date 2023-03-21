const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
const numbers = document.querySelectorAll(".digit");
const themeBtn = document.querySelector(".setTheme");
const previousThemeBtn = document.querySelector(".previousTheme");
const nextThemeBtn = document.querySelector(".nextTheme");
const colorPallete = [
  "#321ddf", // Purple
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#9400D3", // DarkViolet
  "#FF1493", // DeepPink
  "#00FF7F", // SpringGreen
  "#FF69B4", // HotPink
  "#00BFFF", // DeepSkyBlue
  "#FF6347", // Tomato
  "#00CED1", // DarkTurquoise
  "#FF7F50", // Coral
  "#8B008B", // DarkMagenta
  "#DC143C", // Crimson
  "#00FF00", // Lime
  "#323232", // Gray
  "#2c3e50", // DarkBlue
  "#3c3f41", // DarkGray////////
  "#4E342E", // Brown
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#c6d8af", /// LightGreen
  "#b8d1c9", // LightBlue
  "#f4d8b6", // LightOrange
  "#c2c2c2", // LightGray
  "#d4bbed", // LightPurple
  "#9bb7d4", // LightIndigo
  "#bdd2e6", // LightBlue
  "#e6c3c3", // LightRed
  "#c3e6c3", // LightGreen
  "#d9c5a5", // LightBrown
  "#ffffff",
];

const setDate = () => {
  const date = new Date();

  let second = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const secondInDegrees = (second / 60) * 360 + 90;
  const minutesInDegrees = (minutes / 60) * 360 + 90;
  const hoursInDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondInDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
};

setInterval(setDate, 1000);

const degreesTomove = 0;
numbers.forEach((item) => {
  item.style.transform = rotate(`${degreesTomove}deg`);
  degreesTomove += 30;
});

let color =
  localStorage.getItem("color") ?? "linear-gradient(#321ddf, #000 90%)";
function setTheme(theme) {
  document.body.style.background = `linear-gradient(${theme}, #0c161f 90%)`;
}
setTheme(color);

themeBtn.addEventListener("click", () => {
  localStorage.setItem("color", color);
  setTheme(color);
});

previousThemeBtn.addEventListener("click", () => {
  let index = colorPallete.indexOf(color);
  color = colorPallete[index - 1] ?? colorPallete[colorPallete.length - 1];
  let colorForPrevButton = colorPallete[index - 2] ?? colorPallete[0];
  let colorForNextButton = color;
  previousThemeBtn.style.background = colorForPrevButton;
  nextThemeBtn.style.background = colorForNextButton;
  setTheme(color);
});

nextThemeBtn.addEventListener("click", () => {
  let index = colorPallete.indexOf(color);
  color = colorPallete[index + 1] ?? colorPallete[0];
  let colorForButton = colorPallete[index + 2] ?? colorPallete[0];
  let colorForPrevButton = color;
  nextThemeBtn.style.background = colorForButton;
  previousThemeBtn.style.background = colorForPrevButton;
  setTheme(color);
});
console.log(currentColorOfNext, currentColorOfPrevious);
