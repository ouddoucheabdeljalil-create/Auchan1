import { SetProduits } from "./storage.js"
export function fetchingData() {
fetch('./data/data.json')
.then (resp => resp.json())
.then(produits =>{
  
    SetProduits(produits)
})
}