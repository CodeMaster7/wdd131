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

// ==========================================================================
// PRICING TOGGLE FUNCTIONALITY
// ==========================================================================

// Pricing data object
const pricingData = {
	basic: {
		monthly: 19,
		yearly: 190
	},
	pro: {
		monthly: 39,
		yearly: 390
	},
	business: {
		monthly: 99,
		yearly: 990
	}
}

// Function to update prices
function updatePrices(isYearly) {
	const prices = document.querySelectorAll('.plan-card__price')
	const periods = document.querySelectorAll('.plan-card__period')

	prices.forEach((price) => {
		const plan = price.closest('.plan-card').classList.contains('plan-card--basic')
			? 'basic'
			: price.closest('.plan-card').classList.contains('plan-card--pro')
			? 'pro'
			: 'business'

		const newPrice = isYearly ? pricingData[plan].yearly : pricingData[plan].monthly
		// Update the price amount
		price.querySelector('.plan-card__amount').textContent = `$${newPrice}`
	})

	periods.forEach((period) => {
		period.textContent = isYearly ? 'per year' : 'per month'
	})
}

// Function to handle pricing toggle
function initPricingToggle() {
	const toggle = document.querySelector('.pricing-toggle')
	const toggleInput = toggle?.querySelector('input[type="checkbox"]')
	const monthlyLabel = toggle?.querySelector('.pricing-toggle__label:first-child')
	const yearlyLabel = toggle?.querySelector('.pricing-toggle__label:last-child')

	if (toggle && toggleInput && monthlyLabel && yearlyLabel) {
		// Change event for the checkbox
		toggleInput.addEventListener('change', (e) => {
			updatePrices(e.target.checked)
			// Update active label
			monthlyLabel.classList.toggle('pricing-toggle__label--active', !e.target.checked)
			yearlyLabel.classList.toggle('pricing-toggle__label--active', e.target.checked)
		})
	}
}

// ==========================================================================
// CURRENT YEAR FOR FOOTER
// ==========================================================================

// Function to update the current year in the footer
function updateCurrentYear() {
	const currentYearElement = document.getElementById('currentyear')
	if (currentYearElement) {
		currentYearElement.textContent = new Date().getFullYear()
	}
}

// Initialize the application
function init() {
	console.log('Initializing mobile navigation...')
	initMobileNavigation()
	console.log('Initializing pricing toggle...')
	initPricingToggle()
	console.log('Updating footer year...')
	updateCurrentYear()
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init)

// ==========================================================================
// SAVE TO LOCAL STORAGE FUNCTIONALITY
// ==========================================================================

// We'll add localStorage functionality later
// For now, we'll just console.log the data
