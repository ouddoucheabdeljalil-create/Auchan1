import {fetchingData } from "./api.js";
// import { data } from "./storage.js";
import { render } from "./products.js";
import  { gereePanier} from "./carts.js";
// import { panierplusMoins } from "./ui.js";




function app(){
    render() 
// x()

fetchingData()

gereePanier()
// panierplusMoins()
}
document.addEventListener('DOMContentLoaded', app);