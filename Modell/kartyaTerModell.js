export default class kartyaTerModell {
  #feliratLista = [];
  #kartyaTerTomb = [];
  #db;
  constructor() {
    this.db = db;
    this.#feliratLista = [
      "Az egyetlen út, ami garantáltan nem vezet sehová, ha meg sem próbálod.",
      "A siker titka az, hogy soha ne add fel.",
      "Minden nagy utazás egyetlen lépéssel kezdődik.",
      "A holnap azé, aki ma felkészül rá.",
      "Ne félj hibázni, mert azokból tanulhatsz a legtöbbet.",
      "Az álmaid határozzák meg, hová jutsz el, a munkád pedig azt, hogyan érsz oda.",
      "A legnagyobb győzelmek mindig a legnehezebb küzdelmek után jönnek.",
      "Ne várj a tökéletes pillanatra, hanem tedd azzá a pillanatot.",
      "A változás mindig félelmetes, de nélküle nincs fejlődés.",
      "Bízz magadban, mert képes vagy bármire, amire igazán vágysz.",
      "A siker nem a véletlen műve, hanem kemény munka eredménye.",
      "Minden nap egy új lehetőség arra, hogy valami nagyszerűt alkoss.",
      "Az élet nem arról szól, hogy vársz a vihar elvonulására, hanem hogy megtanulsz táncolni az esőben.",
      "A legnagyobb akadály, amit le kell győznöd, a saját kételyeid.",
      "Ha nem kockáztatsz, nem is nyerhetsz.",
      "A kudarc nem a vég, hanem a kezdet egy új úton.",
      "Az élet túl rövid ahhoz, hogy ne kövesd az álmaidat.",
      "Minden nap egy új lehetőség arra, hogy jobb legyél, mint tegnap.",
      "Az erő nem fizikai képességből fakad, hanem rendíthetetlen akaraterőből.",
      "Ne feledd: a legnehezebb utakon járva találjuk meg a legszebb kilátásokat.",
    ];
    for (let index = 0; index < this.#feliratLista.length; index++) {
      this.#kartyaTerTomb.push(false);
      
    }
  }
  
getFeliaratLista(){
return this.#feliratLista
}


  getKartyaterTomb(){
    return this.#kartyaTerTomb;
  }
  getListaAdat() {
    return this.getListaAdat;
  }

  getDbValtozo(db) {
    return this.#db
  }


  dbNoveles(db) {
    this.#db++;
  }
  feliratValtoztatas(id) {
    
  }
}
