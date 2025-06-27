const filmButtons = document.querySelectorAll('.film-watch');
const body = document.body;
const closemodalbtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.fixed-overlay')
const modalcontent = document.querySelector('.modal__content')

filmButtons.forEach(button => {
  button.addEventListener('click', onClickModalOpen);
});

function onClickModalOpen(e) {
    const button = e.currentTarget
    const img = button.querySelector('.img-of-film > img').src
    const filmname = button.querySelector('.film-name').textContent
    modalcontent.querySelector('.modal__poster-img').src = img
    modalcontent.querySelector('.modal__title').textContent = filmname.toUpperCase();
    modalcontent.querySelector('.text-ofwhat-el.original-name').textContent = filmname
    modalOpen()
}
closemodalbtn.addEventListener('click', onClickModalClose)

function onClickModalClose (e) {
    modalClose()
}
overlay.addEventListener('click', onClickOverlayModalClose) 

function onClickOverlayModalClose (e) {
    if (e.target === overlay) {
        modalClose();
      }
}
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        modalClose();
    }
  });
function modalClose () {
    body.classList.remove('modalopen');
    document.querySelector('.fixed-overlay').classList.remove('is-visible');
}
function modalOpen () {
    body.classList.add('modalopen');
    document.querySelector('.fixed-overlay').classList.add('is-visible');
}