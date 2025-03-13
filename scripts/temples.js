// Get the current year for the copyright
document.getElementById('currentyear').textContent = new Date().getFullYear()
// Last modified date
document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
	// Get the hamburger button and navigation elements
	const menuButton = document.getElementById('menu')
	const nav = document.querySelector('.nav')

	// Toggle the navigation menu when the hamburger button is clicked
	menuButton.addEventListener('click', function () {
		nav.classList.toggle('nav--open')
		menuButton.classList.toggle('menu--open')

		// Toggle aria-expanded attribute for accessibility
		const isExpanded = nav.classList.contains('nav--open')
		menuButton.setAttribute('aria-expanded', isExpanded)
	})
})
