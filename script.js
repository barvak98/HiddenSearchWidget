const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// toggle will add and remove on click, depends on the situation. 
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})