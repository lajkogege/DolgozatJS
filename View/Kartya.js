
export default class Kartya{
    
    #allapot 
    #index
    constructor( allapot, index, szuloeElem){
        this.#allapot=allapot;
        this.#index=index;
        szuloeElem.append(`<div class="kartya"></div>`)

        this.kartyaElem = szuloeElem.children("div:last-child");

        this.kartyaElem.on("click",()=>{
            this.setAllapot(!this.#allapot);
            this.kattintTigger("feliratozas")
        })
    }

    setAllapot(allapot){
        this.#allapot=allapot;
        this.setSzoveg
    }
    setSzoveg(lista){
        if(this.#allapot){
        
        }
        else{

        }

    }

    #kattintasTigger(feliratozas){
        const e = new CustomEvent("lampaKapcsolas", {detail: this.#index});
        window.dispatchEvent(e);
    }

}