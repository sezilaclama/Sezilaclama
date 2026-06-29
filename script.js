
fiyat=2000;function hesapla() {
let hizmet = document.getElementById("hizmet").value;
...
switch(hizmet){
case "Hamam Böceği":
...
}
break;

case "Fare":
fiyat=2200;
break;

case "Karınca":
fiyat=1700;
break;

case "Pire":
fiyat=3000;
break;

case "Tahta Kurusu":
fiyat=4000;
break;

default:
fiyat=2000;

}

fiyat+=m2*8;

document.getElementById("sonuc").innerHTML=
"💰 Tahmini Fiyat: <br><b>"+fiyat.toLocaleString("tr-TR")+" TL</b><br><br>📞 Kesin fiyat için 0543 178 28 27";

}

document.querySelectorAll(".kart").forEach(kart=>{

kart.style.cursor="pointer";

kart.addEventListener("click",()=>{

kart.classList.remove("bug-anim");

void kart.offsetWidth;

kart.classList.add("bug-anim");

});

});
