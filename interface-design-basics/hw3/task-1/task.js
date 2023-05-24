const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const drowdownItems = document.querySelectorAll('.dropdown__item')

function controlDropdown() {
  if (dropdownList.className.includes('dropdown__list_active')) {
    dropdownList.className = 'dropdown__list'
  } else {
    dropdownList.className = 'dropdown__list dropdown__list_active'
  }
}

function clickMenuItem(event) {
  dropdownValue.textContent = this.textContent.trim()
  dropdownList.className = 'dropdown__list'
  event.preventDefault()
}

dropdownValue.addEventListener('click', controlDropdown)

for (let drowdownItem of drowdownItems) {
  drowdownItem.addEventListener('click', clickMenuItem)
}