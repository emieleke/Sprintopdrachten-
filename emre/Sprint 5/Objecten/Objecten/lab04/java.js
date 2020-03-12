var pallet = new Array("Groen", "Rood", "Blauw", "Geel", "Wit");
document.write(pallet);
var nieuwekleur = prompt("Typ een nieuwe kleur in: ");
pallet = pallet + "," + nieuwekleur;
document.write(pallet);
pallet.sort(true);
document.write(pallet); 
  