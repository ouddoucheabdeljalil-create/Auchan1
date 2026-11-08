import {fetchingData } from "./api.js";
// import { data } from "./storage.js";
import { render ,filterByCategorie } from "./products.js";
import  { gereePanier} from "./carts.js";
// import { panierplusMoins } from "./ui.js";


const a = document.querySelector('a')
a.addEventListener('click' , (e) => {
    e.preventDefault()
})

function app(){
    render() 
// x()

fetchingData()
filterByCategorie()
gereePanier()
// panierplusMoins()
}
document.addEventListener('DOMContentLoaded', app);