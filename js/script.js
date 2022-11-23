document.querySelector('.header__burger_open').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.add('header__nav--active');
    document.querySelector('body').classList.add('stop-scroll');
});

document.querySelector('.nav__close').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.remove('header__nav--active');
    document.querySelector('body').classList.remove('stop-scroll');
});

document.querySelector('.header__search-link').addEventListener('click', function() {
  document.querySelector('.search__wrap').classList.add('search__wrap--active');
});

document.querySelector('.search__close').addEventListener('click', function() {
  document.querySelector('.search__wrap').classList.remove('search__wrap--active');
});

const swiper = new Swiper('.main-block__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    speed: 300,
    pagination: {
      el: '.main-block__pagination',
      type: 'bullets',
      clickable: true
    }
  });

  document.querySelectorAll('.steps__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
  
      document.querySelectorAll('.steps__btn').forEach(function(btn){
        btn.classList.remove('steps__btn--active')});
        e.currentTarget.classList.add('steps__btn--active');
  
        document.querySelectorAll('.our-work__descr').forEach(function(tabsBtn){
          tabsBtn.classList.remove('our-work__descr--active')});
          document.querySelector(`[data-target="${path}"]`).classList.add('our-work__descr--active');
    });
  });

  new Accordion('.accordion__block', {
    elementClass: 'accordion',
    triggerClass: 'accordion__header',
    panelClass: 'accordion__content',
    activeClass: 'accordion--active'
  });