// DOM Elements
let contactForm, radioGroup, radioInputs

// Function to initialize DOM elements
function initializeDOMElements() {
	contactForm = document.getElementById('contact-form')
	radioGroup = document.querySelector('.form__group:has(input[name="inquiry"])')
	radioInputs = document.querySelectorAll('input[name="inquiry"]')
}

// Function to store form data in localStorage
function storeFormData(formData) {
	// Get existing submissions or initialize empty array
	const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')

	// Add new submission with timestamp
	const newSubmission = {
		...formData,
		timestamp: new Date().toISOString()
	}

	// Add to array and store back in localStorage
	existingSubmissions.push(newSubmission)
	localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions))
}

// Function to handle form submission
function handleFormSubmit(event) {
	if (!contactForm) return

	// Create FormData object from the form
	const formData = new FormData(contactForm)

	// Convert FormData to plain object
	const formDataObject = {}
	formData.forEach((value, key) => {
		formDataObject[key] = value
	})

	// Store the form data
	storeFormData(formDataObject)

	// Redirect to thank you page
	window.location.href = 'pages/thank-you.html'
}

// Function to set up radio button validation
function setupRadioValidation() {
	if (!radioGroup || !radioInputs) return

	// Listen for changes to any radio button in the inquiry group
	radioInputs.forEach((input) => {
		input.addEventListener('change', () => {
			// Update validation styling when an option is selected
			const helpText = radioGroup.querySelector('.form__help-text')
			if (helpText) {
				// Use opacity instead of display to avoid layout shift
				helpText.style.opacity = '0'
				helpText.style.color = '#555555'
			}
		})
	})
}

// Function to validate the form before submission
function validateForm(event) {
	if (!contactForm) return

	// Check if a radio option is selected
	const isRadioSelected = Array.from(radioInputs).some((input) => input.checked)

	if (!isRadioSelected) {
		// If no option is selected, prevent form submission
		event.preventDefault()

		// Show helper text
		const helpText = radioGroup.querySelector('.form__help-text')
		if (helpText) {
			helpText.style.opacity = '1'
			helpText.style.color = '#c01b1b'
		}

		// Scroll to the radio group
		radioGroup.scrollIntoView({ behavior: 'smooth', block: 'center' })
		return
	}

	// If validation passes, handle the form submission
	handleFormSubmit(event)
}

// Function to set up event listeners
function setupEventListeners() {
	if (!contactForm) return

	// Set up validation on form submission
	contactForm.addEventListener('submit', validateForm)
	// Set up radio button validation
	setupRadioValidation()
}

// Function to initialize the form
function initContactForm() {
	initializeDOMElements()
	setupEventListeners()
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initContactForm)
