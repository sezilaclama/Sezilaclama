// =========================
// SEZ İLAÇLAMA V2
// =========================

// Fiyat Hesaplama

const hesaplaBtn = document.getElementById("hesaplaBtn");

if (hesaplaBtn) {

hesaplaBtn.addEventListener("click", function () {

const ilce = document.getElementById("ilce").value;

const m2 = parseInt(document.getElementById("metrekare").value);

const sonuc = document.getElementById("sonuc");

if (!m2 || m2 <= 0) {

sonuc.innerHTML = "⚠️ Lütfen metrekare giriniz.";

return;

}

let fiyat = 1800;

if (m2 > 50) fiyat += 400;
if (m2 > 100) fiyat += 600;
if (m2 > 150) fiyat += 800;
if (m2 > 200) fiyat += 1000;

sonuc.innerHTML = `
<h3>💰 ${fiyat.toLocaleString("tr-TR")} TL</h3>
<p>${ilce}</p>
<p>${m2} m²</p>
`;

});

}

// =========================
// Hamam Böceği
// =========================

const bocek = document.getElementById("bocek");

if (bocek) {

let x = 50;
let y = 150;

let dx = 2;
let dy = 1.5;

setInterval(() => {

x += dx;
y += dy;

if (x < 0 || x > window.innerWidth - 90)
dx *= -1;

if (y < 0 || y > window.innerHeight - 90)
dy *= -1;

bocek.style.left = x + "px";
bocek.style.top = y + "px";

},20);

}// =========================
// Uçan Sinek
// =========================

const sinek = document.getElementById("sinek");

if (sinek) {

let a = 0;

setInterval(() => {

a += 0.08;

const x = 250 + Math.sin(a * 2) * 180;
const y = 180 + Math.cos(a * 3) * 120;

sinek.style.left = x + "px";
sinek.style.top = y + "px";

},20);

}

// =========================
// Koşan Fare
// =========================

const fare = document.getElementById("fare");

if (fare) {

let x = -120;

setInterval(() => {

x += 4;

if (x > window.innerWidth + 120) {
x = -120;
}

fare.style.left = x + "px";

},20);

}

// =========================
// Dokununca Kaç
// =========================

function kac(eleman){

const x = Math.random() * (window.innerWidth - 120);

const y = Math.random() * (window.innerHeight - 120);

eleman.style.left = x + "px";
eleman.style.top = y + "px";

if (navigator.vibrate) {
navigator.vibrate(80);
}

}

if (bocek) bocek.onclick = () => kac(bocek);
if (sinek) sinek.onclick = () => kac(sinek);
if (fare) fare.onclick = () => kac(fare);
// =========================
// Zararlıyı Yakala Oyunu
// =========================

let puan = 0;

const puanKutusu = document.createElement("div");
puanKutusu.id = "puanKutusu";
puanKutusu.style.position = "fixed";
puanKutusu.style.top = "15px";
puanKutusu.style.right = "15px";
puanKutusu.style.background = "#00c853";
puanKutusu.style.color = "#fff";
puanKutusu.style.padding = "12px 18px";
puanKutusu.style.borderRadius = "12px";
puanKutusu.style.fontWeight = "bold";
puanKutusu.style.zIndex = "99999";
puanKutusu.innerHTML = "🎯 Puan: 0";

document.body.appendChild(puanKutusu);

function yakala(eleman){

    puan += 10;

    puanKutusu.innerHTML = "🎯 Puan: " + puan;

    kac(eleman);

    if(navigator.vibrate){
        navigator.vibrate([50,50,50]);
    }

    if(puan >= 100){
        alert("🏆 Tebrikler! Tüm zararlıları yakaladınız.");
        puan = 0;
        puanKutusu.innerHTML = "🎯 Puan: 0";
    }
}

if(bocek){
    bocek.onclick = ()=>yakala(bocek);
}

if(sinek){
    sinek.onclick = ()=>yakala(sinek);
}

if(fare){
    fare.onclick = ()=>yakala(fare);
}
