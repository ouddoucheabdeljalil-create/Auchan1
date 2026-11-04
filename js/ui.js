
import { data } from "./storage.js";
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
const filter = document.getElementById('search');

filter.addEventListener('input', e => {
    currentFilter = e.target.value.toLowerCase();
    correntPage = 1;
    render();
});

export function render() {

    const filtered = data.filter(p => p.name.toLowerCase().includes(currentFilter));
    const start = (correntPage - 1) * itemsPerPage;
    const pageItems = filtered.slice(start, start + itemsPerPage);
    console.log(pageItems)


    produitE1.innerHTML = ''
    for (let p of pageItems) {

        const articles = document.createElement('article');
        articles.className = 'grid grid-cols-5 grid-rows-4 border-[#E4EAF5] bg-[#ffffff] h-50 rounded-xl justify-center '

        articles.innerHTML = ` 
                    <img src="${p.img}" alt=""
                        class="h-45 -w-auto ml-5 col-start-1 col-end-3 row-start-1 row-end-4 ">
                    <p class="bg-red-400 col-start-4 col-span-2 rounded-4xl text-center h-4 w-[70%] ml-7 text-[0.7rem] mt-3 pb-4 ">${p.categorie}</p>
                    <h2 class="row-start-2 col-start-3 col-span-3 text-center">${p.name}</h2>
                    <p class="col-start-3 col-span-3  row-start-3 text-center">${p.prix} DH</p>`

        const imgBtn = document.createElement('img')
        imgBtn.src = './assest/panier.png'
        imgBtn.className = 'ajouter-btn'
        articles.dataset.id = p.id;
        const ajouterBtn = document.createElement('button')
        ajouterBtn.className = 'ajouter-btn bg-[#4338CA] p-1 rounded-xl flex col-start-4 col-span-3 row-start-4 w-[50%]  my-1 justify-center text-center text-[#ffffff]'
        layoutGrid(articles)
        ajouterBtn.dataset.id = p.id;
        imgBtn.dataset.id = p.id;
        ajouterBtn.appendChild(imgBtn)
        articles.appendChild(ajouterBtn)

        produitE1.appendChild(articles)
    }

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
        //            pagenation.addEventListener('click', (e) =>{
        //     if(e.target.tagName === 'BUTTON'){
        //         if (i === correntPage){
        //         btn.classList.add('bg-yellow-500') 
        //         console.log('hhhhhhhh')}
        //     }
        // })
    }

}


export function layoutGrid(articles) {
    const gridBtn = document.getElementById('grid-btn')
    const horizontalBtn = document.getElementById('btn-horizontal')
    gridBtn.addEventListener('click', (e) => {
        e.preventDefault()
        articles.classList.remove()
        articles.className = 'grid grid-cols-5 grid-rows-4 border-[#E4EAF5] bg-[#ffffff] h-50 rounded-xl justify-center'
    })
    horizontalBtn.addEventListener('click', (e) => {
        e.preventDefault()
        articles.classList.remove()
        articles.className = 'grid grid-cols-5 grid-rows-4 border-[#E4EAF5] bg-[#ffffff] h-50 rounded-xl justify-center lg:col-span-4'
    })
}
