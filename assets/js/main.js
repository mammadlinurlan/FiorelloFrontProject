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


    $(".menu-icon i").click(function () {
        $(".menu").addClass("active")

    })
    $(".myClose").click(function () {
        $(".menu").removeClass("active")
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

    let mdfilters = document.querySelectorAll(".mdfilters .mdcategories span")

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

}
)
