
export function SetProduits(produits){
    localStorage.setItem('produits', JSON.stringify(produits))
}
export const data = JSON.parse(localStorage.getItem('produits')) || []

export const datapanier = JSON.parse(localStorage.getItem('panierPoduits')) || []
