document.addEventListener("DOMContentLoaded", () => {
    // Grab the container for the theme toggle button
    const containModeButton = document.querySelector(".containModeButton");
    containModeButton.innerHTML = '<button id="toggle-btn">theme</button>'; // Set the button HTML
  
    const toggleBtn = document.getElementById("toggle-btn");
    const homeHeading = document.getElementById("home");
  
    // Event listener for theme toggling
    toggleBtn.addEventListener("click", () => {
      // Check the current background color
      const isWhiteBackground =
        document.body.style.backgroundColor === "white" ||
        !document.body.style.backgroundColor;
  
      // Toggle background color and heading text color
      document.body.style.backgroundColor = isWhiteBackground ? "black" : "white";
      homeHeading.style.color = isWhiteBackground ? "white" : "black";
  
      // Change the color of item titles
      const titles = document.querySelectorAll("#HeadCoinTitles .itemTitle");
      titles.forEach((itemTitleParagraph) => {
        itemTitleParagraph.style.color = isWhiteBackground ? "white" : "black";
      });
    });
  
    // Async function to fetch cryptocurrency data
    async function fetchCryptoData() {
      try {
        // Fetch data from the API
        const response = await fetch("https://api.coincap.io/v2/assets");
        if (!response.ok)
          throw new Error(`HTTP Error: ${response.status}`); // Error handling for failed request
  
        const data = await response.json();
  
        const listContainer = document.getElementById("listContainer");
        listContainer.innerHTML = ""; // Clear old content
  
        // Loop through each coin data and display it
        data.data.forEach((element) => {
          const li = document.createElement("li");
          li.classList.add("list");
          li.innerHTML = `
            <button class="favorite" onclick="toggleFavorite(this)">
              <span class="icon">★</span> 
            </button>
            <span id="name" class="item">${element.name}</span> 
            <span id="symbol" class="item">${element.symbol}</span> 
            <span id="price" class="item">${parseFloat(
              element.priceUsd
            ).toFixed(10)}</span> 
            <span id="supply" class="item">${parseFloat(
              element.supply
            ).toFixed(2)}</span> 
            <span id="maxSupply" class="item">${
              element.maxSupply
                ? parseFloat(element.maxSupply).toFixed(2)
                : "N/A"
            }</span> 
            <span id="mCapUsd" class="item">${parseFloat(
              element.marketCapUsd
            ).toFixed(2)}</span> 
            <span id="VolumeUsd24hr" class="item">${parseFloat(
              element.volumeUsd24Hr
            ).toFixed(2)}</span> 
            <span id="changePercent24Hr" class="item">${parseFloat(
              element.changePercent24Hr
            ).toFixed(2)}%</span> 
            <span id="vwap24Hr" class="item">${parseFloat(
              element.vwap24Hr
            ).toFixed(2)}</span>
          `;
          listContainer.appendChild(li); // Add new data to the container
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        const listContainer = document.getElementById("listContainer");
        listContainer.innerHTML = "<p>Error loading data.</p>"; // Display error message
      }
    }
  
    // Function to toggle the favorite star icon
    window.toggleFavorite = (button) => {
      button.classList.toggle("active"); // Toggle the "active" class
    };
  
    // Function to setup the search feature
    function setupSearch() {
      const searchInputDiv = document.querySelector(".searchInput");
      searchInputDiv.innerHTML = `
        <input id="search" type="search" placeholder="Enter coin name here" />
        <button class="searchBtn">Search</button>
      `;
  
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
  
      // Loop through the list items to find matches
      listItems.forEach((item) => {
        const name = item.querySelector("#name").textContent.toLowerCase();
        if (name.includes(searchInput)) {
          item.style.display = "flex"; // Show matching items
        } else {
          item.style.display = "none"; // Hide non-matching items
        }
      });
    }
  
    // Initialize the search and fetch data
    setupSearch();
    fetchCryptoData();
  });
  