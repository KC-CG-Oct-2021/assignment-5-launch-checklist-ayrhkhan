// Write your helper functions here!
try{
    require('isomorphic-fetch');
}catch(error){
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

    let missionTarget = document.getElementById('missionTarget');
    missionTarget.innerHTML = 
    `<h2>Mission Destination</h2>
    <ol>
        <li>Name:  ${name} </li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${diameter}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
}


function validateInput(testInput) {
    if(testInput === ''){  
    //   console.log('it could be anythinhg')
      return 'Empty'
    }
    if(isNaN(testInput)){  
    //   console.log('it could be a string ')
      return 'Not a Number'
    }
    if(!isNaN(testInput)){  
    //   console.log('it could be a number ')
      return 'Is a Number'
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


    if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty') {
        try{
            alert("All fields are required!");
        }catch(error){
        }
    }
    if (validateInput(fuelLevel) === 'Not a Number' ||  validateInput(cargoLevel) === 'Not a Number') {
        try{
            alert("Input must be a number!");
        }catch(error){
        }

    }
    if (validateInput(pilot) === 'Is a Number' ||  validateInput(copilot) === 'Is a Number') {
        try{
            alert("Input must be a string!");
        }catch(error){
        }
    }

    let pilotStatus = document.getElementById('pilotStatus')
    pilotStatus.innerHTML = `Pilot ${pilot} is Ready`
    let copilotStatus = document.getElementById('copilotStatus')
    copilotStatus.innerHTML = `Co-pilot  ${copilot} is Ready`
    let launchStatus = document.getElementById('launchStatus');


    launchStatus.innerHTML = `Shuttle is ready for launch`;
    launchStatus.style.color = 'green'

    
    if( fuelLevel < 10000){
        console.log('here')
        list.style.visibility = 'visible'
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = 'red'
    }

    if(cargoLevel > 10000 ){
        list.style.visibility = 'visible'
        launchStatus.innerHTML = `Shuttle not ready for launch`;
        launchStatus.style.color = 'red'
        let cargoStatus = document.getElementById('cargoStatus');
        cargoStatus.innerHTML = `There is too much mass for the shuttle to take off`;
    }







   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => response.json()).then( function(data) {
        return data
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)] 
}

try{
    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
}catch(error){
}


