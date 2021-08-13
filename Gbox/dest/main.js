$(document).ready(function() {

    /*tag Langding  Page*/
    function tag() {
        let tagText = $('.project__list .tag');
        let tagGrid = $('.cards');
        tagText.on('click', function(e) {
            e.preventDefault();
            let i = $(this).index();
            // console.log(i);
            $(this).addClass('active').siblings().removeClass('active');
            tagGrid.eq(i).addClass('active').siblings().removeClass('active');
        });
    }
    tag();



    /*Back to top */
    $(".copyright img").click(function() {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    /*Nav menu */


    function nav() {
        let btnMenu = document.querySelector('.btn__hamburger');
        let rotate = document.querySelector('.btn__hamburger');
        let nav = document.querySelector('nav');
        btnMenu.addEventListener('click', function() {

            rotate.classList.toggle('active');

            nav.classList.toggle("active");
        });
    }
    nav();
    //flickity Project
    function project() {
        $('.main-carousel').flickity({
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            // prevNextButtons: false,
            pageDots: false,
            fullscreen: true,
        });
        $('.btn-slider.next').on('click', function() {
            $('.main-carousel').flickity('next');
        });
        // previous wrapped
        $('.btn-slider.prev').on('click', function() {
            $('.main-carousel').flickity('previous', true);
        });

        // $('.main-carousel').flickity('viewFullscreen')
        $('.fullscreen').on('click', function() {
            $('.main-carousel').flickity('viewFullscreen');

        });
        $('.carousel img').on('click', function() {
            $('.main-carousel').flickity('viewFullscreen');

        });
    }
    project();
    //flickity Studio-Detail
    function studioDetail() {
        $('.main-carousel').flickity({
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            // prevNextButtons: false,
            pageDots: false,
            fullscreen: true,
        });
        $('.btn.next').on('click', function() {
            $('.main-carousel').flickity('next');
        });
        // previous wrapped
        $('.btn.prev').on('click', function() {
            $('.main-carousel').flickity('previous', true);
        });

        // $('.main-carousel').flickity('viewFullscreen')
        $('.fullscreen').on('click', function() {
            $('.main-carousel').flickity('viewFullscreen');
        });
    }
    studioDetail();

    //đổi màu svg
    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {

            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);

        }, 'xml');

    });
    /*Change number studio -Rental page */

    let changeStudio = document.querySelectorAll('.btn-number');

    changeStudio.forEach(function(itemstd, index) {

        itemstd.addEventListener('click', function() {
            changeStudio.forEach(function(tag1) {
                tag1.classList.remove('active');
            });
            this.classList.add('active');

        })
    })
});