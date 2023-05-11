$(document).ready(function () {
    $("#gnb").on("mouseenter", function () {
        $(".sub").stop().slideDown();
    });
    $("#gnb").on("mouseleave", function () {
        $(".sub").stop().slideUp();
    });
    $("#gnb > li").on("mouseenter", function() {
        $(this).children("a").addClass("on");
    });
    $("#gnb > li").on("mouseleave", function() {
        $(this).children("a").removeClass("on");
    });

    /* tab */
    $(".tab > li").click(function () {
        $(".tab").find("li").removeClass("on");
        $(".content").find("div").removeClass("on");

        $(this).addClass("on");
        
        var conId = $(this).children("a").attr("href");
        $(conId).addClass("on");
    })

    /* slide */
    setInterval(function () {
        $(".frame").animate({ "left": "-100px" },
            function () {
                $(".frame>li").eq(0).appendTo(".frame");
                $('.frame').css({ "left": "0" });
            })
    }, 3000);

    /* popup */
    $("#notice ul li a").on("click", function() {
        $(".popup").show();
    })
    $(".close").on("click", function() {
        $(".popup").hide();
    })
});