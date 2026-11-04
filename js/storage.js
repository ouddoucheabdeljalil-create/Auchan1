
export function SetProduits(produits){
    localStorage.setItem('produits', JSON.stringify(produits))
}
export const data = JSON.parse(localStorage.getItem('produits')) || []

// export function setDataPanier(panierInfo){
// localStorage.setItem('panierInfo' , JSON.stringify(panierInfo))}
