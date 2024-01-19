function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'flex';
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}


// Open the gmail for lets talk
document.getElementById("openGmailPopupBtn").addEventListener("click", function() {
   
    var emailAddress = "kalbojakerss123@gmail.com";
    var subject = "Your Topic";
    var body = "Your email body content";

   
    var gmailComposeUrl = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(emailAddress) +
                          "&su=" + encodeURIComponent(subject) +
                          "&body=" + encodeURIComponent(body);

    
    window.open(gmailComposeUrl, "_blank");
  });

// Open the gmail for contact me
document.getElementById("openGmailPopupBtn2").addEventListener("click", function() {
   
    var emailAddress = "kalbojakerss123@gmail.com";
    var subject = "Your Topic";
    var body = "Your email body content";

   
    var gmailComposeUrl = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(emailAddress) +
                          "&su=" + encodeURIComponent(subject) +
                          "&body=" + encodeURIComponent(body);

    
    window.open(gmailComposeUrl, "_blank");
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Sample array of countries (you can replace it with your data)
    var countriesData = [
        { name: 'Country1', description: 'Description for Country1.' },
        { name: 'Country2', description: 'Description for Country2.' },
        { name: 'Country3', description: 'Description for Country3.' },
        { name: 'USA', description: 'Description for USA.', imageUrl: 'images/usa.jpg' }, // Add USA data
        // Add more countries as needed
    ];

    function searchCountry() {
        var searchInput = document.getElementById('searchInput').value.toLowerCase();

        // Check if the entered country is "USA"
        if (searchInput === 'usa') {
            // Redirect to another page (you can replace 'usa.html' with your actual page)
            window.location.href = 'usa.html';
            return;
        }

        var contentContainer = document.querySelector('.content');
        var template = document.querySelector('[data-user-template]');

        // Clear previous search results
        contentContainer.innerHTML = '';

        // Filter countries based on the search input
        var filteredCountries = countriesData.filter(function (country) {
            return country.name.toLowerCase().includes(searchInput);
        });

        // Display information about the matching countries
        filteredCountries.forEach(function (country) {
            var clone = document.importNode(template.content, true);

            // Set the country name in the header
            clone.querySelector('[data-header]').textContent = country.name;

            // Set the country description in the body
            clone.querySelector('[data-body]').textContent = country.description;

            // Display the image if available
            if (country.imageUrl) {
                var image = document.createElement('img');
                image.src = country.imageUrl;
                clone.querySelector('[data-body]').appendChild(image);
            }

            contentContainer.appendChild(clone);
        });

        // Display a message if no matching countries are found
        if (filteredCountries.length === 0) {
            var noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No matching countries found.';
            contentContainer.appendChild(noResultsMessage);
        }
    }

    // Attach the searchCountry function to the button click event
    document.querySelector('.btn').addEventListener('click', searchCountry);
});
