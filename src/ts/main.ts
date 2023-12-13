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
                // Get a random index within the range of the number of dog breeds
                const randomIndex = Math.floor(Math.random() * data.dogs.length);

                
                // Get the random dog breed object
                const randomBreed = data.dogs[randomIndex];
                const imageElement = document.getElementById('image');
                
imageElement.src = randomBreed.image;

// Set the width and height attributes
imageElement.width = 450;
imageElement.height = 450;

                // Display the information on the webpage
                document.getElementById("breed").innerText = randomBreed.breed;
                document.getElementById('description').innerText = randomBreed.description;
                document.getElementById('image').src = randomBreed.image;
            }
        });
});
