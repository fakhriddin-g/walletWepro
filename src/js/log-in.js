let form = document.forms.form
let logEmail = document.querySelector('.email')
let logPassword = document.querySelector('.password')
let logBtn = document.querySelector('.form-btn')
let signBtn = document.querySelector('.sign-up__btn')

let localData = JSON.parse(localStorage.getItem('title-object'))

logEmail.value = localData.email

logBtn.onclick = () => {
  if (logPassword.value === localData.password || logEmail.value === localData.email) {
    location.assign('home.html')
  } else {
    alert('error')
  }
}

form.onsubmit = (e) => {
  e.preventDefault()
}

signBtn.onclick = () => {
  location.assign('../../index.html')
}