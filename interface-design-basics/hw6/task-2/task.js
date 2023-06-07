const taskInput = document.querySelector('#task__input')
const tasksList = document.querySelector('#tasks__list')
const buttonTaskAdd = document.querySelector('#tasks__add')


buttonTaskAdd.addEventListener('click', e => {
  if (taskInput.value) {
    addTask()
    taskInput.value = ''
    e.preventDefault()
  }
})

tasksList.addEventListener('click', e => {
  if (e.target.className === 'task__remove') {
    e.target.closest('div').remove()
  }
})

window.addEventListener('load', e => {
  if (localStorage.getItem('tasks')) {
    tasksList.innerHTML += localStorage.getItem('tasks')
    localStorage.clear()
  }
})

window.addEventListener('unload', e => {
  localStorage.setItem('tasks', tasksList.innerHTML)
})

function addTask() {
  tasksList.innerHTML += `
    <div class="task">
      <div class="task__title">${taskInput.value}</div>
      <a href="#" class="task__remove">&times;</a>
    </div>  
  `
  let taskRemoveButton = document.querySelector('.task__remove')
}