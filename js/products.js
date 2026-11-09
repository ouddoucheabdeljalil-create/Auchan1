import { getProduit } from "./storage.js";
import { afficherProduits } from "./ui.js";
const pageNumber = document.getElementById('itmes-per-page')
const produitE1 = document.querySelector('#catalogue');
const pagenation = document.getElementById('pagenation');
const search = document.getElementById('search');
const categorieSelect = document.getElementById('catalogue-select')
let data = getProduit();
let itemsPerPage = 8;
let correntPage = 1;
let currentFilter = "";

// number de produitd dans la page 

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
export function filterByCategorie(){
categorieSelect.addEventListener('change' , (e) =>{
    let filterdCategory = data.filter(p => {
        return categorieSelect.value === 'tout' || p.categorie === categorieSelect.value
    })
    console.log(filterdCategory)
    render(filterdCategory)
})
}


search.addEventListener('input', e => {
    currentFilter = e.target.value.toLowerCase();

    render();
});


export function render(fletercatego) {

    const filtered = fletercatego || data.filter(p => p.name.toLowerCase().includes(currentFilter));
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
            btn.classList.add('bg-[#0D73e7]')
        }
        btn.addEventListener('click', () => { correntPage = i; render(); });
        pagenation.appendChild(btn);
       
    }
   
    
}
