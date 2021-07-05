const btnSubmit = $('#btnSubmit');
const firstName = $('#firstName');
const lastName = $('#lastName');
const userName = $('#userName');
const email = $('#email');
const password = $('#password');
const rePassword = $('#passwordConfirm');

// Field chứa ít nhất 2 kí tự không bao gồm số
// Tên tiếng việt đều được
const nameRegex = /^[a-zA-Z]{2,}$/;

function nameRe(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}
// Username chứa ít nhất 5 kí tự bao gồm cả chữ và số, dấu gạch dưới
const usernameRegex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
// Email phải chứa kí tự @ và đuôi .dot phải là .com
const emailRegex = /([a-zA-Z0-9_.-]+)@([a-zA-Z]+)([\.])com/;
// Password chứa ít nhất 1 chữ Hoa
// Password chứa ít nhất 1 chữ Thường
// Password chứa ít nhất 8 kí tự bao gồm cả số
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

start()

function start() {
  btnSubmit.on("click", submitForm);
  onInput(firstName, nameValidation);
  onInput(lastName, nameValidation);
  onInput(userName, usernameValidation);
  onInput(email, emailValidation);
  onInput(password, passwordValidation);
  onInput(rePassword, rePasswordValidation);
}

//validate input
function nameValidation(name) {
  let valid = $(`<div class="form__valid"></div>`),
    invalid = $(`<div class="form__invalid"></div>`);
  if (name.val() && name.val().trim().length > 0) {
    if (nameRegex.test(nameRe(name.val().trim()))) {
      valid.html("Valid Name");
      name.next().html(valid);
    } else {
      invalid.html("Name contains at least 2 letters.");
      name.next().html(invalid);
    }
  } else {
    invalid.html("Name is required");
    name.next().html(invalid);
  }
}

function usernameValidation(username) {
  let valid = $(`<div class="form__valid"></div>`),
    invalid = $(`<div class="form__invalid"></div>`);
  if (username.val() && username.val().trim().length > 0) {
    if (usernameRegex.test(nameRe(username.val().trim()))) {
      valid.html("Valid Usernam");
      username.next().html(valid);
    } else {
      invalid.html("Username contains at least 8 letters.");
      username.next().html(invalid);
    }
  } else {
    invalid.html("Username is required");
    username.next().html(invalid);
  }
}


function emailValidation(email) {
  let valid = $(`<div class="form__valid"></div>`),
    invalid = $(`<div class="form__invalid"></div>`);
  if (email.val()) {
    email.next().html = '';
    if (emailRegex.test(email.val().trim())) {
      valid.html("Valid email");
      email.next().html(valid);
    } else {
      invalid.html("Valid E-Mail is required");
      email.next().html(invalid);
    }
  } else {
    invalid.html("Valid E-Mail is required");
    email.next().html(invalid);
  }
}

function passwordValidation(password) {
  let valid = $(`<div class="form__valid"></div>`),
    invalid = $(`<div class="form__invalid"></div>`);
  if (password.val()) {
    password.next().html = '';
    if (passwordRegex.test(password.val().trim())) {
      valid.html("Valid password");
      password.next().html(valid);
    } else {
      invalid.html("Password must be at least 8 characters");
      password.next().html(invalid);
    }
  } else {
    invalid.html("Password field is required");
    password.next().html(invalid);
  }
}

function rePasswordValidation(rePassword) {
  let valid = $(`<div class="form__valid"></div>`),
    invalid = $(`<div class="form__invalid"></div>`);
  if (password.val() && passwordRegex.test(password.val().trim())) {
    if (rePassword.val() && rePassword.val().trim() == password.val().trim()) {
      valid.html("The re-entered password is valid");
      rePassword.next().html(valid);
    } else {
      invalid.html("Password Confirmation field is required");
      rePassword.next().html(invalid);
    }
  }
}

function onInput(input, condition) {
  let timeout = null;
  input.on("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      condition(input);
    }, 100);
  })
}

function submitForm() {
  nameValidation(firstName);
  nameValidation(lastName);
  emailValidation(email);
  passwordValidation(password);
  rePasswordValidation(rePassword);
  usernameValidation(userName);
}