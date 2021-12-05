$(document).ready(function () {
    
    let stickynav = $(".stickyNav")
    let goUpBtn = $(".goHeadButton")
    $(window).scroll(function(){

            var yPos =    $(window).scrollTop()

            if(yPos>500){
                $(stickynav).addClass("animate")
                $(goUpBtn).fadeIn()
            }
            else{
                $(stickynav).removeClass("animate")
                $(goUpBtn).fadeOut()
            }

            $(goUpBtn).click(function(){
                $(window).scrollTop(0)
            })

          
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

    

    

    

   

    $(".search-icon i").click(function(){
        $(".search-icon input").slideToggle()
    })

    let span = document.querySelectorAll(".productPrice span:nth-child(1)")


    $(span).click(function(){
        console.log(this);
    })

    // $(".product .productPrice").children().first().click(function(){

       
    // })

}
)
