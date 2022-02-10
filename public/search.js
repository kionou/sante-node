const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => handleSearchInputChanges(e))

function handleSearchInputChanges(e) {
    console.log(e.target.value);
    let queryWord = e.target.value;
    if(queryWord.length > 0){
        let results = countries.filter(
            (country) => country.country.toLowerCase().includes(queryWord.toLowerCase())
        )
        // console.log(results);
        affiche(results);
    }

    else {
        affiche(countries);
    }

}
