// const createNewNoteBtn = document.getElementById('create-new-note-btn')
// const input = document.getElementById('input')
// const form = document.getElementById('form')
// const list = document.getElementById('list')
// const deleteBtn = document.getElementById('delete-btn')
// const li = document.getElementById('li')

// createNewNoteBtn.addEventListener('click', (e) => {
//   e.preventDefault()
//   const newInput = document.createElement('input')
//   const newBtn = document.createElement('button')
//   const newLi = document.createElement('li')
//   newLi.id = li.id
//   newInput.id = input.id
//   newBtn.id = deleteBtn.id
//   newBtn.textContent = deleteBtn.textContent
//   newLi.appendChild(newInput)
//   newLi.appendChild(newBtn)
//   list.appendChild(newLi)
// })

// deleteBtn.addEventListener('click', (e) => {
//   e.preventDefault()
//   list.removeChild(newLi)
// })

const createNewNoteBtn = document.getElementById('create-new-note-btn')
const list = document.getElementById('list')

createNewNoteBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const newLi = document.createElement('li')
  list.appendChild(newLi)

  const newInput = document.createElement('input')
  newInput.style = 'background-color: white; border: 3px solid black; border-radius: 10px; text-align: center; min-width: 200px;'
  newInput.type = 'text'
  newInput.name = 'task'
  newInput.placeholder = 'Enter new task!'
  newLi.appendChild(newInput)

  const newBtn = document.createElement('button')
  newBtn.textContent = 'Del'
  newBtn.style = 'border-radius: 50px; background-color: pink; text-align: center; text-color: green; width: 40px; height: 40px; margin: 10px'
  newLi.appendChild(newBtn)

  newBtn.addEventListener('click', () => {
    list.removeChild(newLi)
  })
})