function hesapla() {
    const ilce = document.getElementById("ilce").value;
    const m2 = parseInt(document.getElementById("metrekare").value);

    if (!m2 || m2 <= 0) {
        document.getElementById("sonuc").innerHTML = "⚠️ Lütfen geçerli bir metrekare giriniz.";
        return;
    }

    let fiyat = 0;

    // İlçe bazlı ek ücret
    if (["Silivri", "Şile", "Çatalca", "Arnavutköy"].includes(ilce)) {
        fiyat += 500;
    }

    // Metrekare bazlı ücret
    if (m2 <= 50) fiyat += 1800;
    else if (m2 <= 100) fiyat += 2200;
    else if (m2 <= 150) fiyat += 2800;
    else if (m2 <= 200) fiyat += 3400;
    else if (m2 <= 300) fiyat += 4200;
    else fiyat += 5000;

    document.getElementById("sonuc").innerHTML = `
        <h3>💰 Tahmini Fiyat: ${fiyat.toLocaleString("tr-TR")} TL</h3>
        <p>📍 İlçe: <b>${ilce}</b></p>
        <p>📐 Metrekare: <b>${m2} m²</b></p>
        <p>📞 Kesin fiyat için: <b>0543 178 28 27</b></p>
    `;
}
