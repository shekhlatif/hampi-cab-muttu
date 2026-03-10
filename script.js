function toggleMenu(){

let menu = document.getElementById("navMenu");

menu.classList.toggle("active");

}
function openImage(src){

document.getElementById("imagePopup").style.display="flex";
document.getElementById("popupImg").src=src;

}

function closeImage(){

document.getElementById("imagePopup").style.display="none";

}

document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let pickup = document.getElementById("pickup").value;
let drop = document.getElementById("drop").value;
let date = document.getElementById("date").value;
let vehicle = document.getElementById("vehicle").value;
let message = document.getElementById("message").value;

let whatsappMessage =
`Taxi Booking Request

Name: ${name}
Phone: ${phone}

Pickup: ${pickup}
Drop: ${drop}

Date: ${date}
Vehicle: ${vehicle}

Message: ${message}`;

let whatsappURL =
"https://wa.me/919110409388?text=" + encodeURIComponent(whatsappMessage);

window.open(whatsappURL, "_blank");

});

function toggleMenu(){
const menu = document.getElementById("navMenu");
menu.classList.toggle("active");
}

// close menu when link clicked
document.querySelectorAll("#navMenu a").forEach(link => {
link.addEventListener("click", () => {
document.getElementById("navMenu").classList.remove("active");
});
});