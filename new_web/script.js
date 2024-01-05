// Sample list of countries and their details
const countries = [
    { name: "United States", capital: "Washington, D.C.", population: "331 million" },
    { name: "United Kingdom", capital: "London", population: "67 million" },
    { name: "Canada", capital: "Ottawa", population: "38 million" },
    // Add more countries as needed
];

function searchCountry() {
    // Get the search input value
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    // Filter countries based on the search input
    const results = countries.filter(country =>
        country.name.toLowerCase().includes(searchInput) ||
        country.capital.toLowerCase().includes(searchInput) ||
        country.population.toLowerCase().includes(searchInput)
    );
    // Display the results
    displayResults(results);
}

function displayResults(results) {
    const resultContainer = document.getElementById("resultContainer");

    // Clear previous results
    resultContainer.innerHTML = "";

    // Display each result
    results.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country-card");

        // Display country details
        countryDiv.innerHTML = `
            <h3>${country.name}</h3>
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
        `;

        resultContainer.appendChild(countryDiv);
    });

    // Display a message if no results are found
    if (results.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No matching countries found.";
        resultContainer.appendChild(noResultsMessage);
    }
}
