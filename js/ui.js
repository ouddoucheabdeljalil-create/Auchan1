import { produitE1 } from "./carts.js";
export function AfficherProduit(pageItem) {
    for (let p of pageItem) {
        
        const articles = document.createElement('article');
        articles.className = 'grid grid-cols-5 grid-rows-4 border-[#E4EAF5] bg-[#ffffff] h-50 rounded-xl justify-center '
        articles.innerHTML = ` 
                    <img src="${p.img}" alt=""
                        class="h-45 -w-auto ml-5 col-start-1 col-end-3 row-start-1 row-end-4 ">
                    <p class="bg-red-400 col-start-4 col-span-2 rounded-4xl text-center h-4 w-[70%] ml-7 text-[0.7rem] mt-3 pb-4 ">${p.categorie}</p>
                    <h2 class="row-start-2 col-start-3 col-span-3 text-center">${p.name}</h2>
                    <p class="col-start-3 col-span-3  row-start-3 text-center">${p.prix} DH</p>`
        const ajouterBtn = document.createElement('button')
        const imgBtn = document.createElement('img')
        imgBtn.src = './assest/panier.png'
        ajouterBtn.className = 'ajouter-btn bg-[#4338CA] p-1 rounded-xl flex col-start-4 col-span-3 row-start-4 w-[50%]  my-1 justify-center text-center text-[#ffffff]'
        ajouterBtn.dataset.id = p.id;
        ajouterBtn.appendChild(imgBtn)
        articles.appendChild(ajouterBtn)
        
        produitE1.appendChild(articles)
    }
    console.log('hhhhhhhhhh')
}