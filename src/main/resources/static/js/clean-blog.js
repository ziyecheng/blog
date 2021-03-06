// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    if(Remarkable){
        var md = new Remarkable({
            html: false,    // Enable HTML tags in source
            xhtmlOut: true,    // Use '/' to close single tags (<br />)
            breaks: false,    // Convert '\n' in paragraphs into <br>
            langPrefix: 'line-numbers language-',    // CSS language prefix for fenced blocks
            linkify: true    // Autoconvert URL-like text to links
        });

        if($('.post-subtitle').length > 0){
            $('.post-subtitle').html( md.render($('.post-subtitle').html()) );
        }

        if($('#post-content').length > 0){
            $('#post-content').html( md.render($('#post-content').html()) );
        }
    }

});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function ($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function () {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
});

/**
 * 登录
 */
function signin(){
$.post('/admin/signin', $(".form-signin").serialize(), function (result) {
    if(result && result.success){
        window.location.href = "/admin/index";
    } else{
        if(result){
            alert(result.msg);
        } else {
            alert('登录失败');
        }
    }
});
}
