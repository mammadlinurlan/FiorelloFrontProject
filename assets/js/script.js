$(document).ready(function () {

    $(window).scroll(function(){

        let stickynav = $(".stickyNav")
            var yPos =    $(window).scrollTop()

            if(yPos>1200){
                $(stickynav).slideDown(400)
            }
            else{
                $(stickynav).slideUp(400)
            }
    })



    $(".flowersInfo").css("opacity", "100")


    $(".menu-icon i").click(function () {
        $(".menu").addClass("active")

    })
    $(".myClose").click(function () {
        $(".menu").removeClass("active")
    })

    $("")

    let image = document.getElementById('interval')

    let images = ['https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg', 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg', 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg']

    $(image).css("opacity", "100")




    setInterval(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]
        // $(image).css('transform','scale(2)');

    }, 3000);

    $(".clickright").click(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]
    })
    $(".clickleft").click(function () {
        let random = Math.floor(Math.random() * 3);
        image.src = images[random]
    })

    $(".menu .menu-nav-links li.1").click(function (e) {
        e.preventDefault();
        let sublink = $(this).children(".sublinks")

        let icon = $(this).find("i");
        console.log("aue");

        $(icon).toggleClass("customAnimate")
        $(sublink).slideToggle()
    })

    $(".menu .menu-nav-links li .sublinks li").click(function (e) {

        e.preventDefault()
        let subsublink = $(this).children(".sub-subLinks")
        $(subsublink).slideToggle()

        $(".menu .menu-nav-links li.1").children(".sublinks").slideUp()

    })



    let filters = document.querySelectorAll(".filters span")
    let mdfilters = document.querySelectorAll(".mdfilters .mdcategories span")


    let products = document.querySelectorAll(".product")
    $("#firstfilter").addClass("activeFilter")
    filters.forEach((filter) => {
        $(filter).click(function () {


            filters.forEach((f) =>{
                $(f).removeClass("activeFilter")
            })


            let dataid = $(this).attr("data-id")
            console.log(dataid);
            products.forEach((delprod) => {
                $(delprod).addClass("unactiveProd")
            })
            let stayedprod = Array.from(document.getElementsByClassName(dataid))
            stayedprod.forEach((prod) => {
                $(prod).removeClass("unactiveProd")
            })


            $(this).addClass("activeFilter")
        })


    })

    $("#mdcategory").click(function(){
        $(".mdcategories").slideToggle();
    })

    $("#mdfilterbtn").click(function(){
        $(".mdfilterLists").slideToggle();
    })

    mdfilters.forEach((filter) => {
        $(filter).click(function () {


            mdfilters.forEach((f) =>{
                $(f).removeClass("activeFilter")
            })


            let dataid = $(this).attr("data-id")
            console.log(dataid);
            products.forEach((delprod) => {
                $(delprod).addClass("unactiveProd")
            })
            let stayedprod = Array.from(document.getElementsByClassName(dataid))
            stayedprod.forEach((prod) => {
                $(prod).removeClass("unactiveProd")
            })


            $(this).addClass("activeFilter")
        })


    })

    $(".search-icon i").click(function(){
        $(".search-icon input").slideToggle()
    })

    $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})





