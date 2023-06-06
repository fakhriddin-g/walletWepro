let signBtn = document.querySelector('.form-btn')
let logBtn = document.querySelector('.log-in__btn')
let inputs = document.querySelectorAll('input')
let form = document.forms.form

// let localData = JSON.stringify(localStorage.getItem('title-object'))

form.onsubmit = (e) => {
  e.preventDefault()
}

inputs.forEach(input => {
  signBtn.onclick = () => {
    let data = {}

    let fm = new FormData(form)
    console.log(fm);

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