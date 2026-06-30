function hesapla() {

    const ilce = document.getElementById("ilce").value;
    const m2 = parseInt(document.getElementById("metrekare").value);

    if (isNaN(m2) || m2 <= 0) {
        document.getElementById("sonuc").innerHTML =
        "⚠️ Lütfen metrekare giriniz.";
        return;
    }

    let fiyat = 1800;

    if (m2 <= 50) fiyat = 1800;
    else if (m2 <= 100) fiyat = 2200;
    else if (m2 <= 150) fiyat = 2800;
    else if (m2 <= 200) fiyat = 3400;
    else if (m2 <= 300) fiyat = 4200;
    else fiyat = 5000;

    if (["Silivri","Şile","Çatalca","Arnavutköy"].includes(ilce)) {
        fiyat += 500;
    }

    document.getElementById("sonuc").innerHTML = `
        <h3>💰 Tahmini Fiyat: ${fiyat.toLocaleString("tr-TR")} TL</h3>
        <p>📍 İlçe: <b>${ilce}</b></p>
        <p>📐 Metrekare: <b>${m2} m²</b></p>
        <p>📞 Kesin fiyat için <b>0543 178 28 27</b> numarasını arayın.</p>
    `;
}
// Hamam böceği
const bug = document.getElementById("bug");

if (bug) {
  bug.addEventListener("click", () => {

    bug.style.position = "fixed";

    let sayi = 0;

    const hareket = setInterval(() => {

      bug.style.left = Math.random() * (window.innerWidth - 100) + "px";
      bug.style.top = Math.random() * (window.innerHeight - 100) + "px";

      sayi++;

      if (sayi > 25) clearInterval(hareket);

    }, 200);

  });
}

// Sinek
const fly = document.getElementById("fly");

if (fly) {
  fly.addEventListener("click", () => {

    fly.animate(
      [
        { transform: "translate(0,0)" },
        { transform: "translate(250px,-120px)" },
        { transform: "translate(-150px,-260px)" },
        { transform: "translate(300px,-400px)" }
      ],
      {
        duration: 3000,
        iterations: 1
      }
    );

  });
}

// Fare
const mouse = document.getElementById("mouse");

if (mouse) {
  mouse.addEventListener("click", () => {

    mouse.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(300px)" }
      ],
      {
        duration: 1000,
        iterations: 1
      }
    );

  });
}
document.querySelectorAll(".hayvan").forEach(h => {
    h.addEventListener("click", function () {
        this.classList.remove("kac");
        void this.offsetWidth;
        this.classList.add("kac");
    });
});
// Hamam böceği
const bocek = document.getElementById("bocek");

let bx = 20;
let by = 120;
let dx = 2;
let dy = 1.5;

setInterval(() => {
    if (bocek) {
        bx += dx;
        by += dy;

        if (bx > window.innerWidth - 80 || bx < 0) dx *= -1;
        if (by > window.innerHeight - 80 || by < 0) dy *= -1;

        bocek.style.left = bx + "px";
        bocek.style.top = by + "px";
    }
},20);

// Fare
const fare = document.getElementById("fare");

let fx = -100;

setInterval(() => {
    if (fare) {
        fx += 5;

        if (fx > window.innerWidth + 100)
            fx = -100;

        fare.style.left = fx + "px";
    }
},20);

// Sinek
const sinek = document.getElementById("sinek");

let angle = 0;

setInterval(() => {
    if (sinek) {
        angle += 0.15;

        sinek.style.left =
            150 + Math.sin(angle*2)*120 + "px";

        sinek.style.top =
            150 + Math.cos(angle*3)*70 + "px";
    }
},20);
// Dokununca kaçma efekti
function kac(eleman){
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);

    eleman.style.left = x + "px";
    eleman.style.top = y + "px";

    // Destekleyen telefonlarda titreşim
    if (navigator.vibrate) navigator.vibrate(80);
}

document.getElementById("bocek").onclick = function(){
    kac(this);
};

document.getElementById("fare").onclick = function(){
    kac(this);
};

document.getElementById("sinek").onclick = function(){
    kac(this);
};
