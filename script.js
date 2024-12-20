document.addEventListener("DOMContentLoaded", () => {
    const containModeButton = document.querySelector(".containModeButton");
    containModeButton.innerHTML = `<button id="toggle-btn">theme</button>`;
    const toggleBtn = document.getElementById("toggle-btn");
    const homeHeading = document.getElementById("home");

    toggleBtn.addEventListener('click', () => {
        const isWhiteBackground = document.body.style.backgroundColor === 'white' || !document.body.style.backgroundColor;

        document.body.style.backgroundColor = isWhiteBackground ? 'black' : 'white';
        homeHeading.style.color = isWhiteBackground ? 'white' : 'black';

        const titles = document.querySelectorAll('#HeadCoinTitles .itemTitle');
        titles.forEach(itemTitleParagraph => {
            itemTitleParagraph.style.color = isWhiteBackground ? 'white' : 'black';
        });
    });
    

    async function fetchCryptoData() {
        try {
            const response = await fetch('https://api.coincap.io/v2/assets');
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            const data = await response.json();

            const listContainer = document.getElementById("listContainer");
            listContainer.innerHTML = ""; // Clear old content

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
                listContainer.appendChild(li);
            });

            // setupSearch();
        } catch (error) {
            console.error('Error fetching data:', error);
            const listContainer = document.getElementById("listContainer");
            listContainer.innerHTML = `<p>Error loading data.</p>`;
        }
    }
    
    function toggleFavorite(button) {
        button.classList.toggle("active");
    }
    

    function setupSearch() {
        const searchInputDiv = document.querySelector(".searchInput");
        searchInputDiv.innerHTML = `
            <input id="search" type="search" placeholder="Enter coin name Here"/>
            <button class="searchBtn">Q</button>
        `;
        const searchInput = document.getElementById("search");
        const searchBtn = document.querySelector(".searchBtn");

        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                handleSearch();
            }
        });
        searchBtn.addEventListener("click", handleSearch);
    }
    

    function handleSearch() {
        const searchInput = document.getElementById("search").value.toLowerCase();
        const listItems = document.querySelectorAll("#listContainer .list");
        listItems.forEach(item => {
            const coinName = item.querySelector("#name").textContent.toLowerCase();
            item.style.display = coinName.includes(searchInput) ? "" : "none";
        });
    }
    setupSearch();
    // fetchCryptoData();
    setInterval(fetchCryptoData, 1000); // Fetch every 1 seconds
    fetchCryptoData();


    // document.getElementById("year").textContent = `${new Date().getFullYear()}`;
});

