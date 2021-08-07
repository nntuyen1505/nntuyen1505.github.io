$(document).ready(function() {
    function meet() {
        let $carousel1 = $('.meet__slider-list');
        $carousel1.flickity({
            // options
            cellAlign: 'left',
            contain: true,
            // freeScroll: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            imagesLoaded: true,
            lazyLoad: 3,
        });

        $('.meet__slider .control-btn.left').on('click', function() {
            $carousel1.flickity('previous');
        })

        $('.meet__slider .control-btn.right').on('click', function() {
            $carousel1.flickity('next');
        })
    }

    function aarhus() {
        let $carousel2 = $('.aarhus .img');
        $carousel2.flickity({
            // options
            cellAlign: 'left',
            contain: true,
            // freeScroll: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            imagesLoaded: true,
            lazyLoad: 2,
            on: {
                ready: function() {
                    // let dotted = $('.flickity-page-dots');
                    // paging = $('.paging .paging__dotted ');
                    // dotted.appendTo(paging);
                },
                change: function(index) {
                    $('.ct').removeClass('active');
                    $('.ct-' + (index + 1)).addClass('active');
                }
            }
        });

        $('.aarhus .control-btn.left').on('click', function() {
            $carousel2.flickity('previous');
        })

        $('.aarhus .control-btn.right').on('click', function() {
            $carousel2.flickity('next');
        })
    }
    meet();
    aarhus();


    /*Show video-background*/
    function showVideo() {
        let videoBackground = $('.videobackground');
        let imgBackground = $('imgbackground');
        setTimeout(function() {
            imgBackground.css("display", "none");
            videoBackground.css("display", "block");
        }, 3000);
    }
    showVideo();



    /*Back to top*/
    let totop = $('.totop');

    function showToTop() {
        let postionScroll = $(window).scrollTop();
        let postionArrhus = $('.aarhus').offset().top;

        if (postionScroll > postionArrhus) {
            totop.addClass('active');
        } else {
            totop.removeClass('active');
        }
    }

    function BackToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    totop.on('click', BackToTop);

    /*Show Background Header */
    let header = $('header');
    let heightHeader = header.outerHeight(); //Lấy giá trị chiều cao của thành phần phù hợp, chiều cao này bao gồm border, padding.

    function changeBgHeader() {
        let postionScroll = window.pageYOffset;
        let bannerText = $('.backround__header-text');
        let heightBannerText = bannerText.offset().top;
        if (postionScroll > heightBannerText - heightHeader) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
    }
    /*Nav menu */
    let headerNav = $('.header__nav .header__nav-hamburger');
    let navMenu = $('nav');
    let body = $('body');

    function navmenu() {
        headerNav.click(function(e) {
            headerNav.toggleClass('active');
            navMenu.toggleClass('active');
            body.toggleClass('active');
        });
    }
    navmenu();

    // scroll auto menu - > section
    let menus = $('header .header__current-list li a');
    let submenus = $('footer .menu__footer li a');
    let sections = [];
    let subsections = [];

    function removeActiveMenu() {
        menus.each(function(index) {
            $(this).removeClass('active');
        })
        submenus.each(function(index) {
            $(this).removeClass('active');
        })
    }

    menus.each(function(index) {
        let className = $(this).attr('href').replace('#', '');
        let section = $('.' + className);
        sections.push(section);
        $(this).on('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: section.offset().top - heightHeader + 1,
            });
            removeActiveMenu();
            $(this).addClass('active');
        })
    })

    submenus.each(function(index) {
        let className = $(this).attr('href').replace('#', '');
        let subsection = $('.' + className);
        subsections.push(subsection);
        $(this).on('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: subsection.offset().top - heightHeader + 1,
            });
            removeActiveMenu();
            $(this).addClass('active');
        })
    })

    function ActiveMenu() {
        let postionScroll = $(window).scrollTop();
        $.each(sections, function(index, value) {
            if (postionScroll > value.offset().top - heightHeader && postionScroll < value.offset().top + value.outerHeight()) {
                removeActiveMenu();
                menus.eq(index).addClass('active');
            } else {
                menus.eq(index).removeClass('active');
            }
        })
    }

    $(window).on('scroll', function() {
        showToTop();
        changeBgHeader();
        ActiveMenu()
    });



    /*AOS */
    AOS.init();

});