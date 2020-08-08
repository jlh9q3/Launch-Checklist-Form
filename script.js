// Write your JavaScript code here!

//load window ch25
window.addEventListener("load", function() {

   //get element ids
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   


//use prevent default and conditionals to validate...strings = strings, numbers=numbers

   form.addEventListener("submit", function(event){
      let sufficientUserInput = true;

      if (pilotName.value === "" || 
      copilotName.value === "" || 
      fuelLevel.value === "" || 
      cargoMass.value === "" ) {
         sufficientUserInput = false;
         alert("All fields required");

         //prevent user from submitting form
         event.preventDefault();
      }
         //strings = strings, numbers=numbers so if values !strings/num invalid input

     else if (typeof(pilotName.value) != "string" || 
     typeof(copilotName.value) != "string" || 
     isNaN(fuelLevel.value) || 
     isNaN(cargoMass.value) || 
     !isNaN(pilotName.value) || 
     !isNaN(copilotName.value) ){
        sufficientUserInput = false;

         alert("Invalid input");
         event.preventDefault();

      } else {

         sufficientUserInput = true;
      }
      
      if (sufficientUserInput === true){
      event.preventDefault();

      //template literal to update pilot/copilot names upon user entry. us element ids 

      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready.`;

      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready.`;
        
          
      let sufficientUserInput = false;
        
      //fuel status   
      if (Number(fuelLevel.value) < 10000){
         let fuelStatus = document.getElementById("fuelStatus");
         fuelStatus.innerHTML = "Warning! Fuel level is too low for launch!";
         sufficientUserInput = true;

      } else {

         let fuelStatus = document.getElementById("fuelStatus");
         fuelStatus.innerHTML = "Fuel level sufficient.";
      }
        


      //cargo status


      if (Number(cargoMass.value) > 10000){
         let cargoStatus = document.getElementById("cargoStatus");
         cargoStatus.innerHTML = "Warning! Cargo mass is too high!";
         sufficientUserInput = true;

      } else {

         let cargoStatus = document.getElementById("cargoStatus");
         cargoStatus.innerHTML = "Cargo mass low enough for launch.";
      }
        
      if (sufficientUserInput === true){
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Shuttle not ready for launch";
         document.getElementById("faultyItems").style.visibility = "visible";
         launchStatus.style.color = "red";

      } else {
         
         let launchStatus = document.getElementById("launchStatus");
         launchStatus.innerHTML = "Cleared for takeoff.";
         launchStatus.style.color = "green";
         document.getElementById("faultyItems").style.visibility = "hidden";
      }  
   }   
   });
});


    //fetch json for mission destination
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         
         let destination = json[Math.floor(Math.random()*6)];

         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${destination.name}</li>
            <li>Diameter: ${destination.diameter}</li>
            <li>Star: ${destination.star}</li>
            <li>Distance from Earth: ${destination.distance}</li>
            <li>Number of Moons: ${destination.moons}</li>
         </ol>
         <img src="${destination.image}">`;
      });
   } );



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
