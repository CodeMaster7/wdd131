console.log('JavaScript is running!')

const input = document.querySelector('#favchap')
const addButton = document.querySelector('button')
const list = document.querySelector('#list')

// Define the getChapterList function to get localStorage item
function getChapterList() {
	const storedData = localStorage.getItem('myFavBOMList')
	console.log('Data from localStorage:', storedData)
	return JSON.parse(storedData)
}

// Define the setChapterList function to set localStorage item
function setChapterList() {
	console.log('Saving to localStorage:', chaptersArray)
	localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
	const savedData = localStorage.getItem('myFavBOMList')
	console.log('Verification - saved data:', savedData)
}

// Declare chaptersArray with OR condition for empty array
let chaptersArray = getChapterList() || []
console.log('Initial chaptersArray:', chaptersArray)

// Define the deleteChapter function
function deleteChapter(chapter) {
	// Slice off the last character (❌)
	chapter = chapter.slice(0, chapter.length - 1)
	console.log('Deleting chapter:', chapter)
	// Filter out the chapter to be removed
	chaptersArray = chaptersArray.filter((item) => item !== chapter)
	console.log('Array after deletion:', chaptersArray)
	// Update localStorage
	setChapterList()
}

// Define the displayList function
function displayList(item) {
	// Create list element
	const li = document.createElement('li')
	// Set list item text to the chapter
	li.textContent = item

	// Create delete button
	const deleteButton = document.createElement('button')
	deleteButton.textContent = '❌'
	deleteButton.setAttribute('aria-label', 'Delete chapter')

	// Add delete button to list item
	li.appendChild(deleteButton)
	// Add list item to the list
	list.appendChild(li)

	// Add event listener to delete button
	deleteButton.addEventListener('click', () => {
		list.removeChild(li)
		deleteChapter(li.textContent)
		input.focus()
	})
}

// Loop through chaptersArray and display each chapter
chaptersArray.forEach((chapter) => {
	displayList(chapter)
})

// Change button click event listener
addButton.addEventListener('click', () => {
	// Check if input is not empty
	if (input.value !== '') {
		// Call displayList with input.value
		displayList(input.value)
		// Push input.value into chaptersArray
		chaptersArray.push(input.value)
		// Update localStorage with new array
		setChapterList()
		// Clear input field
		input.value = ''
		// Set focus back to input
		input.focus()
	}
})
