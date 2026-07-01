const btn = document.getElementById("hesaplaBtn");

if (btn) {
  btn.addEventListener("click", () => {
    const ilce = document.getElementById("ilce").value;
    const m2 = parseInt(document.getElementById("metrekare").value);
    const sonuc = document.getElementById("sonuc");

    if (ilce === "") {
      sonuc.innerHTML = "⚠️ Lütfen ilçe seçiniz.";
      return;
    }

    if (!m2 || m2 <= 0) {
      sonuc.innerHTML = "⚠️ Lütfen metrekare giriniz.";
      return;
    }

    let fiyat = 1800;

    if (m2 > 50) fiyat += 500;
    if (m2 > 100) fiyat += 700;
    if (m2 > 150) fiyat += 900;
    if (m2 > 200) fiyat += 1200;

    sonuc.innerHTML = `
      <h2>💰 ${fiyat.toLocaleString("tr-TR")} TL</h2>
      <p>${ilce}</p>
      <p>${m2} m²</p>
      <p>Kesin fiyat ücretsiz keşif sonrası belirlenir.</p>
    `;
  });
}
