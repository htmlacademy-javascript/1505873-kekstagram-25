import {body} from './full-screen-picture.js';

const form = document.querySelector('.img-upload__form');
const uploadFileField = document.querySelector('#upload-file');
const pictureEditingForm = document.querySelector('.img-upload__overlay');

const uploadButtonCancel = document.querySelector('#upload-cancel');
//const submitButton = document.querySelector('#upload-submit');

const userHashTag = document.querySelector('.text__hashtags');
const regular = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const userFileDescription = document.querySelector('.text__description');

userHashTag.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

userFileDescription.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

uploadFileField.addEventListener('change', () => {
  pictureEditingForm.classList.remove('hidden');
  body.classList.add('modal-open');
});

uploadButtonCancel.addEventListener('click', () => {
  pictureEditingForm.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    pictureEditingForm.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

let errorMassage = '';
const validateHashTags = () => {
  const userHashTagArray = userHashTag.value.split(' ').filter((hashTagElement) => hashTagElement !== '');
  if (userHashTagArray.length === 0) {
    return true;
  }
  if (userHashTagArray.length > 5) {
    errorMassage = 'Не более 5 хеш-тегов';
    return false;
  }
  for (let i = 0; i < userHashTagArray.length; i++) {
    if (!regular.test(userHashTagArray[i])) {
      errorMassage = 'Неверный формат хеш-тега!';
      return false;
    }
  }
  for (let i = 0; i < userHashTagArray.length; i++) {
    for (let j = i + 1;  j < userHashTagArray.length; j++) {
      if (userHashTagArray[i].toUpperCase() === userHashTagArray[j].toUpperCase()) {
        errorMassage = 'Нельзя повторять хеш-теги';
        return false;
      }
    }
  }
  return true;
};

const getErrorText = () => {
  // eslint-disable-next-line no-console
  console.log(errorMassage);
  return errorMassage;
};

const pristine = new Pristine(form, {classTo: 'img-upload__text', errorTextParent: 'img-upload__text',});
pristine.addValidator(userHashTag, validateHashTags, getErrorText);
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});
