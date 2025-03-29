// ==========================================================================
// MOBILE NAVIGATION TOGGLE
// ==========================================================================

// Global DOM elements for navigation
let navToggle, navMenu, menuIcon, closeIcon

// Function to handle mobile menu toggle
function toggleMobileMenu() {
	// Toggle class for styling
	navToggle.classList.toggle('active')
	navMenu.classList.toggle('active')

	// Toggle icon visibility
	if (navToggle.classList.contains('active')) {
		menuIcon.style.opacity = '0'
		menuIcon.style.visibility = 'hidden'
		closeIcon.style.opacity = '1'
		closeIcon.style.visibility = 'visible'
	} else {
		menuIcon.style.opacity = '1'
		menuIcon.style.visibility = 'visible'
		closeIcon.style.opacity = '0'
		closeIcon.style.visibility = 'hidden'
	}
}

// Initialize mobile navigation
function initMobileNavigation() {
	// Get DOM elements
	navToggle = document.querySelector('.nav__toggle')
	navMenu = document.querySelector('.nav__menu')
	menuIcon = document.querySelector('.menu-icon')
	closeIcon = document.querySelector('.close-icon')

	console.log('Toggle:', navToggle)
	console.log('Menu:', navMenu)
	console.log('Menu Icon:', menuIcon)
	console.log('Close Icon:', closeIcon)

	// Simple Mobile Menu Toggle
	if (navToggle && navMenu && menuIcon && closeIcon) {
		console.log('All elements found, adding event listener')

		// Toggle menu on click - only add the event listener
		navToggle.addEventListener('click', toggleMobileMenu)

		// Also add click handlers to close menu when a link is clicked
		const navLinks = document.querySelectorAll('.nav__menu .nav__link')
		navLinks.forEach((link) => {
			link.addEventListener('click', () => {
				if (navToggle.classList.contains('active')) {
					toggleMobileMenu()
				}
			})
		})
	} else {
		console.error('Missing required elements for mobile navigation')
		if (!navToggle) console.error('Missing: .nav__toggle')
		if (!navMenu) console.error('Missing: .nav__menu')
		if (!menuIcon) console.error('Missing: .menu-icon')
		if (!closeIcon) console.error('Missing: .close-icon')
	}
}

// Initialize the application
function init() {
	console.log('Initializing mobile navigation...')
	initMobileNavigation()

	// Other initialization tasks could go here
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init)

// ==========================================================================
// SAVE TO LOCAL STORAGE FUNCTIONALITY
// ==========================================================================

// We'll add localStorage functionality later
// For now, we'll just console.log the data
