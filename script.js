var searchButton = document.getElementById("search-button");
var clearButton = document.getElementById("clear-button");
var sheet = window.document.styleSheets[0];

function clear() {
  document.getElementById("search-input").value = "";
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

}

function searchPlace() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
  fetch('api.json')
    .then(response => response.json())
    .then(data => {
      if (document.getElementById("search-input").value.toLowerCase() === "country" || document.getElementById("search-input").value.toLowerCase() === "countries") {
        resultDiv.innerHTML += `<div id='yo-bar'>
        <img src="${data.countries[1].cities[1].imageUrl}" alt="hjh">
        <div id="text">
        <h2 id="title">${data.countries[1].cities[1].name}</h2>
        <h2 id="desc">${data.countries[1].cities[1].description}</h2>
        </div>`;
        resultDiv.innerHTML += `<div id='yo-bar'>
        <img src="${data.countries[0].cities[0].imageUrl}" alt="hjh">
        <div id="text">
        <h2 id="title">${data.countries[0].cities[0].name}</h2>
        <h2 id="desc">${data.countries[0].cities[0].description}</h2></div>
        </div>`;
      } else if (document.getElementById("search-input").value.toLowerCase() === "temples" || document.getElementById("search-input").value.toLowerCase() === "temple") { 
        resultDiv.innerHTML += `<div id='yo-bar'>
        <img src="${data.temples[1].imageUrl}" alt="hjh">
        <div id="text">
        <h2 id="title">${data.temples[1].name}</h2>
        <h2 id="desc">${data.temples[1].description}</h2>
        </div>`;
        resultDiv.innerHTML += `<div id='yo-bar'>
        <img src="${data.temples[0].imageUrl}" alt="hjh">
        <div id="text">
        <h2 id="title">${data.temples[0].name}</h2>
        <h2 id="desc">${data.temples[0].description}</h2></div>
        </div>`;
      } else if (document.getElementById("search-input").value.toLowerCase() === "beach" || document.getElementById("search-input").value.toLowerCase() === "beaches") { 
        resultDiv.innerHTML += `<div id='yo-bar'>
        <img src="${data.beaches[1].imageUrl}" alt="hjh">
        <div id="text">
        <h2 id="title">${data.beaches[1].name}</h2>
        <h2 id="desc">${data.beaches[1].description}</h2>
        </div>`;
        resultDiv.innerHTML += `<div id='yo-bar'>
        <img src="${data.beaches[0].imageUrl}" alt="hjh">
        <div id="text">
        <h2 id="title">${data.beaches[0].name}</h2>
        <h2 id="desc">${data.beaches[0].description}</h2></div>
        </div>`;
      }
      /*if (country) {

        resultDiv.innerHTML += `<h2>$P</h2>`;
        /*resultDiv.innerHTML += `<h2>${country.cities[step].name}</h2>`;*/
        /*resultDiv.innerHTML += `<img src="${country.cities[step].imageUrl}" alt="hjh">`;*/
      /*} else {
        resultDiv.innerHTML = 'Country not found.';
      }*/
    })
    .catch(error => {
      console.error('Error:', error);
      resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}


searchButton.addEventListener("click", searchPlace);
clearButton.addEventListener("click", clear);
