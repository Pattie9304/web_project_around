import { Card, FormCard } from "./card.js";
import { FormValidator } from "./formValidator.js";

const gallery = document.querySelector(".main__gallery");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formElements = document.querySelectorAll(validationConfig.formSelector);
const formValidators = [];
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "./images/valle-yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "./images/lago-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "./images/montañas-calvas.jpg",
  },
  {
    name: "Latemar",
    link: "./images/latemar.jpg",
  },
  {
    name: "Vanois National Park",
    link: "./images/vanois-national-park.jpg",
  },
  {
    name: "Lago di Braies",
    link: "./images/lago-braies.jpg",
  },
];

initialCards.forEach((item) => {
  const card = new Card(item, "#main__template");
  const cardElement = card.getCreateCard();

  gallery.append(cardElement);
});

const cardsAdd = (titleValue, linkValue, cardSelector) => {
  const formCard = new FormCard(cardSelector);
  formCard.handleCreateCard(titleValue, linkValue);
  const userCard = formCard.getCreateCard();
  gallery.prepend(userCard);
};

formElements.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);
  formValidator.enableValidation();
  formValidators.push(formValidator);
});

export { cardsAdd as add, validationConfig as config, formValidators };

