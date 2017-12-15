/*Add/remove class on scroll*/
var fixScrollNav = function (options) {
    // Target declaration
    var target = options.target;

    // offset and offsetHeight declaration
    var offset = options.offset;
    var offsetHeight = 0;

    if (isNaN(offset)) {
        offsetHeight = $(offset).outerHeight();
    } else {
        offsetHeight = offset;
    }

    if (options.minusHeader === true) {
        offsetHeight = offsetHeight - $(target).outerHeight();
    } else {
        return true;
    }

    if ($(window).scrollTop() > offsetHeight) {
        $(target).addClass("scrollFixed");
    } else {
        $(target).removeClass("scrollFixed");
    }
};

var setActive = function(className){
    var path= window.location.pathname,
        page = path.substring(path.lastIndexOf("/") + 1).split(".")[0];
    $("#page_"+page).addClass(className);
    
}

var setFooterLogo = function(){
    var gap = ($(".footer-logo img").outerHeight() / 2).toFixed(0);
    $("footer").css({
        "margin-top": gap,
        "padding-top": gap
    });
}


/* Initiation of function on window scroll */
$(window).scroll(function () {
    // Add class on scroll
    fixScrollNav({
        target: 'header',
        offset: '.banner-gap',
        minusHeader: true
    });
});

$(document).ready(function () {
    $("#navigation-toggle").on("click", function () {
        if ($(this).hasClass("closeMenu")) {
            $(this).toggleClass("closeMenu openMenu");
            $(this).find(".sortIcon").addClass("hidden");
            $(this).find(".clearIcon").removeClass("hidden");
            $("#main-navigation").addClass("active");
            $("body").addClass("active");
        } else {
            $(this).toggleClass("closeMenu openMenu");
            $(this).find(".sortIcon").removeClass("hidden");
            $(this).find(".clearIcon").addClass("hidden");
            $("#main-navigation").removeClass("active");
            $("body").removeClass("active");
        }
    });

    $(function () {
        var body = $('#home-banner');
        var backgrounds =new Array(
        'url(http://grandetest.com/theme/agra-html/images/sliders/img01.jpg)',
        'url(http://grandetest.com/theme/agra-html/images/sliders/img02.jpg)',
        'url(http://grandetest.com/theme/agra-html/images/sliders/img04.jpg)');
        var current = 0;

        function nextBackground() {
            body.css('background-image',
                backgrounds[current = ++current % backgrounds.length]
            );

            setTimeout(nextBackground, 7000);
        }
        setTimeout(nextBackground, 10000);
        body.css('background-image', backgrounds[0]);
    });
    
    setActive("active");
    
    setFooterLogo();
});

