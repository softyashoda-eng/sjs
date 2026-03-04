const scriptURL = 'https://script.google.com/macros/s/AKfycbzqGGU2ZZ0lAKtfwd0p9wjTCy4frE6nskymj9rDFI6hYXePOFJCNZMS72D0tq0Vhpu3jA/exec'; // Paste your URL here

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(document.getElementById('contactForm')) 
  })
  .then(response => alert("Data saved!"))

  .catch(error => console.error('Error!', error.message));
  contactForm.reset(); 
});


