//import kartyaTerModell from "../Modell/kartyaTerModell.js";
import Kartyak from "../View/Kartyak.js";

export default class KartyaTerController {
  constructor() {
    //viwe példányositása
    const db = 0;
    const kartyak = new Kartyak(lista);

    //modell példányositása    
    const kartyaTerModell=new karytaTerModell();
    kartyaTerModell.getFeliaratLista

    $(window).on("feliratozas",(event)=>{
      let id= event.detail;

      kartyaTerModell.feliratValtoztatas(id);

      const tomb = kartyaTerModell.getKartyaterTomb();
      kartyak.setElemekAllapota(tomb);
    })
  }
}
