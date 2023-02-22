const playBeat = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selects the audio
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selects the key
  const keys = document.querySelectorAll(".key"); //selects all the keys

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
