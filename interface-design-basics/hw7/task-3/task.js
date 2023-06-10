const sendBtn = document.querySelector('#send')
const progressBar = document.querySelector('#progress')


sendBtn.addEventListener('click', e => {
  e.preventDefault()
  
  let formData = new FormData(document.querySelector('#form'))
  const xhr = new XMLHttpRequest()
  
  xhr.upload.onprogress = (e) => {
    const onePercent = e.total / 100
    progressBar.value = e.loaded / onePercent / 100
  }

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
  xhr.send(formData)

})