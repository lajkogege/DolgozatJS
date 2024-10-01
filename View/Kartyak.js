import Kartya from "./Kartya.js";

export default class Kartyak{
    #kartyaLista=[]
    #db

    constructor(db, kartyaLista){
        this.#db=db;
        this.#kartyaLista=kartyaLista
        let szuloElem=$(".jatekter");
        console.log(szuloElem)
        for (let index = 0; index < 20; index++) {
           const kartya = new Kartya(index, false, szuloElem)
            this.#kartyaLista.push(kartya);
        }
        let dbElem=$("dbSzam")
    }

    setDarab(){
        console.log(tomb);
            tomb.forEach(element, index => {
            this.#kartyaLista[index].setSzoveg(element);
        });
    }

    setElemekAllapota(tomb){
       
    }
}