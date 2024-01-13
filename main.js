// Dropdown menu
function myFunction() {
  // Get the dropdown menu element
  var resMenu = document.getElementById("dropdown-ul");

  // Toggle the display style based on its current state
  if (resMenu.style.display === "block") {
      resMenu.style.display = "none";
  } else {
      resMenu.style.display = "block";
  }
}

// Carousel
let currentSlide = 0;

// Function to display the specified slide
function showSlide(n) {
  const slides = document.getElementsByClassName("carousel-slide");

  // Set the current slide index within the bounds of the slide array
  if (n >= slides.length) {
      currentSlide = 0;
  } else if (n < 0) {
      currentSlide = slides.length - 1;
  } else {
      currentSlide = n;
  }

  // Hide all slides and display the current one
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "block";
}

// Functions to navigate to the next and previous slides
function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Show the first slide when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentSlide);
});

// Service Selection
let selectAllChecked = false;
let serviceArray = [];

// Function to toggle service one
function toggleServiceOne() {
  // Toggle visibility of add and remove buttons
  const addSerOne = document.getElementById('add-srv-one');
  const rmvSerOne = document.getElementById('rmv-srv-one');
  addSerOne.classList.toggle('d-none');
  rmvSerOne.classList.toggle('d-none');

  // Adjust the quantity based on button state
  addJustQuantity(addSerOne)
}
// add service two
function toggleServiceTwo() {
    const addSerTwo = document.getElementById('add-srv-two');
    const rmvSerOne = document.getElementById('rmv-srv-two');
    addSerTwo.classList.toggle('d-none');
    rmvSerOne.classList.toggle('d-none');

    // Adjust the quantity based on button state
    addJustQuantity(addSerTwo)
    
}
// add service three
function toggleServiceThree() {
    const addSerThree = document.getElementById('add-srv-three');
    const rmvSerOne = document.getElementById('rmv-srv-three');
    addSerThree.classList.toggle('d-none');
    rmvSerOne.classList.toggle('d-none');

    // Adjust the quantity based on button state
    addJustQuantity(addSerThree)
}
// function to addjust the quantity in the purchase
function addJustQuantity(val){
  if(val.classList.contains('d-none')){
    increaseQuantity();
  }else{
      decreaseQuantity()
  }
}
// Similar functions for service two and three

// Function to toggle the selection of all services
function toggleSelectAll(element) {
  const allIcons = document.querySelectorAll('.fa-regular.fa-circle');
  const icon = element;
  selectAllChecked = !selectAllChecked;
  icon.classList.toggle('green-txt')

  // Toggle visibility of icons based on the selection state
  allIcons.forEach(icon => {
      if (selectAllChecked) {
          icon.classList.add('d-none');
          icon.nextElementSibling.classList.remove('d-none');
          quantity = 3;
          document.getElementById('quantity').textContent = quantity
          updateTotalPrice()
      } else {
          icon.classList.remove('d-none');
          icon.nextElementSibling.classList.add('d-none');
          quantity = 0;
          document.getElementById('quantity').textContent = quantity
          updateTotalPrice()
      }
  });
}

// Counter and Total Price
let quantity = 1;
const pricePerService = 100;

// Function to update the total price based on the quantity
function updateTotalPrice() {
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = (quantity * pricePerService) + "$";
}

// Functions to increase and decrease the quantity
function increaseQuantity() {
  quantity++;
  document.getElementById('quantity').textContent = quantity;
  updateTotalPrice();
}

function decreaseQuantity() {
  if (quantity > 1) {
      quantity--;
      document.getElementById('quantity').textContent = quantity;
      updateTotalPrice();
  }
}

// Function to display a purchase alert
function purchaseService() {
  alert(`You purchased ${quantity} services for a total of ${quantity * pricePerService}$`);
}

// Favorite Service
function addFavorite(element) {
  // Toggle the fill color of the heart icon
  let heartColor = element.getAttribute('fill');
  if (heartColor === 'none') {
      element.setAttribute('fill', 'red');
  } else {
      element.setAttribute('fill', 'none');
  }
}

// Toggle profile list visibility
function openList(event) {
  event.stopPropagation();
  let profile_icon = document.getElementById('prfl-lst');
  profile_icon.classList.toggle('d-none');
}

// Hide profile list when clicking outside
document.body.addEventListener('click', function (event) {
  let profile_icon = document.getElementById('prfl-lst');
  let profile_button = document.getElementById('prfl-icn');
  if (!profile_button.contains(event.target) && event.target.id !== 'prfl-lst') {
      profile_icon.classList.add('d-none');
  }
});


// dark mode function
const nightModeToggle = document.getElementById('nightModeToggle');
const body = document.body;
const containers = document.querySelectorAll('.dark-mode');
const subContainers = document.querySelectorAll('.sub-div-dark');
const text = document.querySelectorAll('.txt');
const darkModeElements = document.querySelectorAll('.dark-mode-info p, .dark-mode-info i, .dark-mode-info div');
const navDark = document.querySelectorAll('nav i, nav p');

nightModeToggle.addEventListener('click', function () {
  body.classList.toggle('night-mode');
  
  containers.forEach(container => {
    container.classList.toggle('div-dark-mode')
  });

  subContainers.forEach(item => {
    item.classList.toggle('subDiv-dark-mode')
  });

  text.forEach(item => {
    item.classList.toggle('wht-txt')
  });

  darkModeElements.forEach(element => {
    element.classList.toggle('wht-txt');
  });

  navDark.forEach( element => {
    element.classList.toggle('icn-wht');
  })
});