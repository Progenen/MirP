
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
    var mySwiper = new Swiper('.swiper-banner', {
        speed: 400,
        spaceBetween: 100,
        loop: true,
        autoplay: {
            delay: 3000,
          },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });
    var mySwiper = new Swiper('.swiper-home', {
        speed: 300,
        resistanceRatio: 1,
        spaceBetween: 30,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.home-pagination',
            dynamicBullets: true,
            dynamicMainBullets: 6,
            clickable: true,
          },
    });

    const results = document.querySelector('.search-results');
    const search = document.querySelector('.search-panel');
    const searchClear = document.querySelector('.header-search__clear');
    const searchBtn = document.querySelector('.header-search__btn');

    function searchClose() {
        search.value = '';
        search.classList.remove('active'); 
        searchBtn.classList.remove('active');
        searchClear.style.display = 'none';
    }

    search.addEventListener('click', ()=> {
        searchClear.style.display = 'block';
        search.classList.add('active'); 
        searchBtn.classList.add('active');
        searchClear.addEventListener('click', (e)=> {
            e.preventDefault();
            searchClose();
        });
    });
    

    
    $("a#gallery").fancybox();

// Для блока подсказок

    

