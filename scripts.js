// Write your JavaScript code here.
// Remember to pay attention to page loading!

function pageLoaded() {
  const takeOffButton = document.getElementById('takeoff');
  const flightStatus = document.getElementById('flightStatus');
  const shuttleBackground = document.getElementById('shuttleBackground');
  const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
  const landingButton = document.getElementById('landing');
  const missionAbortButton = document.getElementById('missionAbort');
  const upButton = document.getElementById('up');
  const downButton = document.getElementById('down');
  const rightButton = document.getElementById('right');
  const leftButton = document.getElementById('left');
  const rocket = document.getElementById('rocket');
  const startPosition = rocket.style.inset = '250px 0px 0px 0px';  /* top right bottom left */
  // const rocketMove = document.getElementById('rocketMove');

  takeOffButton.addEventListener('click', function() {
    let shouldTakeOff = window.confirm('Confirm that the shuttle is ready for takeoff:');
    if (shouldTakeOff) {
      flightStatus.innerHTML = 'Shuttle in flight.';
      shuttleBackground.style.backgroundColor = 'blue';
      spaceShuttleHeight.innerHTML = 10000;
      rocket.style.inset = '240px 0px 0px 0px';
    }
  });

  landingButton.addEventListener('click', function() {
    let isLanding = window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = 'The shuttle has landed.';
    shuttleBackground.style.backgroundColor = 'green';
    spaceShuttleHeight.innerHTML = 0;
    rocket.style.inset = startPosition;
  });

  missionAbortButton.addEventListener('click', function() {
    let shouldAbort = window.confirm('Confirm that you want to abort the mission.');
    if (shouldAbort) {
      flightStatus.innerHTML = 'Mission aborted.';
      shuttleBackground.style.backgroundColor = 'green';
      spaceShuttleHeight.innerHTML = 0;
      rocket.style.inset = startPosition;
    }
  });

  /* 
  Use top and left only
  top max: 250px (will be at bottom of background)
  top min: 0px (will be at top of background)
  left max: 130px (will be at right of background)
  left min: -130px (will be at left of background) 
  */

  upButton.addEventListener('click', function() {
    console.log(shuttleBackground.style);
    console.log(shuttleBackground.style.height);

    let location = Number((rocket.style.top).replace('px',''));
    let height = Number(spaceShuttleHeight.innerHTML);
    if (location > 0) {
      let moveTo = (location -= 10) + 'px';
      rocket.style.top = moveTo;
      height += 10000;
      spaceShuttleHeight.innerHTML = height;
    }
  });

  downButton.addEventListener('click', function() {
    let location = Number((rocket.style.top).replace('px',''));
    let height = Number(spaceShuttleHeight.innerHTML);
    if (location < 250) {
      let moveTo = (location += 10) + 'px';
      rocket.style.top = moveTo;
      height -= 10000;
      spaceShuttleHeight.innerHTML = height;      
    }  
  });  

  rightButton.addEventListener('click', function() {
    let location = Number((rocket.style.left).replace('px',''));
    if (location < 130) {    
      let moveTo = (location += 10) + 'px';
      rocket.style.left = moveTo;
    }
  });

  leftButton.addEventListener('click', function() {
    let location = Number((rocket.style.left).replace('px',''));
    if (location > -130) {      
      let moveTo = (location -= 10) + 'px';
      rocket.style.left = moveTo;
    }
  });
  
  // rocketMove.addEventListener('click', function(event) {
  //   // console.log(startPosition);
  //   let direction = event.target.id;
  //   console.log(direction);
  //   let coordinates = [250, 0, 0, 0];
  //   if (direction === 'up') {
  //     coordinates[0] -= 10;
  //   } else if (direction === 'down') {
  //     coordinates[0] += 10;
  //   }
  //   console.log(coordinates);
  // });
}

window.addEventListener('load', pageLoaded);



