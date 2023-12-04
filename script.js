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


// Open the gmail for contact me
document.getElementById("openGmailPopupBtn").addEventListener("click", function() {
   
    var emailAddress = "kalbojakerss123@gmail.com";
    var subject = "Your Topic";
    var body = "Your email body content";

   
    var gmailComposeUrl = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(emailAddress) +
                          "&su=" + encodeURIComponent(subject) +
                          "&body=" + encodeURIComponent(body);

    
    window.open(gmailComposeUrl, "_blank");
  });