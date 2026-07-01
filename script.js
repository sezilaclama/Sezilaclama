/* =========================
   YORUMLAR
========================= */
.yorumlar{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:25px;
    margin-top:30px;
}

.yorum{

    background:rgba(255,255,255,.08);

    border:1px solid rgba(255,255,255,.15);

    backdrop-filter:blur(10px);

    border-radius:20px;

    padding:25px;

    transition:.3s;

}

.yorum:hover{

    transform:translateY(-8px);

    box-shadow:0 15px 40px rgba(0,255,136,.35);

}

/* =========================
   İLETİŞİM
========================= */

#iletisim{

    text-align:center;

}

#iletisim p{

    font-size:20px;

    margin:10px 0;

}

/* =========================
   FOOTER
========================= */

footer{

    background:#0a0a0a;

    text-align:center;

    padding:30px;

    color:#aaa;

}

/* =========================
   MOBİL
========================= */

@media(max-width:768px){

.hero-content h1{

font-size:34px;

}

.hero-content p{

font-size:18px;

}

.navbar{

padding:15px;

flex-direction:column;

gap:12px;

}

.menu{

flex-wrap:wrap;

justify-content:center;

gap:12px;

}

.logo{

font-size:24px;

}

.btn{

width:100%;

max-width:280px;

text-align:center;

}

.cam-kutu{

padding:25px;

}

h2{

font-size:30px;

}

}
