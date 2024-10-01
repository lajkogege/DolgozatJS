import karytaTerModell from "../Modell/kartyaTerModell.js";
import Kartyak from "../View/Kartyak.js";

class KartyaTerController {
  constructor() {
    //viwe példányositása
    const db = 0;
    const kartyak = new Kartyak(db);

    //modell példányositása
    const jatekterModell=new karytaTerModell(meret)
  }
}
