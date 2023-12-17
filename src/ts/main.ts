document.addEventListener("DOMContentLoaded", () => {
    fetch("./data/dogsApi.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.dogs);

            const button = document.getElementById("randomBtn");
            button.addEventListener("click", () => {
                getRandomBreed(data);
                
            });

            function getRandomBreed(data) {
                const randomIndex = Math.floor(Math.random() * data.dogs.length);

                
                // Get the random dog breed object
                const randomBreed = data.dogs[randomIndex];
                const imageElement = document.getElementById('image');
                
                imageElement.src = randomBreed.image;

                imageElement.width = 450;
                imageElement.height = 450;

                document.getElementById("breed").innerText = randomBreed.breed;
                document.getElementById('description').innerText = randomBreed.description;
                document.getElementById('image').src = randomBreed.image;
            }
        });
});



document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get the search query
    var searchQuery = document.getElementById('searchInput').value;
  
    // Make an API request
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchQuery)
      .then(response => response.json())
      .then(data => {
        // Display search results
        displayResults(data.drinks);
      })
      .catch(error => console.error('Error:', error));
  });
  
  function displayResults(drinks) {
    var resultsSection = document.getElementById('searchResults');
    resultsSection.innerHTML = '';
  
    if (drinks) {
      drinks.forEach(function (drink) {
        var drinkCard = document.createElement('div');
        drinkCard.classList.add('card', 'mb-3');
  
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
  
        var drinkTitle = document.createElement('h5');
        drinkTitle.classList.add('card-title');
        drinkTitle.textContent = drink.strDrink;
  
        var drinkImage = document.createElement('img');
        drinkImage.classList.add('card-img-top');
        drinkImage.src = drink.strDrinkThumb;
        drinkImage.alt = drink.strDrink;
  
        var drinkInstructions = document.createElement('p');
        drinkInstructions.classList.add('card-text');
        drinkInstructions.textContent = drink.strInstructions;
  
        cardBody.appendChild(drinkTitle);
        cardBody.appendChild(drinkImage);
        cardBody.appendChild(drinkInstructions);
        drinkCard.appendChild(cardBody);
  
        resultsSection.appendChild(drinkCard);
      });
    } else {
      var noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'No results found.';
      resultsSection.appendChild(noResultsMessage);
    }
  }


  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.getElementById(targetId.substring(1)); 
  
      if (targetElement) {
        e.preventDefault();
  
        const offset = document.getElementById('nav-bar').offsetHeight; 
        const targetPosition = targetElement.offsetTop - offset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  