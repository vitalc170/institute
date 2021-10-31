(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {
        //Owl Carousel for banner area
        $('.slider-wrapp').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

        });

        //toggled menu header
        $('.toggle-menu-btn').click(function (e) {
            e.preventDefault();
            $('.menu-items-mobile').toggleClass('show', 1000, 'easeInOutQuad');
            $('.header_area').toggleClass('show');
        });


        // Owl Carousel for Latest Course
        $('.all_latest_course').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });


        // Owl Carousel for Testimonial
        var testimonial = $('.all_testimonial');
        testimonial.owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            items: 1,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX'
        });

        $('.testi_next').click(function () {
            testimonial.trigger('next.owl.carousel');
        })

        $('.testi_prev').click(function () {
            testimonial.trigger('prev.owl.carousel');
        })

        // Owl Carousel for partners
        $('.all_partners').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 2
                },
                992: {
                    items: 4

                }
            }
        });

        // Owl Carousel for Alumni Photos
        $('.all_alumni_carousel_item').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });

        // jQuery counter
        $('.counter').counterUp({
            delay: 50,
            time: 3000
        });

        $('.search-submit').val('');

        var currentPage = $('.current-page-num').attr('id');
        $('.' + currentPage + '').addClass('active');


        $(".wide-page-mob a").click(function (e){
           e.preventDefault();
           $("ul.wide-page-list").toggleClass("show");
        });



    });


}(jQuery));	