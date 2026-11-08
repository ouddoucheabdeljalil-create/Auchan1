


export function SetProduits(produits){
    localStorage.setItem('produits', JSON.stringify(produits))
}
export let data = JSON.parse(localStorage.getItem('produits')) || []



export function panierData(panierPoduits){
     localStorage.setItem('panierPoduits', JSON.stringify(panierPoduits))
}


