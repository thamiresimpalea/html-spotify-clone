const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');
const allSections = document.getElementById('all-sections');

function requestApi(searchTerm) {
	const url = `http://localhost:3000/artists?name_like=${searchTerm}`
	fetch(url)
		.then((response) => response.json())
		.then((result) => displayResults(result))
}

function displayResults(result) {
	allSections.classList.add('hidden');
	const artistName = document.getElementById('artist-name');
	const artistImage = document.getElementById('artist-img');

	result.forEach(element => {
		artistName.innerText = element.name;
		artistImage.src = element.urlImg;
	});

	searchResult.classList.remove('hidden');
}

document.addEventListener('input', function() {
	const searchTerm = searchInput.value.toLowerCase();
	if (searchTerm === '') {
		allSections.classList.add('hidden');
		searchResult.classList.remove('hidden');
		return;
	}

	requestApi(searchTerm);
})
