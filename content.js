// Function to check and update the theme
function updateTheme() {
	const lightElements = document.querySelectorAll('.theme--light');
	lightElements.forEach((element) => {
		element.classList.remove('theme--light');
		element.classList.add('theme--dark');
	});
	const courseHeader = document.querySelector('.header-course');
	if (courseHeader) {
		courseHeader.style.backgroundColor = '#222'; // Dark background color
		courseHeader.style.color = '#fff'; // Light text color
	}
}

// Call updateTheme() when the page loads
updateTheme();

const observer = new MutationObserver((mutationsList) => {
	for (const mutation of mutationsList) {
		if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
			updateTheme();
			break; // Only update once
		}
	}
});
observer.observe(document.body, { attributes: true, subtree: true });
