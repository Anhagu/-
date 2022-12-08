const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const regId = /^[0-9]{9}$/;
const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');
const localUserName = localStorage.getItem('userName');

const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.textContent = name;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};


const userIdElement = document.querySelector('#id');
const userEmailElement = document.querySelector('#email');
const localUserId = localStorage.getItem('userId');
const localUserEmail = localStorage.getItem('userEmail');


// 학번 변경
const setUserIdInnerHtml = (id) => {
  userIdElement.textContent = id;
};

if (localUserId) {
  setUserIdInnerHtml(localUserId);
}

userIdElement.onclick = () => {
  const userId = prompt('학번을 입력해주세요');
  if (userId == '') {
    alert('학번을 입력해주세요.');
    return false;
  } else {
    if (regId.exec(userId) === null) {
      alert('9자리 숫자로 입력해주세요.');
      return false;
    }
  }
  localStorage.setItem('userId', userId);
  setUserIdInnerHtml(userId);
};

// 이메일 변경
const setUserEmailInnerHtml = (email) => {
  userEmailElement.textContent = email;
};

if (localUserEmail) {
  setUserEmailInnerHtml(localUserEmail);
}

userEmailElement.onclick = () => {
  const userEmail = prompt('이메일을 입력해주세요');
  if (userEmail == '') {
    alert('이메일을 입력해주세요.');
    return false;
  } else {
    if (regEmail.exec(userEmail) === null) {
      alert('이메일 형식에 맞게 입력해주세요.');
      return false;
    }
  }
  localStorage.setItem('userEmail', userEmail);
  setUserEmailInnerHtml(userEmail);
};


