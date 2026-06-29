document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll(".kart, .yorum, .stat-box, .hero");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.2
    });

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "all .8s ease";
        observer.observe(item);
    });

});

});
