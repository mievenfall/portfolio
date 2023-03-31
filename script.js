var headerHeight = document.querySelector('header').offsetHeight;
document.querySelector('main').style.paddingTop = headerHeight + 'px';

var headerHeight = document.querySelector('header').offsetHeight;
var tabs = document.querySelectorAll('nav a');

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function(event) {
    event.preventDefault();
    
    var targetId = this.getAttribute('href');
    var targetSection = document.querySelector(targetId);
    var targetOffsetTop = targetSection.offsetTop;
    var scrollTo = targetOffsetTop - headerHeight;
    
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  });
}

var navButton = document.querySelector('header button');
var header = document.querySelector('header');

navButton.addEventListener('click', function() {
  header.classList.toggle('show-nav');
});

// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the user input values
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  // Validate the user input
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Send the user input to a server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'submit.php'); // Change the URL to the server endpoint
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Thank you for your message!');
    } else {
      alert('An error occurred. Please try again later.');
    }
  };
  xhr.send(JSON.stringify({ name: name, email: email, message: message }));
});