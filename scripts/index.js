const buttonEdit = document.querySelector(".main__button_edit");
const buttonAdd = document.querySelector(".main__button_add");
const buttonClose = document.querySelector(".popup__button_close");
const popUpButtonSave = document.querySelector(".popup__button_save");
const popUpButtonAdd = document.querySelector(".popup__button_add");

const popup = document.querySelector(".popup");
const formElement = document.querySelector(".popup__container");
const popUpImg = document.querySelector(".popup__images");
let popUpNameInput = document.querySelector(".popup__input_name");
let popUpAboutInput = document.querySelector(".popup__input_about");
const popUpTitle = document.querySelector(".popup__subtitle");

const gallery = document.querySelector(".main__gallery");
let profileName = document.querySelector(".main__paragraph_name");
let profileAbout = document.querySelector(".main__paragraph_about");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "./images/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "./images/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "./images/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "./images/latemar.jpg",
  },
  {
    name: "Vanois National Park",
    link: "./images/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "./images/lago.jpg",
  },
];

function startEditAdd(e) {
  const buttonClass = e.target.classList;

  if (buttonClass.contains("main__button_edit"))
    {
      popUpNameInput.value = profileName.textContent;
      popUpAboutInput.value = profileAbout.textContent;
      popUpTitle.textContent = "Editar perfil";
      popUpNameInput.placeholder = "Nombre";
      popUpAboutInput.placeholder = "Acerca de mi";
      popup.classList.toggle("popup_opened");
      popUpButtonSave.style.display = "block";
      popUpButtonAdd.style.display = "none";
      popUpImg.style.display = "none";
    }
  else if (buttonClass.contains("main__button_add"))
    {
      popUpNameInput.value = "";
      popUpAboutInput.value = "";
      popUpTitle.textContent = "Nuevo lugar";
      popUpNameInput.placeholder = "Título";
      popUpAboutInput.placeholder = "Enlace a la imagen";
      popup.classList.toggle("popup_opened");
      popUpButtonSave.style.display = "none";
      popUpButtonAdd.style.display = "block";
      popUpImg.style.display = "none";
      popUpNameInput.addEventListener("input", validarCampos);
      popUpAboutInput.addEventListener("input", validarCampos);
      validarCampos();
  }
}

function close() {
  popup.classList.toggle("popup_opened");
  popUpImg.removeAttribute("style");
  formElement.removeAttribute("style");
}

buttonEdit.addEventListener("click", startEditAdd);
buttonClose.addEventListener("click", close);
buttonAdd.addEventListener("click", startEditAdd);

function saveChangeEdit(e) {
  e.preventDefault();
  profileName.textContent = popUpNameInput.value;
  profileAbout.textContent = popUpAboutInput.value;
  close();
}

formElement.addEventListener("submit", saveChangeEdit);

function cardsInitials() {
  initialCards.forEach((item) => {
    const cardTemplate = document.querySelector("#main__template").content;
    const cardElement = cardTemplate.querySelector(".main__gallery-card").cloneNode(true);
    cardElement.querySelector(".main__gallery-image").src = item.link;
    cardElement.querySelector(".main__gallery-image").alt = item.name;
    cardElement.querySelector(".main__gallery-paragraph").textContent = item.name;

    cardElement.querySelector(".main__button_like").addEventListener("click", function (e) {
      e.target.classList.toggle("main__button_like_active"); });
    
    cardElement.querySelector(".main__button_trash").addEventListener("click", function () { cardElement.remove(); });
    cardElement.querySelector(".main__gallery-image").addEventListener("click", function () { imagePopup(item.name, item.link); });
    gallery.append(cardElement);
  });
}
cardsInitials();

function cardsAdd(titleValue, linkValue) {
  const cardTemplate = document.querySelector("#main__template").content;
  const cardElement = cardTemplate.querySelector(".main__gallery-card").cloneNode(true);
  
  cardElement.querySelector(".main__gallery-image").src = linkValue;
  cardElement.querySelector(".main__gallery-image").alt = titleValue;
  cardElement.querySelector(".main__gallery-paragraph").textContent = titleValue;
  cardElement.querySelector(".main__button_like").addEventListener("click", function (e) { e.target.classList.toggle("main__button_like_active"); });
  cardElement.querySelector(".main__button_trash").addEventListener("click", function () { cardElement.remove(); });
  cardElement.querySelector(".main__gallery-image").addEventListener("click", function () { imagePopup(titleValue, linkValue); });
  gallery.prepend(cardElement);
}

function validarCampos() {
  popUpButtonAdd.disabled = !(popUpNameInput.value && popUpAboutInput.value);
}

popUpButtonAdd.addEventListener("click", function () { cardsAdd(popUpNameInput.value, popUpAboutInput.value); close(); });

function imagePopup(name, title) {
  const popimg = popUpImg.querySelector(".popup__image");
  const poptxt = popUpImg.querySelector(".popup__paragraph");
  popimg.src = title;
  popimg.alt = name;
  poptxt.textContent = name;
  popup.classList.toggle("popup_opened");
  formElement.style.display = "none";
}



/*

function openPopup() {
  popUpNameInput.value = profileName.textContent;
  popUpAboutInput.value = profileAbout.textContent;
  popup.style = "display:flex";
}

function closePopup() {
  popup.style = "display:none";
}

buttonEdit.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);


formElement.addEventListener("submit", saveChange);*/