const tabsTitles = document.querySelectorAll('.tab')
const tabsContent = document.querySelectorAll('.tab__content')
let currentActiveTab = document.querySelector('.tab_active')

function changeTabTitle() {
  if (this == currentActiveTab) {
    return
  } else {
    this.className = 'tab tab_active'
    currentActiveTab.className = 'tab'
    changeTabContent(currentActiveTab, this)
    currentActiveTab = this
  }
}

function changeTabContent(oldContent, newContent) {
  tabsContent[Array.from(tabsTitles).indexOf(newContent)].className = 'tab__content tab__content_active'
  tabsContent[Array.from(tabsTitles).indexOf(oldContent)].className = 'tab__content'
}

for (let tabsTitle of tabsTitles) {
  tabsTitle.addEventListener('click', changeTabTitle)
}