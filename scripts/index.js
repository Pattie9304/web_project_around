let buttonEdit = document.querySelector(".feed__info_edit_button");
let popup = document.querySelector(".popup");
let buttonClose = document.querySelector(".popup__button-cancel");
let formElement = document.querySelector(".popup__container");
let profileName = document.querySelector(".feed__content-name");
let profileAbout = document.querySelector(".feed__content-profession");
let nameInput = document.querySelector(".popup__name");
let aboutInput = document.querySelector(".popup__about");


function openPopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  popup.style = "display:block";
}

function closePopup() {
  popup.style = "display:none";
}

buttonEdit.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);

function saveChange(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
  openPopup();
  closePopup();
}

formElement.addEventListener("submit", saveChange);