//Challenge 2
//Speed detector
//When speed <=70 output is "ok"
//When speed > 70 driver gets minus one point for every 5km he or she goes
function speedDetector(speed) {
  //Within speed limit
  if (speed <= 70) {
    return "Ok";
  } else {
    //Speed limits above 70 overspeeding and punishment
    const points = Math.floor((speed - 70) / 5);
    //Minus the speedlimit divide by 5
    if (points > 12) {
      return "License suspended";
    } else {
      return `Points: ${points}`;
    }
  }
}

console.log(speedDetector(126));
console.log(speedDetector(135));
