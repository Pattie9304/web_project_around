const buttonEdit = document.querySelector(".main__button_edit");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button-cancel");
const formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__name");
let aboutInput = document.querySelector(".popup__about");
let profileName = document.querySelector(".main__paragraph_name");
let profileAbout = document.querySelector(".main__paragraph_about");


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