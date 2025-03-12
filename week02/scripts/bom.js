const input = document.querySelector('#favchap')
const addButton = document.querySelector('button')
const list = document.querySelector('#list')
const li = document.createElement('li')
const deleteButton = document.createElement('button')

// Add aria-label to the delete button for accessibility
deleteButton.setAttribute('aria-label', 'Delete chapter')
deleteButton.textContent = '❌'


addButton.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    li.textContent = input.value
    li.appendChild(deleteButton)
    list.appendChild(li)
    input.value = ''
    input.focus()
	}
})

deleteButton.addEventListener('click', () => {
  list.removeChild(li)
  input.focus()
  input.value = ''
})
