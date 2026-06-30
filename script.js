// =======================
// SEZ İLAÇLAMA
// script.js
// =======================

// FİYAT HESAPLAMA

const btn = document.getElementById("hesaplaBtn");

if (btn) {

btn.addEventListener("click", () => {

const ilce = document.getElementById("ilce").value;

const m2 = Number(document.getElementById("metrekare").value);

const sonuc = document.getElementById("sonuc");

if (ilce === "") {

sonuc.innerHTML = "⚠️ İlçe seçiniz.";

return;

}

if (m2 <= 0) {

sonuc.innerHTML = "⚠️ Metrekare giriniz.";

return;

}

let fiyat = 1800;

if (m2 > 50) fiyat += 500;
if (m2 > 100) fiyat += 700;
if (m2 > 150) fiyat += 900;
if (m2 > 200) fiyat += 1200;

sonuc.innerHTML = `

<h3>💰 ${fiyat.toLocaleString("tr-TR")} TL</h3>

<p>${ilce}</p>

<p>${m2} m²</p>

`;

});

}// =======================
// HAREKETLİ ZARARLILAR
// =======================

const bocek = document.getElementById("bocek");
const fare = document.getElementById("fare");
const sinek = document.getElementById("sinek");

// Hamam böceği
if (bocek) {

let x = 40;
let y = 180;

let dx = 2;
let dy = 1.5;

setInterval(() => {

x += dx;
y += dy;

if (x < 0 || x > window.innerWidth - 80) dx *= -1;
if (y < 0 || y > window.innerHeight - 80) dy *= -1;

bocek.style.left = x + "px";
bocek.style.top = y + "px";

}, 25);

}

// Fare
if (fare) {

let fx = -100;

setInterval(() => {

fx += 5;

if (fx > window.innerWidth + 100) {
fx = -100;
}

fare.style.left = fx + "px";

}, 20);

}

// Sinek
if (sinek) {

let a = 0;

setInterval(() => {

a += 0.08;

sinek.style.left =
200 + Math.sin(a * 2) * 140 + "px";

sinek.style.top =
180 + Math.cos(a * 3) * 80 + "px";

}, 20);

}// =======================
// DOKUNUNCA KAÇ + PUAN
// =======================

let puan = 0;

const puanKutusu = document.createElement("div");

puanKutusu.innerHTML = "🎯 Puan : 0";

puanKutusu.style.position = "fixed";
puanKutusu.style.top = "20px";
puanKutusu.style.right = "20px";
puanKutusu.style.background = "#00c853";
puanKutusu.style.color = "#fff";
puanKutusu.style.padding = "12px 20px";
puanKutusu.style.borderRadius = "10px";
puanKutusu.style.fontWeight = "bold";
puanKutusu.style.zIndex = "99999";

document.body.appendChild(puanKutusu);

function kac(eleman){

const x = Math.random()*(window.innerWidth-120);

const y = Math.random()*(window.innerHeight-120);

eleman.style.left = x+"px";

eleman.style.top = y+"px";

puan +=10;

puanKutusu.innerHTML="🎯 Puan : "+puan;

if(navigator.vibrate){
navigator.vibrate(80);
}

if(puan>=100){

alert("🏆 Tebrikler! Tüm zararlıları yakaladınız.");

puan=0;

puanKutusu.innerHTML="🎯 Puan : 0";

}

}

if(bocek) bocek.onclick=()=>kac(bocek);

if(fare) fare.onclick=()=>kac(fare);

if(sinek) sinek.onclick=()=>kac(sinek);
