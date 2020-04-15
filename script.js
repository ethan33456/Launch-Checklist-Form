// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         // Access the JSON in the response
         response.json().then( function(json) {
            let div = document.getElementById("missionTarget"); 
            let random = Math.floor((Math.random() * 6));
            div.innerHTML = 
            `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[random].name}</li>
                  <li>Diameter: ${json[random].diameter}</li>
                  <li>Star: ${json[random].star}</li>
                  <li>Distance from Earth: ${json[random].distance}</li>
                  <li>Number of Moons: ${json[random].moons}</li>
               </ol>
            <img src="${json[random].image}"></img>`;
         });
      });
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!" + " " + pilotNameInput.value + "" + copilotNameInput.value);
         event.preventDefault();
      }
      if (!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)){
      alert("Pilot and Co-Pilot names should be letters");
      event.preventDefault();

      }
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Fuel Level and Cargo Mass should be numbers");
         event.preventDefault();
      }
      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      let copilotStatus = document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`;
      let list = document.getElementById("launchStatusCheck");
      if (fuelLevelInput.value < 10000) {
         let fuelStatus = document.getElementById("fuelStatus");
         fuelStatus.innerHTML = `Not enough fuel`;
         document.getElementById("faultyItems").style.visibility = "visible";
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         event.preventDefault();
      }
      if (cargoMassInput.value > 10000) {
         let cargoStatus = document.getElementById("cargoStatus");
         cargoStatus.innerHTML = `Too much mass for the shuttle to take off`;
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.style.color = "red";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         event.preventDefault();
      }
      if (cargoMassInput.value <= 10000 && fuelLevelInput.value >= 10000){
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = `<h2>Shuttle ready for launch</h2>`;
         event.preventDefault();
      }

   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
