
const countries = [
    { name: "United States", capital: "Washington, D.C.", population: "331 million" },
    { name: "United Kingdom", capital: "London", population: "67 million" },
    { name: "Canada", capital: "Ottawa", population: "38 million" },
];
function searchCountry() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const results = countries.filter(country =>
        country.name.toLowerCase().includes(searchInput) ||
        country.capital.toLowerCase().includes(searchInput) ||
        country.population.toLowerCase().includes(searchInput)
    );
   
    displayResults(results);
}
function displayResults(results) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";
    results.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country-card");

       
        countryDiv.innerHTML = `
            <h3>${country.name}</h3>
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
        `;

        resultContainer.appendChild(countryDiv);
    });
    if (results.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No matching countries found.";
        resultContainer.appendChild(noResultsMessage);
    }
}
