const newImg = document.getElementById("img"),
  newPrice = document.getElementById("price"),
  newDescription = document.getElementById("description"),
  form = document.querySelector("form");
let newCity;

form.addEventListener("submit", addNewProperty);

document.getElementById("city").addEventListener("change", getCityName);

function getCityName() {
  newCity = document.getElementById("city").value;
}

function addNewProperty(e) {
  e.preventDefault();
  const data = {
    city: newCity,
    description: newDescription.value,
    image: newImg.value,
    price: newPrice.value,
  };
  console.log(data);
  fetch("https://radial-reinvented-shoe.glitch.me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("status").textContent = "Succesfully added!";
      document.getElementById("status").style.display = "block";
      document.getElementById("status").style.color = "green";
    })
    .catch((err) => {
      document.getElementById("status").textContent = "Error, please try again";
      document.getElementById("status").style.display = "block";
      document.getElementById("status").style.color = "red";
    });
}

getCityName();
