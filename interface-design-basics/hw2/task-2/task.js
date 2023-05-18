const menuSubs = document.querySelectorAll('.menu__item')
const links = document.querySelectorAll('a')

for (let menuSub of menuSubs) {
  menuSub.onclick = function() {
    const currentMenuSub = menuSub.querySelector('.menu_sub')
    const currentMenu = menuSub.closest('.menu')
    if (currentMenuSub.className.includes('menu_active')) {
      currentMenuSub.className = 'menu menu_sub'
    } else {
      currentMenuSub.className = 'menu menu_sub menu_active'
      const activeMenuSubs = currentMenu.querySelectorAll('.menu_sub')
      for (let activeMenuSub of activeMenuSubs) {
        if (activeMenuSub.className.includes('menu_active')) {
          if (activeMenuSub !== currentMenuSub) {
            activeMenuSub.className = 'menu menu_sub'
          }
        }       
      }
    }
  }
}

for (let link of links) {
  link.onclick = function() {
    if (link.getAttribute('href') == '') {
      return false
    }
  }
}
