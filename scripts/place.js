// Get the elements from the DOM
const currentYearElement = document.querySelector('#currentyear')
const lastModifiedElement = document.querySelector('#lastmodified')
const windChillElement = document.querySelector('.weather__item:last-child .weather__value')

// Set the current year in the footer
currentYearElement.textContent = new Date().getFullYear()

// Set the last modified date in the footer
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`

// Static values for temperature and wind speed (matching displayed values)
const temperature = 27 // °C
const windSpeed = 15 // km/h

/**
 * Calculate the wind chill factor using the metric formula
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number} - Wind chill factor in Celsius
 */
function calculateWindChill(temp, speed) {
	return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
}

// Display the wind chill factor
function displayWindChill() {
	// Check if conditions are met for viable wind chill calculation (metric)
	if (temperature <= 10 && windSpeed > 4.8) {
		// Calculate wind chill and round to 1 decimal place
		const windChill = calculateWindChill(temperature, windSpeed).toFixed(1)
		// Display the wind chill
		windChillElement.textContent = `${windChill} °C`
	} else {
		// Display N/A if conditions are not met
		windChillElement.textContent = 'N/A'
	}
}

// Run the wind chill calculation when the page loads
displayWindChill()
