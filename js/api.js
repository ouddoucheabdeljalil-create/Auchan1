export function fetchingData() {
fetch('./data/data.json')
.then (resp => resp.json())
.then(produits =>{
    console.log(produits)
    localStorage.setItem('sal3a', JSON.stringify(produits))
    // console.log(data)
})
}