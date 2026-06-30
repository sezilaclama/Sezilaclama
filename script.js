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
