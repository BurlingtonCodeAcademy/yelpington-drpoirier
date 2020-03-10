
fetch('https://json-server.burlingtoncodeacademy.now.sh/restaurants') // api endpoint

document.getElementById("getAll").addEventListener("click", getAll);
function getAll() {
  fetch("locations.json")
    .then(function(resp) {
      return resp.json();
    })
    .then(function(myJson) {
      document.getElementById("locations").innerHTML = myJson.forEach(restaurant => {
        ""
      });
    })
    .catch(err => {
      console.log(`There was an error`);
    });
}

/*
let displayName = document.getElementById('map') // whatever the thing is named

let query = window.location.search // gives you the question mark and anything after it

let id = query.split('?')[1] // splits at the ? and the 1 means we take everything after the ?

fetch(`public/api/locations.json/${id}.json`)
  .then(res => res.json()) // an implicit return; we're not passing anything we don't need to curly braces
  .then((jsonRes) => {
    console.log(jsonRes)
    displayName.innerText = jsonRes.name
    // fun fact: we can do fetches inside of fetches
    fetch(`https://nominatim...${jsonRes.address}`)
    .then(res => res.json())
  })
 */