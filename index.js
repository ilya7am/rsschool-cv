jQuery(($) => {                                                /*  бургер-меню исчезает по клику */
    const menu = $('.information');
    const menuBtn = $('.menu__btn');

    $(document).mouseup(function (e) {
        console.log(e.target) 
        if(window.matchMedia('(max-width: 1197px)').matches) {           /*  код работает при опред. разрешении экрана - с планшетов */
        if (e.target.className === 'menu__btn') {
            menuBtn.addClass('is-active');
            menu.stop().slideDown();
        } else if (e.target.className === 'menu__btn is-active') {
            menuBtn.removeClass('is-active');
            menu.stop().slideUp();
        } else if ((menu.has(e.target).length === 0) && (menuBtn.has(e.target).length === 0)) {
                menuBtn.removeClass('is-active');
                menu.stop().slideUp();
        }
    }
    });

});