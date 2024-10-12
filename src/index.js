console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

// Function to fetch and display dog images
function fetchDogImages() {
    fetch(imgUrl)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            const imagesArray = data.message; // The array of image URLs
            const imageContainer = document.getElementById('dog-image-container');
            
            // Loop through the array of image URLs
            imagesArray.forEach(imageUrl => {
                const imgElement = document.createElement('img'); // Create a new <img> element
                imgElement.src = imageUrl; // Set the image source to the URL
                imgElement.alt = 'A cute dog'; // Add an alt text
                imgElement.style.width = '200px'; // Set some basic styles
                imgElement.style.margin = '10px';
                
                // Append the image element to the container in the DOM
                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error)); // Log any errors
}
document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch dog breeds
    function fetchBreeds() {
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                const breedList = document.getElementById('dog-breeds');
                for (const breed in data.message) {
                    const li = document.createElement('li');  // Create new list item
                    li.textContent = breed;  // Set breed name as the list item text
                    breedList.appendChild(li);  // Add list item to the <ul>
                }
            })
            .catch(error => console.log('Error fetching breeds:', error));
    }

    fetchBreeds();  // Call the function to fetch breeds when the page loads
});



// Call the function on page load
window.onload = fetchDogImages;

document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch dog breeds
    function fetchBreeds() {
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                const breedList = document.getElementById('dog-breeds');
                for (const breed in data.message) {
                    const li = document.createElement('li');  // Create new list item
                    li.textContent = breed;  // Set breed name
                    li.addEventListener('click', () => {  // Add click event listener
                        li.style.color = 'blue';  // Change font color on click
                    });
                    breedList.appendChild(li);  // Add list item to the <ul>
                }
            })
            .catch(error => console.log('Error fetching breeds:', error));
    }

    fetchBreeds();  // Call the function to fetch breeds when the page loads
});
document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = [];  // To store all breeds for filtering

    // Fetch dog breeds
    function fetchBreeds() {
        fetch(breedUrl)
            .then(response => response.json())
            .then(data => {
                allBreeds = Object.keys(data.message);  // Store breeds in an array
                renderBreeds(allBreeds);  // Render all breeds initially
            })
            .catch(error => console.log('Error fetching breeds:', error));
    }

    // Render breeds in the <ul>
    function renderBreeds(breeds) {
        const breedList = document.getElementById('dog-breeds');
        breedList.innerHTML = '';  // Clear existing breeds
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            li.addEventListener('click', () => {
                li.style.color = 'blue';  // Change color on click
            });
            breedList.appendChild(li);
        });
    }

    // Filter breeds based on selected letter
    function filterBreeds(letter) {
        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(letter));
        renderBreeds(filteredBreeds);
    }

    // Add event listener to dropdown
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        if (selectedLetter) {
            filterBreeds(selectedLetter);  // Filter breeds by the selected letter
        } else {
            renderBreeds(allBreeds);  // If no letter is selected, show all breeds
        }
    });

    fetchBreeds();  // Call the function to fetch breeds when the page loads
});
