# Cryptocurrency Tracker Web Application

Welcome to the **Cryptocurrency Tracker** repository! This project is a fully functional and responsive web application that allows users to track cryptocurrency prices, toggle between light and dark themes, and filter coins based on their names. It is built using HTML, CSS, and JavaScript with live data fetched from the CoinCap API.

---

## Features

### 1. **Responsive Header with Theme Toggle**
- A navigation bar includes:
  - Logo that rotates for a dynamic visual effect.
  - Real-time search bar to filter coins by name.
  - Theme toggle button to switch between light and dark modes.

### 2. **Live Cryptocurrency Data**
- Fetches live cryptocurrency data from the CoinCap API (`https://api.coincap.io/v2/assets`).
- Displays key metrics including:
  - Name
  - Symbol
  - Price (USD)
  - Market Cap (USD)
- Automatically updates the display as the user scrolls.

### 3. **Search Functionality**
- Real-time filtering of cryptocurrency list based on the search input.
- Case-insensitive matching to enhance user experience.

### 4. **Favorites System**
- Users can mark their favorite cryptocurrencies by clicking a star icon.
- Favorites are visually distinguished.

### 5. **Light/Dark Theme Support**
- The application supports light and dark themes.
- Toggle button allows seamless switching with smooth transitions.

### 6. **Footer with Social Links**
- A footer includes links to social media profiles and email for further interaction.

---

## Repository Structure

### **HTML**
The main structure of the page is defined in `index.html`:

- **Header Section**:
  - Navigation bar with logo, search input, and theme toggle button.
- **Main Section**:
  - Container to dynamically load cryptocurrency data.
  - Rotating logo and call-to-action section.
- **Footer Section**:
  - Social media links for engagement.

### **JavaScript**
The core functionality is implemented in `script.js`:

- **API Integration**:
  - Fetches data from CoinCap API asynchronously.
  - Handles error scenarios gracefully.
- **Dynamic DOM Updates**:
  - Updates the list of cryptocurrencies in real-time based on user interaction.
- **Search and Filter Logic**:
  - Provides instant filtering with case-insensitive matching.
- **Theme Toggle**:
  - Dynamically switches themes by toggling classes on the `body` element.
- **Favorites Management**:
  - Allows users to mark and unmark favorites, storing the state dynamically.

### **CSS**
The styles are defined in `styles.css`:

- **Theme Colors**:
  - Predefined palettes for light and dark modes.
- **Responsive Design**:
  - Ensures the application works well on all screen sizes.
- **Animations**:
  - Smooth transitions for theme changes and rotating logo effect.

---

## Installation and Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, or Safari).
- (Optional) A local development server like VS Code Live Server.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cryptocurrency-tracker.git
   ```
2. Navigate to the project folder:
   ```bash
   cd cryptocurrency-tracker
   ```
3. Open `index.html` in your browser, or use a local development server for better performance.

---

## Usage

1. Open the application in a web browser.
2. Use the search bar to filter the cryptocurrency list.
3. Click the star icon next to a cryptocurrency to mark it as a favorite.
4. Toggle between light and dark themes using the button in the header.

---

## Future Enhancements
- **Pagination:** Add paginated views for better performance with large datasets.
- **Historical Data:** Integrate charts showing historical price trends.
- **User Authentication:** Enable saving of user preferences.
- **Multilingual Support:** Provide localization for broader accessibility.

---

## Contribution

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project Mit licensed.

---

## Contact

For questions, suggestions, or feedback, feel free to reach out:
- **Email:** jeyceejeyka@gmail.com
- **GitHub Issues:** Open an issue in this repository.
- **Social Media:** Links available in the footer of the application.

---

Thanks for checking

