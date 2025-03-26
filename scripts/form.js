// Product array data
const products = [
	{
		id: 'fc-1888',
		name: 'flux capacitor',
		averagerating: 4.5
	},
	{
		id: 'fc-2050',
		name: 'power laces',
		averagerating: 4.7
	},
	{
		id: 'fs-1987',
		name: 'time circuits',
		averagerating: 3.5
	},
	{
		id: 'ac-2000',
		name: 'low voltage reactor',
		averagerating: 3.9
	},
	{
		id: 'jj-1969',
		name: 'warp equalizer',
		averagerating: 5.0
	}
]

// DOM Elements
const productSelect = document.getElementById('product')
const currentYearSpan = document.getElementById('current-year')
const lastModifiedSpan = document.getElementById('last-modified')
const ratingDiv = document.querySelector('.rating')
const ratingInputs = document.querySelectorAll('input[name="rating"]')
const reviewCountSpan = document.getElementById('review-count')

// Function to populate product options
function populateProductOptions() {
	// Check if product select element exists
	if (!productSelect) return

	// Loop through products array and create option elements
	products.forEach((product) => {
		// Create new option element
		const option = document.createElement('option')

		// Set option value to product name and display text to product name
		option.value = product.name
		option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1)

		// Append option to select element
		productSelect.appendChild(option)
	})
}

// Function to increment and display review counter
function updateReviewCounter() {
	// If we're on the review page and the count span exists
	if (window.location.pathname.includes('review.html') && reviewCountSpan) {
		// Get current count from localStorage, default to 0 if not set
		let count = parseInt(localStorage.getItem('reviewCount') || '0')

		// Increment the count
		count++

		// Save the updated count back to localStorage
		localStorage.setItem('reviewCount', count.toString())

		// Update the display
		reviewCountSpan.textContent = count
	}
}

// Function to display current year in footer
function setCurrentYear() {
	if (currentYearSpan) {
		currentYearSpan.textContent = new Date().getFullYear()
	}
}

// Function to display last modified date in footer
function setLastModified() {
	if (lastModifiedSpan) {
		lastModifiedSpan.textContent = document.lastModified
	}
}

// Function to handle rating validation visuals
function setupRatingValidation() {
	if (!ratingDiv) return

	// Listen for changes to any radio button in the rating group
	ratingInputs.forEach((input) => {
		input.addEventListener('change', () => {
			// When any rating is selected, add the valid class
			ratingDiv.classList.add('valid')
		})
	})

	// Also handle form submission to reset the validation if needed
	const form = document.querySelector('.review-form')
	if (form) {
		form.addEventListener('submit', (event) => {
			// Check if a rating is selected
			const isRatingSelected = Array.from(ratingInputs).some((input) => input.checked)

			if (!isRatingSelected) {
				// If no rating is selected, prevent form submission
				event.preventDefault()
				// No need to add any class as the default styling is for invalid state
				ratingDiv.classList.remove('valid')
			}
		})
	}
}

// Initialize the page
function init() {
	populateProductOptions()
	setupRatingValidation()
	updateReviewCounter()
	setCurrentYear()
	setLastModified()
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init)
