const nameOfFilm = document.querySelectorAll('.film-element');
const inputSearch = document.querySelector('.header__input');
const filmList = document.querySelector('.film-list');

inputSearch.addEventListener('input', OnInputSearch);

function OnInputSearch(e) {
    const value = e.target.value.toLowerCase().trim();
    
    nameOfFilm.forEach(film => {
        const filmTitle = film.querySelector('.film-name').textContent.toLowerCase();
        
        if (filmTitle.includes(value)) {
            film.style.display = '';
        } else {
            film.style.display = 'none';
        }
    });
}