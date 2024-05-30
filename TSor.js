export default class TSor{
    #termekObj={
        id:1,
        nev:"Éva",
        kor:12,
        nem:true
    }
    #szuloElem;
    #sorELem;
    #torlesELem;
    constructor(termekObj,szuloElem){
        this.termekObj=termekObj;
        this.szuloElem=szuloElem;
        console.log(this.#szuloElem)
        /* esemenyt irunk a torles gombra*/
        this.#torlesELem=(".torol:last-child")this.#szuloElem.children("tr.last-child").children(td).children(".")
        console.log(this.#torlesELem)
        this.#trigger("torol")
    }

    #sorokletrehozasa(){
        let txt=`<tr>`
        for(const key in this.#termekObj){
            txt+=`<tr>${this.#termekObj[key]}</td>`
        }
        
        txt+=   `<td><button> class="torol">Töröl</button></td>`
        txt+=  `</tr>`;
        this.#szuloElem.append(txt);
    }

}