const buttonEdit = document.querySelector(".feed__content-info_edit-button");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button-cancel");
const nameInput = document.querySelector(".popup__name");
const aboutInput = document.querySelector(".popup__about");
let formElement = document.querySelector(".popup__container");
let profileName = document.querySelector(".feed__content-info_name");
let profileAbout = document.querySelector(".feed__content-info_profession");


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