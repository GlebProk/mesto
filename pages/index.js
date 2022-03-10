let profileInfoName = document.querySelector('.profile__name');
let profileInfoVocation = document.querySelector('.profile__vocation');

let popupForm = document.querySelector('.popup');
let popupItemName = document.querySelector('.popup__item_field_name');
let popupItemVocation = document.querySelector('.popup__item_field_vocation');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__button-close');

function popupOpen() {
  popupForm.classList.add('popup_opened');
}

function popupClose() {
  popupForm.classList.remove('popup_opened');
}

function editProfile() {
  popupItemName.value = profileInfoName.innerText;
  popupItemVocation.value = profileInfoVocation.innerText;
  popupOpen();
}

function saveProfile(evt) {
  evt.preventDefault();
  profileInfoName.innerText = popupItemName.value;
  profileInfoVocation.innerText = popupItemVocation.value;
  popupClose();
}

editButton.addEventListener('click', editProfile);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', saveProfile);
