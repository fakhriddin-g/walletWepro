let signBtn = document.querySelector('.form-btn')
let logBtn = document.querySelector('.log-in__btn')
let inputs = document.querySelectorAll('input')
let form = document.forms.form

let patterns = {
  name: /^[a-z ,.'-]+$/i,
  surname: /^[a-z ,.'-]+$/i,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  password: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
}

form.onsubmit = (e) => {
  e.preventDefault()
}

inputs.forEach(input => {
  input.onkeyup = () => {
    if (patterns[input.name].test(input.value)) {
      input.style.border = '1px solid green'
    } else {
      input.style.border = '1px solid red'
    }
  }

  signBtn.onclick = () => {
    let data = {}

    let fm = new FormData(form)

    fm.forEach((key, value) => {
      data[value] = key
    })

    localStorage.setItem('title-object', JSON.stringify(data))


    if (input.value > 0) {
      location.assign('src/pages/log-in.html')
    } else{
      alert('Fill all the gaps')
    }
    
  }
})

logBtn.onclick = () => {
  location.assign('src/pages/log-in.html')
}