// import { createElement } from "react"
import { getProduit , panierData  } from "./storage.js"
import { afficherPanier } from "./ui.js";


// import createPlugin from "tailwindcss/plugin"

const panier = document.getElementById('panier')
const panierBtn = document.getElementById('panier-btn')
const produitE1 = document.querySelector('#catalogue');
const divSpace = document.getElementById('space')


panierBtn.addEventListener('click', (e) => {
    panier.classList.toggle('hidden')
    divSpace.classList.toggle('hidden')
})

divSpace.addEventListener('click', () =>{
    divSpace.classList.add('hidden')
    panier.classList.add('hidden')
})

export function gereePanier() {
    let data = getProduit()
    const panierPoduits = JSON.parse(localStorage.getItem('panierPoduits')) || []
    produitE1.addEventListener('click', (e) => {

        if (e.target.classList.contains('ajouter-btn')) {
           
            let prodact = data.find(p => e.target.dataset.id == p.id)
            let exest = false;
            for(let p of panierPoduits){
                if(prodact.id == p.id){
                    exest = true;
                }
            }
            if(exest === false){
            panierPoduits.push(prodact)
            }
            // console.log(e.target.dataset.id)
            panierData(panierPoduits)
            // localStorage.setItem('panierPoduits', JSON.stringify(panierPoduits))
            afficherPanier(e.target.dataset.id)
        }



        // SetProduits('panierPoduits',panierPoduits);


    })
    // panierplusMoins(panierPoduits)
}









