// import { createElement } from "react"
import { data , panierData  } from "./storage.js"
import { afficherPanier } from "./ui.js";


// import createPlugin from "tailwindcss/plugin"

const panier = document.getElementById('panier')
const panierBtn = document.getElementById('panier-btn')
const produitE1 = document.querySelector('#catalogue');

console.log(produitE1)
panierBtn.addEventListener('click', (e) => {
    panier.classList.toggle('hidden')
})


export function gereePanier() {
    const panierPoduits = JSON.parse(localStorage.getItem('panierPoduits')) || []
    produitE1.addEventListener('click', (e) => {

        if (e.target.classList.contains('ajouter-btn')) {
           
            let prodact = data.find(p => e.target.dataset.id == p.id)
            
            panierPoduits.push(prodact)
            console.log(e.target.dataset.id)
            panierData(panierPoduits)
            // localStorage.setItem('panierPoduits', JSON.stringify(panierPoduits))
            afficherPanier()
        }



        // SetProduits('panierPoduits',panierPoduits);


    })

}









