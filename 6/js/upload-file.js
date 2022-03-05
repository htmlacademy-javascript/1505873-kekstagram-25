// eslint-disable-next-line eol-last
//Загрузка нового изображения на сайт и заполнение информации о нём

const maxLenght = 140;
const countComment = function (userComment) {
  if (userComment.length <= maxLenght) {
    return true;
  } else {
    Error('Максимальное количество символов комментария не более 140');
    return false;
  }
};
countComment('Комментарий посетителя сайта');
