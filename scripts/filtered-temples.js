/*******************************************************************************
 * Temple Data
 * An array of temple objects containing information about various LDS temples
 * Each object includes: name, location, dedication date, area, and image URL
 ******************************************************************************/
const temples = [
	{
		templeName: 'Aba Nigeria',
		location: 'Aba, Nigeria',
		dedicated: '2005, August, 7',
		area: 11500,
		imageUrl: 'images/aba-nigeria-temple.webp'
	},
	{
		templeName: 'Manti Utah',
		location: 'Manti, Utah, United States',
		dedicated: '1888, May, 21',
		area: 74792,
		imageUrl: 'images/manti-temple.webp'
	},
	{
		templeName: 'Payson Utah',
		location: 'Payson, Utah, United States',
		dedicated: '2015, June, 7',
		area: 96630,
		imageUrl: 'images/payson-utah-temple.webp'
	},
	{
		templeName: 'Yigo Guam',
		location: 'Yigo, Guam',
		dedicated: '2020, May, 2',
		area: 6861,
		imageUrl: 'images/yigo-guam-temple.webp'
	},
	{
		templeName: 'Washington D.C.',
		location: 'Kensington, Maryland, United States',
		dedicated: '1974, November, 19',
		area: 156558,
		imageUrl: 'images/washington-dc-temple.webp'
	},
	{
		templeName: 'Lima Perú',
		location: 'Lima, Perú',
		dedicated: '1986, January, 10',
		area: 9600,
		imageUrl: 'images/lima-peru-temple.webp'
	},
	{
		templeName: 'Mexico City Mexico',
		location: 'Mexico City, Mexico',
		dedicated: '1983, December, 2',
		area: 116642,
		imageUrl: 'images/mexico-city-temple.webp'
	},
	{
		templeName: 'Rome Italy',
		location: 'Rome, Italy',
		dedicated: '2010, October, 23',
		area: 41010,
		imageUrl: 'images/rome-temple.webp'
	},
	{
		templeName: 'Laie Hawaii',
		location: 'Laie, Hawaii, United States',
		dedicated: '1919, November, 27-30',
		area: 42100,
		imageUrl: 'images/laie-temple-exterior.webp'
	},
	{
		templeName: 'Bern Switzerland',
		location: 'Bern, Switzerland',
		dedicated: '1955, September, 11-15',
		area: 35546,
		imageUrl: 'images/ber-switzerland.webp'
	}
]

/*******************************************************************************
 * Temple Filtering Function
 * Filters temples based on different criteria:
 * - old: temples built before 1900
 * - new: temples built after 2000
 * - large: temples larger than 90,000 sq ft
 * - small: temples smaller than 10,000 sq ft
 * - default: shows all temples
 ******************************************************************************/
function filterTemples(criteria) {
	// Get the heading element to update
	const heading = document.querySelector('main h2')

	let filteredTemples = temples

	switch (criteria) {
		case 'old':
			// Filter temples built before 1900
			filteredTemples = temples.filter((temple) => {
				const year = new Date(temple.dedicated.replace(/,/g, '')).getFullYear()
				return year < 1900
			})
			heading.textContent = 'Old Temples'
			break

		case 'new':
			// Filter temples built after 2000
			filteredTemples = temples.filter((temple) => {
				const year = new Date(temple.dedicated.replace(/,/g, '')).getFullYear()
				return year > 2000
			})
			heading.textContent = 'New Temples'
			break

		case 'large':
			// Filter temples larger than 90,000 square feet
			filteredTemples = temples.filter((temple) => temple.area > 90000)
			heading.textContent = 'Large Temples'
			break

		case 'small':
			// Filter temples smaller than 10,000 square feet
			filteredTemples = temples.filter((temple) => temple.area < 10000)
			heading.textContent = 'Small Temples'
			break

		default:
			// Show all temples for 'home' or any other case
			heading.textContent = 'All Temples'
	}

	displayTemples(filteredTemples)
}

/*******************************************************************************
 * Temple Display Function
 * Creates and displays temple cards in the DOM
 * - Creates a container for all temple cards
 * - Generates individual cards with temple information
 * - Handles image loading and date formatting
 * @param {Array} templeList - Array of temple objects to display
 ******************************************************************************/
function displayTemples(templeList = temples) {
	// Get the main element where we'll add the temple cards
	const main = document.querySelector('main')

	// Remove existing temple container if it exists
	const existingContainer = document.getElementById('temples')
	if (existingContainer) {
		existingContainer.remove()
	}

	// Create a container for the temple cards
	const templesContainer = document.createElement('div')
	templesContainer.id = 'temples'

	// Loop through each temple and create a card
	templeList.forEach((temple) => {
		// Create figure element
		const figure = document.createElement('figure')
		figure.className = 'temple-card'

		// Format the dedication date
		const dedicationDate = new Date(temple.dedicated.replace(/,/g, ''))
		const formattedDate = dedicationDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})

		// Create the card content
		figure.innerHTML = `
            <img
                src="${temple.imageUrl}"
                alt="The ${temple.templeName} Temple"
                class="temple-card__image"
                loading="lazy"
            >
            <figcaption class="temple-card__caption">
                <h2 class="temple-card__title">${temple.templeName}</h2>
                <p class="temple-card__location">${temple.location}</p>
                <p class="temple-card__dedication">Dedicated: ${formattedDate}</p>
                <p class="temple-card__area">Area: ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `

		// Add the figure to the container
		templesContainer.appendChild(figure)
	})

	// Add the container to the main element
	main.appendChild(templesContainer)
}

/*******************************************************************************
 * Event Listeners and Initialization
 * Sets up all necessary event handlers when the DOM is loaded:
 * - Mobile menu toggle functionality
 * - Navigation link click handlers
 * - Initial temple display
 ******************************************************************************/
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

	// Add click event listeners to navigation links
	const navLinks = document.querySelectorAll('.nav__link')
	navLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const criteria = link.textContent.toLowerCase()
			filterTemples(criteria)

			// Close the mobile menu if it's open
			nav.classList.remove('nav--open')
			menuButton.classList.remove('menu--open')
		})
	})

	// Initial display of all temples
	displayTemples()
})

/*******************************************************************************
 * Footer Information
 * Updates the footer with current year and last modified date
 ******************************************************************************/
// Get the current year for the copyright
document.getElementById('currentyear').textContent = new Date().getFullYear()
// Last modified date
document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`
