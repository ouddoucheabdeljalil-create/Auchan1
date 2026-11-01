import { produitE1 } from "./carts.js";
export function AfficherProduit(pageItem) {
    for (let p of pageItem) {
        const productContainer = document.createElement('div');
        productContainer.classList.add('test')
        productContainer.innerHTML = ` <div class="grid grid-cols-5 grid-rows-4 border-[#E4EAF5] bg-[#ffffff] h-50 rounded-xl justify-center ">
                    <img src="${p.img}" alt=""
                        class="h-45 -w-auto ml-5 col-start-1 col-end-3 row-start-1 row-end-4 ">
                        <p class="bg-red-400 col-start-4 col-span-2 rounded-4xl text-center h-4 w-[70%] ml-7 text-[0.7rem] mt-3 pb-4 ">${p.categorie}</p>
                    <h2 class="row-start-2 col-start-3 col-span-3 text-center">${p.name}</h2>
                    

                        <p class="col-start-3 col-span-3  row-start-3 text-center">${p.prix}</p>
                        <button class="bg-[#4338CA] p-1 rounded-xl flex col-start-4 col-span-3 row-start-4 w-[50%]  my-1 justify-center text-center text-[#ffffff]" ><img src="assest/panier.png"
                                alt="" class="h-10 w-auto "> </button>
                    

                </div>`
        produitE1.appendChild(productContainer)
    }
    console.log('hhhhhhhhhh')
}