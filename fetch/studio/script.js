//TODO: Add Your Code Below
window.addEventListener("load", function () {
  const container = document.getElementById("container");
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      console.log(json);
      for (let index = 0; index < json.length; index++) {
        container.innerHTML += `
      <div class="astronaut">
      <div class="bio">
      <h2>${json[index].firstName} ${json[index].lastName}</h2>
      <ul><li>Hours in space: ${json[index].hoursInSpace}</li>
      <li>Active: ${json[index].active}</li>
      <li>skills: ${json[index].skills.join(",")}</li>
      </ul>
      </div>
      <img class='avatar' src= ${json[index].picture}/>
      </div>`;
      }
    });
  });
});
