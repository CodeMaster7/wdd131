// ==========================================================================
// MOBILE NAVIGATION TOGGLE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
	// Mobile navigation toggle functionality
	const navToggle = document.querySelector('.nav__toggle')
	const navMenu = document.querySelector('.nav__menu')
	const header = document.querySelector('.header')

	// Create and store original toggle state
	let menuOpen = false

	// Setup mobile menu structure if not already done
	if (navMenu && !navMenu.querySelector('.nav__menu-navigation')) {
		// Create navigation section
		const navMenuNavigation = document.createElement('div')
		navMenuNavigation.classList.add('nav__menu-navigation')

		// Move all navigation items to this section
		const navItems = navMenu.querySelectorAll('.nav__item')
		navItems.forEach((item) => {
			navMenuNavigation.appendChild(item)
		})

		// Create bottom section for separator and CTA
		const navMenuBottom = document.createElement('div')
		navMenuBottom.classList.add('nav__menu-bottom')

		// Create CTA button
		const mobileCtaBtn = document.createElement('a')
		mobileCtaBtn.setAttribute('href', '#')
		mobileCtaBtn.classList.add('nav__menu-cta')
		mobileCtaBtn.textContent = 'GET AN INVITE'

		// Add the button to the bottom section
		navMenuBottom.appendChild(mobileCtaBtn)

		// Clear the menu and add our new structure
		while (navMenu.firstChild) {
			navMenu.removeChild(navMenu.firstChild)
		}

		navMenu.appendChild(navMenuNavigation)
		navMenu.appendChild(navMenuBottom)

		// Close menu when CTA button is clicked
		mobileCtaBtn.addEventListener('click', () => {
			if (menuOpen) {
				toggleMobileMenu()
			}
		})
	}

	// Function to toggle mobile menu
	function toggleMobileMenu() {
		menuOpen = !menuOpen
		navToggle.classList.toggle('active')
		navMenu.classList.toggle('active')

		// Update aria attributes for accessibility
		navToggle.setAttribute('aria-expanded', menuOpen)

		// Prevent scrolling when menu is open
		if (menuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}

	// Set initial ARIA attributes
	if (navToggle) {
		navToggle.setAttribute('aria-expanded', 'false')
		navToggle.setAttribute('aria-label', 'Open menu')
	}

	// Event listener for toggle button
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			toggleMobileMenu()

			// Update aria-label based on state
			if (menuOpen) {
				navToggle.setAttribute('aria-label', 'Close menu')
			} else {
				navToggle.setAttribute('aria-label', 'Open menu')
			}
		})
	}

	// Handle mobile menu links for accessibility
	const navLinks = document.querySelectorAll('.nav__link')
	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			if (menuOpen) {
				toggleMobileMenu()
			}
		})
	})
})

// ==========================================================================
// SAVE TO LOCAL STORAGE FUNCTIONALITY
// ==========================================================================

// We'll add localStorage functionality later
