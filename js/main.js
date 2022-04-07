var arrow = document.querySelector(".container-arrow"),
    first = document.querySelector(".menu-list_first"),
    second = document.querySelector(".menu-list_second");

var  arrowSourceBottom =  arrow.getBoundingClientRect().bottom - "35";
window.onscroll = function() {
    if ( window.pageYOffset <  arrowSourceBottom) {
        first.style.display = "block";
        second.style.display = "none";
    } else if (window.pageYOffset > arrowSourceBottom) {
        first.style.display = "none";
        second.style.display = "block";
    }
};

var w = screen.width;
if (w < '990'){
    document.querySelector(".btn-name").innerHTML = 'Увійти';
}
else {
    document.querySelector(".btn-name").innerHTML = 'Увійти в кабінет';
}
$(document).ready(function(){
    $(function() {
        $.scrollify({
            section : ".pages",
        });
    });
    $.scrollify({
        section : ".pages",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
});

