jQuery(document).ready(function($) {
    "use strict";
    watch($('.pace-progress'), 'width', function() {
        if (this.style.width > 99 + '%') {
            Pace.stop();
        };
    });
        /* ---------------------------------------------------------------------- */
    /* ---------------------- SWITCHER -------------------------------------- */
    /* ---------------------------------------------------------------------- */

    jQuery('#switch-panel').click(function() {
        if (jQuery(this).hasClass('show-panel')) {
            jQuery('.switcher').css({
                'left': '-40px'
            });
            jQuery('#switch-panel').removeClass('show-panel');
            jQuery('#switch-panel').addClass('hide-panel');
        } else if (jQuery(this).hasClass('hide-panel')) {
            jQuery('.switcher').css({
                'left': 0
            });
            jQuery('#switch-panel').removeClass('hide-panel');
            jQuery('#switch-panel').addClass('show-panel');
        }
    });
    jQuery('#switch-panel-responsive').click(function() {
        if (jQuery(this).hasClass('show-panel')) {
            jQuery('.switcher-responsive').css({
                'right': '-40px'
            });
            jQuery('#switch-panel-responsive').removeClass('show-panel');
            jQuery('#switch-panel-resposnive').addClass('hide-panel');
        } else if (jQuery(this).hasClass('hide-panel')) {
            jQuery('.switcher-responsive').css({
                'right': 0
            });
            jQuery('#switch-panel-resposnive').removeClass('hide-panel');
            jQuery('#switch-panel-responsive').addClass('show-panel');
        }
    });

    $('.blue').click(function() {
        $('#csscolors').attr('href', 'css/colors/blue.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.brown').click(function() {
        $('#csscolors').attr('href', 'css/colors/brown.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.cyan').click(function() {
        $('#csscolors').attr('href', 'css/colors/cyan.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.gray').click(function() {
        $('#csscolors').attr('href', 'css/colors/gray.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.green').click(function() {
        $('#csscolors').attr('href', 'css/colors/green.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.light-brown').click(function() {
        $('#csscolors').attr('href', 'css/colors/light-brown.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.light-green').click(function() {
        $('#csscolors').attr('href', 'css/colors/light-green.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    $('.orange').click(function() {
        $('#csscolors').attr('href', 'css/colors/orange.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });
    /* ---------------------------------------------------------------------- */
    /* --------------------------NEWS / RECENT ACTIVITY  -------------------- */
    /* ---------------------------------------------------------------------- */
    $("#marquee").marquee();
    /* ---------------------------------------------------------------------- */
    /* ------------------------------ MAGNIFIC POPUP ------------------------ */
    /* ---------------------------------------------------------------------- */
    $('.open_popup').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------ SKILLS -------------------------------- */
    /* ---------------------------------------------------------------------- */
    $('.bar-percentage[data-percentage]').each(function() {
        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));
        progress.text(percentage + '%');
        progress.siblings().children().css('width', percentage + '%');
    });
    /* ---------------------------------------------------------------------- */
    /* --------------------- SCROLL REINITIALISATION ------------------------ */
    /* ---------------------------------------------------------------------- */

    jQuery('.jspPane').bind('resize', function(e) {
        var pane = $('div.hs-content-wrapper > article')
        pane.jScrollPane({
            verticalGutter: 0,
            hideFocus: false,
            contentWidth: '0px'
        });
        var api = pane.data('jsp');
        api.reinitialise();

    });
    /* ---------------------------------------------------------------------- */
    /* --------------------- ABOUT SECTION TOGGLE CARD ---------------------- */
    /* ---------------------------------------------------------------------- */
    var menu_trigger = $("[data-card-front]");
    var back_trigger = $("[data-card-back]");

    menu_trigger.on('click', function() {
        $(".about-card").toggleClass("show-menu");
    });

    back_trigger.on('click', function() {
        $(".about-card").toggleClass("show-menu");
    });
    /* ---------------------------------------------------------------------- */
    /* ------------------------------- CONTACT ------------------------------ */
    /* ---------------------------------------------------------------------- */
    $("#submit_btn").on('click', function() {
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();

        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', 'red');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', 'red');
            proceed = false;
        }
        if (user_message == "") {
            $('textarea[name=message]').css('border-color', 'red');
            proceed = false;
        }
        if (proceed) {
            //data to be sent to server
            var post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userMessage': user_message
            };
            var output;
            //Ajax post data to server
            $.post('php/contact.php', post_data, function(response) {

                //load json data from server and output message     
                if (response.type == 'error') {
                    output = '<div class="error">' + response.text + '</div>';
                } else {
                    output = '<div class="success">' + response.text + '</div>';

                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
                }

                $("#result").hide().html(output).slideDown().delay(4000).slideUp();
            }, 'json');

        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").on('keyup', function() {
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });
    /* ---------------------------------------------------------------------- */
    /* --------------------------- PLACEHOLDER ------------------------------ */
    /* ---------------------------------------------------------------------- */
    $('input, textarea').placeholder();
    /* ---------------------------------------------------------------------- */
    /* --------------------------- RESPONSIVE SIDEBAR ----------------------- */
    /* ---------------------------------------------------------------------- */
    var content = $('.hs-menu nav').contents();
    $('#my-panel').jScrollPane();
    $(window).bind("load resize", function() {
        if ($(window).width() <= 755) {
            $('#my-link').panelslider({
                side: 'left',
                clickClose: false,
                duration: 200
            });
            content.appendTo('#my-panel');
        } else {
            $.panelslider.close();
            content.appendTo('.hs-menu nav');
        }
    });
    /* ---------------------------------------------------------------------- */
    /* ---------------------- NAVIGUATION ARROW KEYBOARD -------------------- */
    /* ---------------------------------------------------------------------- */
    $("body").on('keydown', function(e) {
        if (e.keyCode == 37) { // left
            $(".previous-page").click();
        } else if (e.keyCode == 39) { // right
            $(".next-page").click();;
        }
    });
    /* ---------------------------------------------------------------------- */
    /* --------------------- FIX SOME SAFARI BUGS  -------------------------- */
    /* ---------------------------------------------------------------------- */
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        var oldsldrwidth = $('.research-section .slider-details').width();
        $('.research-section .slider-details').width(oldsldrwidth - 100);
        $(window).bind("load resize", function() {
            if ($(window).width() > 755) {

                var heightdoc = $(document).height();
                $('.hs-content-wrapper').height(heightdoc - 47);
                var heightwrp = $('.hs-content-wrapper').height();
                $('.hs-content').height(heightwrp - 22);
                var pane = $('div.hs-content-wrapper > article')
                pane.jScrollPane({
                    verticalGutter: 0,
                    hideFocus: false,
                    contentWidth: '0px'
                });
                var api = pane.data('jsp');
                api.reinitialise();
            } else {
                $('.hs-content-wrapper').css('height', 'auto');

            }
        });
    }
    /* ---------------------------------------------------------------------- */
    /* -------------------------- TESTIMONIALS  ----------------------------- */
    /* ---------------------------------------------------------------------- */
    var testimonials = {};

    testimonials.slider = (function() {
        var currentItemIndex = 0,
            prevBtn = $('.prev-testimonial'),
            nextBtn = $('.next-testimonial'),
            items = (function() {
                var items = [];
                $('.testimonial').each(function() {
                    items.push($(this));
                });
                return items;
            })();

        function getCurrent() {
            $('.testimonial').each(function(index) {
                $(this).removeClass('current');
            });
            $('.testimonial').eq(currentItemIndex).addClass('current');
        }

        function greyOut(prevBtn, nextBtn) {
            if ($(prevBtn).hasClass('grey-out')) {
                $(prevBtn).removeClass('grey-out');
            }
            if ($(nextBtn).hasClass('grey-out')) {
                $(nextBtn).removeClass('grey-out');
            }
            if (currentItemIndex == 0) {
                $(prevBtn).addClass('grey-out');
            }
            if (currentItemIndex == items.length - 1) {
                $(nextBtn).addClass('grey-out');
            }
        }

        return {
            init: function(prevBtn, nextBtn) {
                items[currentItemIndex].addClass('current');
                greyOut(prevBtn, nextBtn);
                $(prevBtn).click(function() {
                    if (currentItemIndex > 0) {
                        currentItemIndex--;
                    }
                    getCurrent();
                    greyOut(prevBtn, nextBtn);
                });
                $(nextBtn).click(function() {
                    if (currentItemIndex < items.length - 1) {
                        currentItemIndex++;
                    }
                    getCurrent();
                    greyOut(prevBtn, nextBtn);
                });
            }
        };

    })();

    testimonials.slider.init('.prev-testimonial', '.next-testimonial');
    /* ---------------------------------------------------------------------- */
    /* ----------------------------- PROCESS  ------------------------------- */
    /* ---------------------------------------------------------------------- */

    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;

    $(".next").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        $("#progressbar li").eq($(".proceess").index(next_fs)).addClass("active");

        next_fs.show();

        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = (now * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });
    });

    $(".previous").click(function() {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        $("#progressbar li").eq($(".proceess").index(current_fs)).removeClass("active");

        previous_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1 - now) * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'left': left
                });
                previous_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });
    });
});
