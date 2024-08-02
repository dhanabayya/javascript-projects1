// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () => {
  const takeoff = document.getElementById("takeoff");
  const flightstatus = document.getElementById("flightStatus");
  const shuttlebackground = document.getElementById("shuttleBackground");
  const shuttleheight = document.getElementById("spaceShuttleHeight");
  const land = document.getElementById("landing");
  const missionabort = document.getElementById("missionAbort");
  const flightdisplay = document.getElementById("flightDisplay");
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const right = document.getElementById("right");
  const left = document.getElementById("left");
  const image = document.getElementById("rocket");
  image.style.position = "absolute";
  image.style.bottom = "10px";

  takeoff.addEventListener("click", (event) => {
    let pop = confirm("Confirm that the shuttle is ready for takeoff");
    if (pop) {
      flightstatus.innerHTML = "Shuttle in flight";
      shuttlebackground.style.backgroundColor = "blue";
      shuttleheight.innerHTML = 10000;
    }
  });
  land.addEventListener("click", (event) => {
    alert("The shuttle is landing. Landing gear engaged.");
    flightstatus.innerHTML = "The shuttle has landed.";
    shuttlebackground.style.backgroundColor = "green";
    shuttleheight.innerHTML = 0;
  });
  missionabort.addEventListener("click", (event) => {
    let pop = confirm("Confirm that you want to abort the mission.");
    if (pop) {
      flightstatus.innerHTML = "Mission aborted";
      shuttlebackground.style.backgroundColor = "green";
      shuttleheight.innerHTML = 0;
    }
  });
  // up.addEventListener("click", (event) => {
  // flightdisplay.innerHTML = parseInt("10px");
  // });
});
