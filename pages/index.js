let profileInfoName = document.querySelector('.profile__info_name');
let profileInfoVocation = document.querySelector('.profile__info_vocation');

let popupForm = document.querySelector('.popup');
let popupItemName = document.querySelector('.popup__item_name');
let popupItemVocation = document.querySelector('.popup__item_vocation');
let editButton = document.querySelector('.profile__info_edit-button');
let closeButton = document.querySelector('.popup__button-close');
let saveButton = document.querySelector('.popup__button-save');

function popup() {
  popupForm.classList.toggle('popup_opened');
  popupItemName.value = profileInfoName.innerText;
  popupItemVocation.value = profileInfoVocation.innerText;
}

function save(evt) {
  evt.preventDefault();
  popupForm.classList.toggle('popup_opened');
  profileInfoName.innerText = popupItemName.value;
  profileInfoVocation.innerText = popupItemVocation.value;
}

editButton.addEventListener('click', popup);
closeButton.addEventListener('click', popup);
saveButton.addEventListener('click', save);
