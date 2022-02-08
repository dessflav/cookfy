// api

async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  const user = data.results[0];
  displayUser(user);
}

function displayUser(user) {
  const first_name = document.getElementById("name");
  const full_name = document.getElementById("name_c");
  const full_name = document.getElementById("name_welcome");
  const full_name_window = document.getElementById("name_window");
  const email = document.getElementById("email");
  const phone = document.getElementById("fone");

  first_name.innerText = `${user.name.first}`;
  full_name.innerText = `${user.name.first}` + " " + `${user.name.last}`;
  full_name_window.innerText = `${user.name.first}` + " " + `${user.name.last}`;
  email.innerText = `${user.email}`;
  phone.innerText = `${user.phone}`;
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
  document.getElementById("sidebarID").style.display = "block";
}

function close_sidebar() {
  document.getElementById("sidebarID").style.display = "none";
}

