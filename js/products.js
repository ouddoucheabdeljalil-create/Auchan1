import { data } from "./storage.js";
import { afficherProduits } from "./ui.js";

const pageNumber = document.getElementById('select')
let itemsPerPage = 8;


let correntPage = 1;
let currentFilter = "";
export const produitE1 = document.querySelector('#catalogue');
export const pagenation = document.getElementById('pagenation');
pageNumber.addEventListener('click', (e) => {
    itemsPerPage = Number(pageNumber.value)
    console.log(itemsPerPage)
    if (itemsPerPage === 8) {
        produitE1.className = 'grid gap-5  p-5 md:grid-cols-2 lg:grid-cols-4 '
    }
    else if (itemsPerPage === 6) {
        produitE1.className = 'grid gap-5  p-5 md:grid-cols-2 lg:grid-cols-3 '
    }
    else {
        produitE1.className = 'grid gap-5  p-5 md:grid-cols-2 lg:grid-cols-2 '
    }
    render(itemsPerPage)
})
const search = document.getElementById('search');

search.addEventListener('input', e => {
    currentFilter = e.target.value.toLowerCase();

    render();
});

export function render() {

    const filtered = data.filter(p => p.name.toLowerCase().includes(currentFilter));
    const start = (correntPage - 1) * itemsPerPage;
    const pageItems = filtered.slice(start, start + itemsPerPage);
    


    produitE1.innerHTML = ''
   afficherProduits(pageItems , produitE1)

    pagenation.innerHTML = '';
    const pages = Math.ceil(data.length / itemsPerPage);
    for (let i = 1; i <= pages; i++) {
        const btn = document.createElement('button');
        btn.classList = (' mt-0 border rounded-xl   h-auto w-15 bg-')
        btn.textContent = i;
        if (i === correntPage) {
            btn.disabled = true;
            btn.classList.add('bg-[#4338CA]')
        }
        btn.addEventListener('click', () => { correntPage = i; render(); });
        pagenation.appendChild(btn);
       
    }
   
}