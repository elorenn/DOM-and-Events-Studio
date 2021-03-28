// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
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

  takeOffButton.addEventListener('click', function() {
    console.log('take off!');
    let shouldTakeOff = window.confirm('Confirm that the shuttle is ready for takeoff:');
    if (shouldTakeOff) {
      flightStatus.innerHTML = 'Shuttle in flight.';
      shuttleBackground.style.backgroundColor = 'blue';
      spaceShuttleHeight.innerHTML = '10,000';
    }
  });

  landingButton.addEventListener('click', function() {
    console.log('landing!');
    let isLanding = window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = 'The shuttle has landed.';
    shuttleBackground.style.backgroundColor = 'green';
    spaceShuttleHeight.innerHTML = '0';
  });

  missionAbortButton.addEventListener('click', function() {
    console.log('abort!');
    let shouldAbort = window.confirm('Confirm that you want to abort the mission.');
    if (shouldAbort) {
      flightStatus.innerHTML = 'Mission aborted.';
      shuttleBackground.style.backgroundColor = 'green';
      spaceShuttleHeight.innerHTML = '0';
    }
  });

  upButton.addEventListener('click', function() {
    let location = Number((rocket.style.top).replace('px',''));
    let moveTo = (location -= 10) + 'px';
    console.log('up: ' + moveTo);
    rocket.style.top = moveTo;
  });

  downButton.addEventListener('click', function() {
    let location = Number((rocket.style.top).replace('px',''));
    let moveTo = (location += 10) + 'px';
    console.log('down: ' + moveTo);
    rocket.style.top = moveTo;
  });  

  rightButton.addEventListener('click', function() {
    let location = Number((rocket.style.left).replace('px',''));
    let moveTo = (location += 10) + 'px';
    console.log('right: ' + moveTo);
    rocket.style.left = moveTo;
  });

  leftButton.addEventListener('click', function() {
    let location = Number((rocket.style.left).replace('px',''));
    let moveTo = (location -= 10) + 'px';
    console.log('left: ' + moveTo);
    rocket.style.left = moveTo;
  });  
}

window.addEventListener('load', init);