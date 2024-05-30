import DataService from 
import Tablazat from "./Tablazat.js";
//import { emberekLISTA } from "./adat.js";

const DS = new DataService()
DS.getAdat("")



function megjelenit(LISTA){
    console.log(LISTA)
    new Tablazat(emberekLISTA,$(".tablazat"))
}


//itt tudunk torolni 
// fel kell iratkozni a torol eseményre
$(window).on("torol,"(event) => {
    console.log(event.detail)
    DS-deleteAdat("")

)}