const checkboxes = document.querySelectorAll('.interest__check')

for (let checkbox of checkboxes) {
  checkbox.addEventListener('change', setChildCheckboxes)
  checkbox.addEventListener('change', setParrentCheckboxes)
  
}

function setChildCheckboxes() {
  const childCheckboxes = this.closest('.interest').querySelectorAll('.interest__check')
  if (this.checked === true) {
    for (const checkbox of childCheckboxes) {
      checkbox.checked = true
      checkbox.indeterminate = false
    }
  } else {
    for (const checkbox of childCheckboxes) {
      checkbox.checked = false
    }
  }
}

function setParrentCheckboxes() {
  const curLevel = this.closest('.interests_active')
  if (curLevel) {
    const childCheckboxes = curLevel.querySelectorAll('.interest__check')
    let checkedCheckboxesCounter = 0
    for (const childCheckbox of childCheckboxes) {
      childCheckbox.checked === true ? checkedCheckboxesCounter++ : checkedCheckboxesCounter
    }
    let parrentCheckbox = curLevel.closest('.interest').querySelector('.interest__check')
    const parrentsCheckboxes = getAllParrentCheckboxes(parrentCheckbox)    
    if (checkedCheckboxesCounter === childCheckboxes.length) {
      setParrentCheckboxesStatus(parrentsCheckboxes, true)
    } else if (checkedCheckboxesCounter === 0) {
      setParrentCheckboxesStatus(parrentsCheckboxes, false)
    } else {
      setParrentCheckboxesStatus(parrentsCheckboxes, null)
    }   
  }
}

function setParrentCheckboxesStatus(arr, status) {
  for (const checkbox of arr) {
    if (status === null) {
      checkbox.checked = false
      checkbox.indeterminate = true
    } else {
      checkbox.checked = status
      checkbox.indeterminate = false
    }
  }
}

function getAllParrentCheckboxes(parrent) {
  let parrentsArr = []
  while (parrent) {
    parrentsArr.push(parrent)
    if (parrent.closest('.interests_active')) {
      if (parrent.closest('.interests_active').closest('.interest')) {
        parrent = parrent.closest('.interests_active').closest('.interest').querySelector('.interest__check')
      } else return parrentsArr
    } else return parrentsArr
  }
}