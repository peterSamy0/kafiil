// dropdown menu 
function myFunction() {
    var resMenu = document.getElementById("dropdown-ul");
    if (resMenu.style.display === "block") {
      resMenu.style.display = "none";
    } else {
      resMenu.style.display = "block";
    }
  }
// 
let currentSlide = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("carousel-slide");

  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(currentSlide);
});


// select all 
let selectAllChecked = false;
let serviceArray = [];
// add service one
function toggleServiceOne() {
    const addSerOne = document.getElementById('add-srv-one');
    const rmvSerOne = document.getElementById('rmv-srv-one');
    addSerOne.classList.toggle('d-none');
    rmvSerOne.classList.toggle('d-none');
    if(addSerOne.classList.contains('d-none')){
        increaseQuantity();
    }else{
        decreaseQuantity()
    }
}
// add service two
function toggleServiceTwo() {
    const addSerOne = document.getElementById('add-srv-two');
    const rmvSerOne = document.getElementById('rmv-srv-two');
    addSerOne.classList.toggle('d-none');
    rmvSerOne.classList.toggle('d-none');
    if(addSerOne.classList.contains('d-none')){
        increaseQuantity();
    }else{
        decreaseQuantity()
    }
    
}
// add service three
function toggleServiceThree() {
    const addSerOne = document.getElementById('add-srv-three');
    const rmvSerOne = document.getElementById('rmv-srv-three');
    addSerOne.classList.toggle('d-none');
    rmvSerOne.classList.toggle('d-none');
    if(addSerOne.classList.contains('d-none')){
        increaseQuantity();
    }else{
        decreaseQuantity()
    }
}



function toggleSelectAll(element) {
  const allIcons = document.querySelectorAll('.fa-regular.fa-circle');
  const icon = element;
  selectAllChecked = !selectAllChecked;
  icon.classList.toggle('green-txt')
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

// for counter for Purchase service
let quantity = 1;
const pricePerService = 100;
// update the total price
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = (quantity * pricePerService) + "$";
}
// increase the counter
function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
    updateTotalPrice();
}
// decrease the counter
function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
        updateTotalPrice();
    }
}
// print the result in alert
function purchaseService() {
    alert(`You purchased ${quantity} services for a total of ${quantity * pricePerService}$`);
}



// add suggested service to favorite 
function addFavorite(element) {
    let heartColor = element.getAttribute('fill');
    if (heartColor === 'none') {
        element.setAttribute('fill', 'red');
    } else {
        element.setAttribute('fill', 'none');
    }
}

// toggle profile list
function openList(event) {
  event.stopPropagation();
  let profile_icon = document.getElementById('prfl-lst');
  profile_icon.classList.toggle('d-none');
}

document.body.addEventListener('click', function (event) {
  let profile_icon = document.getElementById('prfl-lst');
  let profile_button = document.getElementById('prfl-icn');
  if (!profile_button.contains(event.target) && event.target.id !== 'prfl-lst') {
      profile_icon.classList.add('d-none');
  }
});
