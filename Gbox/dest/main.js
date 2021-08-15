$(document).ready(function() {

    /*loader*/
    // $(window).on("load", () => {
    //     setTimeout(() => {
    //         $('.onloadpage').removeClass('active');
    //         $('body').removeClass('active');
    //     }, 1500);
    // });
    function loader() {
        let onloadpage = $('.onloadpage');
        let body = $('body');
        setTimeout(function() {
            onloadpage.css("display", "none");
            body.removeClass('active');
        }, 1500);
    }
    loader()


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

    //flickity Cafe
    function cafe() {
        $('.gallery-carousel').flickity({
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            fullscreen: false,
        });
        $('.btn.next').on('click', function() {
            $('.gallery-carousel').flickity('next');
        });
        // previous wrapped
        $('.btn.prev').on('click', function() {
            $('.gallery-carousel').flickity('previous', true);
        });

        // $('.main-carousel').flickity('viewFullscreen')
        $('.fullscreen').on('click', function() {
            $('.gallery-carousel').flickity('viewFullscreen');

        });
        $('.carousel img').on('click', function() {
            $('.gallery-carousel').flickity('viewFullscreen');

        });
    }
    cafe();

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




    var initPhotoSwipeFromDOM = function(gallerySelector) {
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;
            for (var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i]; // <figure> element
                if (figureEl.nodeType !== 1) {
                    continue;
                }
                linkEl = figureEl.children[0]; // <a> element
                size = linkEl.getAttribute('data-size').split('x');
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
                if (figureEl.children.length > 1) {
                    item.title = figureEl.children[1].innerHTML;
                }
                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }
                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }
            return items;
        };
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var eTarget = e.target || e.srcElement;
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }
                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
                params = {};
            if (hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
            items = parseThumbnailElements(galleryElement);
            options = {
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function(index) {
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                },
                showAnimationDuration: 0,
                hideAnimationDuration: 0
            };
            if (fromURL) {
                if (options.galleryPIDs) {
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            if (isNaN(options.index)) {
                return;
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };

    initPhotoSwipeFromDOM('.list-carousel');


});