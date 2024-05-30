import TSor from "./TSor.js";


export default class Tablazat{

    #LISTA = [];
    #szuloElem;
    #tbodyElem;
    constructor(LISTA,szuloELem){
        this.#LISTA = LISTA;
        this.#szuloElem = szuloELem;
        console.log(this.#szuloElem)
        this.#tablazatMegjelenit()
        //a sorok szuloeleme a tbdy lesz
        this.#tbodyElem=this.#szuloElem.children("table").children("tbody")
        console.log(this.#tbodyElem)



        tablazatMegjelenit() {
            let txt = "";
            txt += "<table class='table table stripped'>";
            txt += "<tr><th>ID</th><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";

            txt += "<tbodyELem></tbodyElem>";
            txt += "</table>";
            this.#szuloElem.append(txt);
        }

        #sorokhozzaadasa(){
            this.#LISTA.forEach((element) => {
                new TSor(element,this.#tbodyElem);
            }
            )
                

        }


        
    }
}