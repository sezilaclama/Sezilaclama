function hesapla() {

    let hizmet = document.getElementById("hizmet").value;
    let ilce = document.getElementById("ilce").value;
    let m2 = parseInt(document.getElementById("metrekare").value);

    if (isNaN(m2) || m2 <= 0) {
        document.getElementById("sonuc").innerHTML =
            "Lütfen geçerli bir metrekare giriniz.";
        return;
    }

    let fiyat = 0;

    switch (hizmet) {
        case "Hamam Böceği":
            fiyat = 2000;
            break;
        case "Fare":
            fiyat = 2200;
            break;
        case "Karınca":
            fiyat = 1700;
            break;
        case "Pire":
            fiyat = 3000;
            break;
        case "Tahta Kurusu":
            fiyat = 4000;
            break;
    }

    if (
        ilce === "Beylikdüzü" ||
        ilce === "Esenyurt" ||
        ilce === "Avcılar"
    ) {
        fiyat += 300;
    }

    fiyat += m2 * 8;

    document.getElementById("sonuc").innerHTML =
        "💰 Tahmini Fiyat: <br><b>" +
        fiyat.toLocaleString("tr-TR") +
        " TL</b><br><br>📞 Kesin fiyat için <b>0543 178 28 27</b>";
}

document.querySelectorAll(".kart").forEach((kart) => {

    kart.style.cursor = "pointer";

    kart.addEventListener("click", () => {

        kart.classList.remove("bug-anim");

        void kart.offsetWidth;

        kart.classList.add("bug-anim");

    });

});
