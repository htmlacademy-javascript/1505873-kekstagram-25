// Источник: http://kodesource.top/javascript/form/string-length.php
let countComment = function (userComment, maxlength) {
  maxlength = 140;
  let lenghtComment = userComment.length;
  if (lenghtComment <= maxlength) {
    return true;
  } else {
    return false;
  }
}
countComment('Комментарий посетителя сайта');
