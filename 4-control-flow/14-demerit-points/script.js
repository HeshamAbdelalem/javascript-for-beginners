// * speed limit => 70
// * every 5km after the speed limit -> 1 point
// * 12 points -> license suspended

checkSpeed(130);

function checkSpeed(speed) {
  let speedLimit = 70;
  let kmPerPoint = 5;
  if (speed <= speedLimit) {
    console.log('Your speed is okay!', speed);
  } else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12) {
      console.log('license suspended, Your speed was: ', speed);
    } else {
      console.log(points);
    }
  }
}
