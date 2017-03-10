var cartOpen = document.querySelectorAll(".buy"), i;
var cartPopup = document.querySelector(".order-notification");
var cartClose = document.querySelector(".order-cancel");

for (i = 0; i < cartOpen.length; i++) {
  cartOpen[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    cartPopup.classList.add("order-notification-show");
  });
}

cartClose.addEventListener("click", function(event) {
   event.preventDefault();
   cartPopup.classList.remove("order-notification-show");
 });


window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (cartPopup.classList.contains("order-notification-show")) {
            cartPopup.classList.remove("order-notification-show");
        }
    }
});

