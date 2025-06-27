const inputSearch = document.querySelector('.header__input');
const errorMessage = document.createElement('span');
errorMessage.classList.add('error-text');
errorMessage.textContent = 'Search result not successful. Enter the correct movie name.';
document.querySelector('.error-text-container').appendChild(errorMessage);

inputSearch.addEventListener('input', OnInputSearch);

function OnInputSearch(e) {
    const value = e.target.value.toLowerCase().trim();
    const films = document.querySelectorAll('.film-element');
    let found = false;

    if (films.length === 0) {
        errorMessage.classList.add('active');
        return;
    }

    films.forEach(film => {
        const filmTitleElement = film.querySelector('.film-name');
        const filmTitle = filmTitleElement ? filmTitleElement.textContent.toLowerCase() : '';

        if (filmTitle.includes(value)) {
            film.style.display = '';
            found = true;
        } else {
            film.style.display = 'none';
        }
    });

    errorMessage.classList.toggle('active', !found);
}