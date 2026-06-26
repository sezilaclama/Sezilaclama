
function hesapla() {

    const mekan = document.getElementById("mekan").value;
    const zararli = document.getElementById("zararli").value;
    const zararliFiyat = Number(document.getElementById("zararli").value);
const ilceFiyat = Number(document.getElementById("ilce").value);
    const alan = Number(document.getElementById("alan").value);

    let fiyat = 0;

    if (mekan === "ev") {
        fiyat = 2000;
    } else if (mekan === "isyeri") {
        fiyat = 3000;
    } else {
        document.getElementById("sonuc").innerHTML =
        "<p style='color:red;'>Lütfen mekan türünü seçiniz.</p>";
        return;
    }

  fiyat += alan;
  fiyat += zararliFiyat;
  fiyat += ilceFiyat;

    const formatliFiyat = fiyat.toLocaleString("tr-TR");

    const mesaj =
`Merhaba.

Web sitenizdeki fiyat hesaplama aracını kullandım.

🏠 Mekan: ${mekan === "ev" ? "Ev" : "İş Yeri"}
🪳 Zararlı: ${
const zararliFiyat = Number(document.getElementById("zararli").value);

const ilceFiyat = Number(document.getElementById("ilce").value);
].text
}
📐 Alan: ${document.getElementById("alan").options[document.getElementById("alan").selectedIndex].text}

💰 Tahmini Fiyat: ${formatliFiyat} TL

Bilgi almak istiyorum.`;

    const whatsapp =
"https://wa.me/905431782827?text=" + encodeURIComponent(mesaj);

    document.getElementById("sonuc").innerHTML = `
        <div style="
            margin-top:30px;
            background:#ffffff;
            padding:25px;
            border-radius:15px;
            box-shadow:0 5px 20px rgba(0,0,0,.15);
            text-align:center;
        ">
            <h2 style="color:#0f766e;">💰 Tahmini Fiyat</h2>

            <h1 style="font-size:42px;color:#14b8a6;">
                ${formatliFiyat} TL
            </h1>

            <p>✅ Aynı Gün Servis</p>
            <p>✅ Profesyonel Uygulama</p>
            <p>✅ İstanbul Geneli Hizmet</p>

            <p style="margin-top:15px;font-size:14px;color:#666;">
                * Kesin fiyat, ücretsiz keşif veya telefonda alınacak bilgiler doğrultusunda belirlenmektedir.
            </p>

            <a href="${whatsapp}"
               target="_blank"
               style="
                display:inline-block;
                margin-top:20px;
                background:#25D366;
                color:white;
                padding:15px 30px;
                text-decoration:none;
                border-radius:40px;
                font-weight:bold;
               ">
               📲 WhatsApp'tan Teklif Al
            </a>
        </div>
    `;
}
