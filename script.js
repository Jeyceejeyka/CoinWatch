document.addEventListener("DOMContentLoaded", () => {
    // Grab the button to toggle the theme mode
    const containModeButton = document.querySelector(".containModeButton");
    containModeButton.innerHTML = `<button id="toggle-btn">theme</button>`; // Set the button HTML

    const toggleBtn = document.getElementById("toggle-btn");
    const homeHeading = document.getElementById("home");

    // Event listener for theme toggling
    toggleBtn.addEventListener('click', () => {
        // Check if the background color is currently white or not set
        const isWhiteBackground = document.body.style.backgroundColor === 'white' || !document.body.style.backgroundColor;

        // Toggle background color and heading text color
        document.body.style.backgroundColor = isWhiteBackground ? 'black' : 'white';
        homeHeading.style.color = isWhiteBackground ? 'white' : 'black';

        // Change the color of item titles in the list
        const titles = document.querySelectorAll('#HeadCoinTitles .itemTitle');
        titles.forEach(itemTitleParagraph => {
            itemTitleParagraph.style.color = isWhiteBackground ? 'white' : 'black';
        });
    });

    // Async function to fetch cryptocurrency data
    async function fetchCryptoData() {
        try {
            // Fetch data from the API
            const response = await fetch('https://api.coincap.io/v2/assets');
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`); // Error handling for failed request

            const data = await response.json();

            const listContainer = document.getElementById("listContainer");
            listContainer.innerHTML = ""; // Clear old content

            // Loop through each coin data and display it
            data.data.forEach(element => {
                const li = document.createElement("li");
                li.classList.add("list");
                li.innerHTML = `
                    <button class="favorite" onclick="toggleFavorite(this)">
                        <span class="icon">★</span> 
                    </button>
                    <span id="name" class="item">${element.name}</span> 
                    <span id="symbol" class="item">${element.symbol}</span> 
                    <span id="price" class="item">${parseFloat(element.priceUsd).toFixed(10)}</span> 
                    <span id="supply" class="item">${parseFloat(element.supply).toFixed(2)}</span> 
                    <span id="maxSupply" class="item">${parseFloat(element.maxSupply).toFixed(2)}</span> 
                    <span id="mCapUsd" class="item">${parseFloat(element.marketCapUsd).toFixed(2)}</span> 
                    <span id="VolumeUsd24hr" class="item">${parseFloat(element.volumeUsd24Hr).toFixed(2)}</span> 
                    <span id="changePercent24Hr" class="item">${parseFloat(element.changePercent24Hr).toFixed(2)}%</span> 
                    <span id="vwap24Hr" class="item">${parseFloat(element.vwap24Hr).toFixed(2)}</span>
                `;
                listContainer.appendChild(li); // Add new data to the container
            });

        } catch (error) {
            console.error('Error fetching data:', error);
            const listContainer = document.getElementById("listContainer");
            listContainer.innerHTML = `<p>Error loading data.</p>`; // Display error message
        }
    }

    // Function to toggle the favorite star icon
    function toggleFavorite(button) {
        button.classList.toggle("active"); // Toggle the "active" class to mark as favorite
    }

    // Function to setup the search feature
    function setupSearch() {
        const searchInputDiv = document.querySelector(".searchInput");
        searchInputDiv.innerHTML = `
            <input id="search" type="search" placeholder="Enter coin name Here"/>
            <button class="searchBtn">Q</button>
        `; // Set up search input and button

        const searchInput = document.getElementById("search");
        const searchBtn = document.querySelector(".searchBtn");

        // Trigger search on Enter key press
        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                handleSearch();
            }
        });

        // Trigger search when the search button is clicked
        searchBtn.addEventListener("click", handleSearch);
    }

    // Function to handle search input
    function handleSearch() {
        const searchInput = document.getElementById("search").value.toLowerCase(); // Get the search value
        const listItems = document.querySelectorAll("#listContainer .list");

        // Loop through list items and show/hide based on search match
        listItems.forEach(item => {
            const coinName = item.querySelector("#name").textContent.toLowerCase();
            item.style.display = coinName.includes(searchInput) ? "" : "none";
        });
    }

    setupSearch(); // Initialize the search
    fetchCryptoData(); // Fetch crypto data initially

    // Set an interval to fetch crypto data every 1 second (can be adjusted as needed)
    setInterval(fetchCryptoData, 1000); 

    
     document.getElementById("year").textContent = `${new Date().getFullYear()}`;
});
