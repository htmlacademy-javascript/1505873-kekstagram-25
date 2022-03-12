import {getNewObjects} from './data.js';

const usersListPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const usersPictures = getNewObjects(25);
const pictureFragment = document.createDocumentFragment();

usersPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.appendChild(pictureElement);
});

usersListPictures.appendChild(pictureFragment);

export {usersListPictures};
