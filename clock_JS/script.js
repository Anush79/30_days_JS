const secondHand= document.querySelector(".second")
const minuteHand= document.querySelector(".minute")
const hourHand= document.querySelector(".hour")
const numbers = document.querySelectorAll(".digit")



const setDate = ()=>{
  const date = new Date();

  let second = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const secondInDegrees = ((second/60)*360)+90
  const minutesInDegrees = ((minutes/60)*360)+90
  const hoursInDegrees = ((hours/12)*360) +90
 
  secondHand.style.transform = `rotate(${secondInDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursInDegrees}deg)`
  
  
}

setInterval(
  setDate
, 1000);

const degreesTomove = 0;
numbers.forEach(item => {
  
  item.style.transform = rotate(`${degreesTomove}deg`)
  degreesTomove +=30
})