import {newObjects} from './data.js';
import {showBigPicture} from './full-screen-picture.js';

const usersListPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const usersPictures = newObjects();
const pictureFragment = document.createDocumentFragment();

usersPictures.forEach(({url, likes, comments, description}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.addEventListener('click', () => {
    showBigPicture({url, likes, comments, description});
  });
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.appendChild(pictureElement);
});

usersListPictures.appendChild(pictureFragment);

export {usersListPictures};
