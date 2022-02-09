// api

async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  const user = data.results[0];
  displayUser(user);
}

function displayUser(user) {
  const first_name = document.getElementById("name");
  const full_name = document.getElementById("name_welcome");
  const full_name_window = document.getElementById("name_window");
  const email = document.getElementById("email");
  const phone = document.getElementById("fone");
 

  first_name.innerText = `${user.name.first}`;
  full_name.innerText = `${user.name.first}` + " " + `${user.name.last}`;
  full_name_window.innerText = `${user.name.first}` + " " + `${user.name.last}`;
  email.innerText = `${user.email}`;
  phone.innerText = `${user.phone}`;

  const avatar = user.gender;
  switch (avatar) {
    case "male" :
    document.getElementById("photo").src = ("./assets/Avatar_masculino.png")
    break;
    default :
    document.getElementById("photo").src = ("./assets/Avatar_feminino.png");
  } 

  switch (avatar) {
    case "male" :
    document.getElementById("sidebar_photo").src = ("./assets/Avatar_masculino@2x.png")
    break;
    default :
    document.getElementById("sidebar_photo").src = ("./assets/Avatar_feminino@2x.png");
  } 

  switch (gender) {
    case "female" :
    document.getElementById("welcome").innerHTML = "Bem vinda de volta";
    break;
    default :
    document.getElementById("welcome").innerHTML = "Bem vinda de volta"
  }
}


getRandomUser();

// lightbox
function open_lightbox() {
  document.getElementById("lighboxID").style.display = "block";
}
function close_lightbox() {
  document.getElementById("lighboxID").style.display = "none";
}


// sidebar
function open_sidebar() {
  document.getElementById("sidebarID").style.display="block";
  // document.getElementById("sidebarID").style.width = "450px";
  // document.getElementById("body").style.marginRight = "250px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function close_sidebar() {
  document.getElementById("sidebarID").style.display = "none";
}

// carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function moveToPrevSlide() {
  if ((slidePosition = 0)) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
