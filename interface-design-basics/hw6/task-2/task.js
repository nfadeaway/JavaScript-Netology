const taskInput = document.querySelector('#task__input')
const tasksList = document.querySelector('#tasks__list')
const buttonTaskAdd = document.querySelector('#tasks__add')


buttonTaskAdd.addEventListener('click', e => {
  if (taskInput.value) {
    addTask()
    taskInput.value = ''
  }
  e.preventDefault()
})

tasksList.addEventListener('click', e => {
  if (e.target.className === 'task__remove') {
    e.target.closest('div').remove()
  }
})

window.addEventListener('load', e => {
  if (localStorage.getItem('tasks')) {
    const tasks = localStorage.getItem('tasks')
    for (const task of tasks.split(' ,')) {
      tasksList.innerHTML += `
      <div class="task">
        <div class="task__title">${task.trim()}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>  
    `
    }
    localStorage.removeItem(tasks)
  }
})

window.addEventListener('unload', e => {
  let tasks = []
  if (tasksList.querySelectorAll('.task__title')) {
    for (const task of tasksList.querySelectorAll('.task__title')) {
      tasks.push(task.textContent.trim() + ' ')
    }
  }

  localStorage.setItem('tasks', tasks)
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