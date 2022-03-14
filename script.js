// Write your JavaScript code here!
try{
    const { formSubmit, myFetch, pickPlanet } = require("./scriptHelper");
}catch(error){
}


window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {

        let pilotName = document.querySelector("input[name=pilotName]");
        let userEnteredPilotName = pilotName.value;
        let copilotName = document.querySelector("input[name=copilotName]");
        let userEnteredCopilotName = copilotName.value;
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let userEnteredCargoMass = cargoMass.value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let userEnteredFuelLevel = fuelLevel.value;
        let faultyItems = document.getElementById("faultyItems");
        let submit_button = document.getElementById("formSubmit");
        submit_button.addEventListener("click", formSubmission(document, faultyItems, userEnteredPilotName, userEnteredCopilotName, userEnteredFuelLevel, userEnteredCargoMass ));
        event.preventDefault();

        // console.log('here')
      });



   let listedPlanets;
//    Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   })

   
});