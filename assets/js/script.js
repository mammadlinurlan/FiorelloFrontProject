$(document).ready(function () {
    $(".menu-icon i").click(function () {
        $(".menu").addClass("active")

    })
    $(".myClose").click(function () {
        $(".menu").removeClass("active")
    })

    $(".menu .menu-nav-links li").click(function (e) {
        e.preventDefault();
        let sublink = $(this).children(".sublinks")
        
        let icon = $(this).find("i");
       
        $(icon).toggleClass("customAnimate")
        $(sublink).slideToggle()
    })

    $(".menu .menu-nav-links li .sublinks li").click(function (e) {
        e.preventDefault()
        let subsublink = $(this).children(".subSublinks")
        console.log(this);
        $(this).click(function(){
            $(subsublink).slideToggle()
            
        })
    })
})