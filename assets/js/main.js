/*
Template Name: Craft - Startup Landing Page Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    setTimeout(function () {
        window.onscroll = function () {
            var header_navbar = document.querySelector(".navbar-area");
            var sticky = header_navbar.offsetTop;

            var logo = document.querySelector('.navbar-brand img')
            if (window.pageYOffset > sticky) {
                header_navbar.classList.add("sticky");
                logo.src = '../../assets/images/logo/logo-1.png';
            } else {
                header_navbar.classList.remove("sticky");
                logo.src = '../../assets/images/logo/white-logo-1.png';
            }

            // show or hide the back-top-top button
            var backToTo = document.querySelector(".scroll-top");
            var callUs = document.querySelector(".scroll-top2");
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                backToTo.style.display = "flex";
                callUs.style.display = "flex";
            } else {
                backToTo.style.display = "none";
                callUs.style.display = "none";
            }
        };

        // WOW active
        new WOW().init();

        //===== mobile-menu-btn
        let navbarToggler = document.querySelector(".mobile-menu-btn");
        navbarToggler.addEventListener('click', function () {
            navbarToggler.classList.toggle("active");
        });

        //======= portfolio-btn active
        var elements = document.getElementsByClassName("portfolio-btn");
        for (var i = 0; i < elements.length; i++) {
            elements[i].onclick = function () {

                // remove class from sibling

                var el = elements[0];
                while (el) {
                    if (el.tagName === "BUTTON") {
                        //remove class
                        el.classList.remove("active");

                    }
                    // pass to the new sibling
                    el = el.nextSibling;
                }

                this.classList.add("active");
            };
        }
    }, 400);
})();

if (document.getElementById('wa-button')) {
    document.getElementById('wa-button').addEventListener('click', function () {
        document.getElementById('wa-button').target = "_blank";
        var title = document.querySelector('.post-title').innerText;
        var author = document.querySelector('.meta-info li:nth-child(1) a').innerText.replace('Penulis: ', '');
        var price = document.querySelector('.harga div').innerText;
    
        var message = `Saya mau pesan buku ini,\n\nJudul: ${title}\nPenulis: ${author}\nHarga: ${price}`;
        var encodedMessage = encodeURIComponent(message);
        var waUrl = `https://wa.me/6289514703132?text=${encodedMessage}`;
    
        window.location.href = waUrl;
    });
}

setTimeout(() => {
    document.getElementById('thisYear').textContent = new Date().getFullYear();
}, 1000);
