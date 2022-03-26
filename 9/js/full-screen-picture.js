import './rendering-miniatures.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('#picture-cancel');

const commentCount = document.querySelector('.social__comment-count');
const commentsloaderButton = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const showBigPicture = ({url, likes, comments, description}) => {
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsloaderButton.classList.add('hidden');
  body.classList.add('modal-open');

  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = url;

  const bigPictureLikes = bigPicture.querySelector('.likes-count');
  bigPictureLikes.textContent = likes;

  const bigPictureDescription = bigPicture.querySelector('.social__caption');
  bigPictureDescription.textContent = description;

  const commentsList = bigPicture.querySelector('.social__comments');
  commentsList.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = `
    <img
    class="social__picture"
    src="${comment.avatar}"
    alt="${comment.name}"
    width="35" height="35">
      <p class="social__text">${comment.message}</p>`;
    commentsList.appendChild(commentElement);
  });
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});


export {showBigPicture};
export {body};
