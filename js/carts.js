// import { createElement } from "react"
import { data , datapanier} from "./storage.js"

// import createPlugin from "tailwindcss/plugin"

const panier = document.getElementById('panier')
export const produitE1 = document.querySelector('#catalogue');

export function test(){
   const panierPoduits = JSON.parse(localStorage.getItem('panierPoduits')) || [] 
produitE1.addEventListener('click' , (e) => {
    
    if(e.target.classList.contains('ajouter-btn')){
        for(let p of data){
            console.log()
            if(p.id === Number(e.target.dataset.id)){
                panierPoduits.push(p)
            }
        }
    }
    
localStorage.setItem('panierPoduits' , JSON.stringify(panierPoduits))

})
}
export function gereePanier(){
    console.log(datapanier)
}



