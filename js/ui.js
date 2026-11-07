


export function afficherProduits(pageItems, produitE1) {
    for (let p of pageItems) {

        const articles = document.createElement('article');
        articles.className = 'grid grid-cols-5 grid-rows-4 border-[#F8FBFD] text-[#102B50] shadow bg-[#ffffff] h-50 rounded-xl justify-center '

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
        ajouterBtn.className = 'ajouter-btn bg-[#0D73e7]  p-1 rounded-xl flex col-start-4 col-span-3 row-start-4 w-[50%]  my-1 justify-center text-center text-[#ffffff]'
        layoutGrid(articles)
        ajouterBtn.dataset.id = p.id;
        imgBtn.dataset.id = p.id;
        ajouterBtn.appendChild(imgBtn)
        articles.appendChild(ajouterBtn)

        produitE1.appendChild(articles)
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

export function afficherPanier(id) {
    const datapro = JSON.parse(localStorage.getItem('panierPoduits')) || []

    let produit = datapro.find(p => p.id === Number(id))
    let item = panier.querySelector(`li[data-id='${id}']`);
    if(!item){
        item = document.createElement('li')
        item.dataset.id = id
        item.className = "flex justify-around bg-[#ffffff] items-center text-[#102B50] border rounded-xl border-[#102B50] m-5"
        item.innerHTML =` <img src="${produit.img}" alt="" class="h-40">
                <button data-id="${produit.id}" id="min${produit.id}" class="min border border-[#102B50] h-10 w-10">-</button>
                <p class="qntit${produit.id}">1</p>
                <button data-id="${produit.id}" id="plus${produit.id}" class="ajouter-btn border border-[#102B50]h-10 w-10">+</button>
                <p><span class="total${produit.id}">${produit.prix} </span>DH</p>
                <button >supremer</button>`
        panier.appendChild(item)

    }
    else{
        let quantity = item.querySelector(`.qntit${produit.id}`)
        // const qtynbr = Number(quantity.textContent)
        quantity.textContent = Number(quantity.textContent) + 1
        
        let total = item.querySelector(`.total${produit.id}`)
        total.textContent =  Number(quantity.textContent) * produit.prix
        const finalTotal = document.getElementById('final-total')
        
        console.log(finalTotal)
        finalTotal.textContent = total.textContent

    }

    // const btnPlus = panier.querySelector(`#plus${id}`)
    // btnPlus.addEventListener('click' , (e) =>{
    //     let quantity = item.querySelector(`.qntit${id}`)
    //     quantity.textContent = Number(quantity.textContent)
        
    //     quantity.textContent = Number(quantity.textContent)+1 
    // })
   
   item.addEventListener('click' , (e) => {
       
       
        
    if(e.target.id == `plus${e.target.dataset.id}`){
        console.log("e target: ", e.target.id, e.target.dataset.id)
     let quantity = item.querySelector(`.qntit${e.target.dataset.id}`)
     
   
     quantity.textContent = Number(quantity.textContent) + 1
     console.log(quantity)
     let total = item.querySelector(`.total${produit.id}`)
    total.textContent = Number(quantity.textContent)  * produit.prix
     const finalTotal = document.getElementById('final-total')
        console.log(finalTotal)
        finalTotal.textContent = Number(total.textContent)
    }
    else{
   
     let quantity = item.querySelector(`.qntit${e.target.dataset.id}`)
     
   
     quantity.textContent = Number(quantity.textContent) - 1
     console.log(quantity)
     let total = item.querySelector(`.total${produit.id}`)
        total.textContent = Number(quantity.textContent)  * produit.prix
        const finalTotal = document.getElementById('final-total')
        console.log(finalTotal)
        finalTotal.textContent = Number(finalTotal.textContent) - Number(total.textContent)
    }
    })
} 
// export function panierplusMoins(total){
// const item = panier.querySelector('li')
// item.addEventListener('click' , (e) => {
       
       
        
//     if(e.target.id == `plus${e.target.dataset.id}` ){
   
//      let quantity = item.querySelector(`.qntit${e.target.dataset.id}`)
     
   
//      quantity.textContent = Number(quantity.textContent) + 1
//      console.log(quantity)
//     //  let total = item.querySelector(`.total${produit.id}`)
//     total.textContent = Number(quantity.textContent)  * produit.prix
//     }
//     else if(e.target.id == `min${e.target.dataset.id}` ){
   
//      let quantity = item.querySelector(`.qntit${e.target.dataset.id}`)
     
   
//      quantity.textContent = Number(quantity.textContent) - 1
//      console.log(quantity)
//     //  let total = item.querySelector(`.total${produit.id}`)
//         total.textContent = Number(quantity.textContent)  * produit.prix
//     }
//     })
    
// }
// export function panierplusMoins(panierPoduits){
//     const panier = document.getElementById('panier')
//     const items = panier.querySelectorAll('li')
    
  
  
// }



