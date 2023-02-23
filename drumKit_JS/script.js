//selects the key
const keys = document.querySelectorAll(".key"); //selects all the keys
const kbd = document.querySelectorAll("kbd");
const sounds = document.querySelectorAll(".sound")
const playBeat = (e) => {
  let keyCode;

  if (e.type === "keydown") {
    keyCode = e.keyCode;
  } else if (e.type === "click") {
    keyCode = e.target.getAttribute("data-key");
  } else {
    return;
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play(); //plays the audio
  key.classList.add("playing"); //adds the class playing to the key
  keys.forEach(
    (key) => key.addEventListener("transitionend", removeEventListener) //adds the event listener to each key
  );
  function removeEventListener(e) {
    //removes the class playing from the key
    if (e.propertyName !== "transform") return; //skips it if it's not a transform
    this.classList.remove("playing"); //removes the class playing
  }
};

window.addEventListener("keydown", playBeat); //adds the event listener to the window

keys.forEach((key) => key.addEventListener("click", playBeat));

kbd.forEach((item) =>
  item.addEventListener("click", () => {
    let keyCode = item.parentNode.getAttribute("data-key");
    item.setAttribute("data-key", keyCode);
    playBeat;
  })
);

sounds.forEach((item) =>
  item.addEventListener("click", () => {
    let keyCode = item.parentNode.getAttribute("data-key");
    item.setAttribute("data-key", keyCode);
    playBeat;
  })
);
