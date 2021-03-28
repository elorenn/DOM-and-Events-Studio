// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  const takeOffButton = document.getElementById('takeoff');
  const flightStatus = document.getElementById('flightStatus');
  const shuttleBackground = document.getElementById('shuttleBackground');
  const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
  const landingButton = document.getElementById('landing');
  const missionAbortButton = document.getElementById('missionAbort');

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
}

window.addEventListener('load', init);