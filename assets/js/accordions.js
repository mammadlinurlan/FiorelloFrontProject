$(document).ready(function(){
    $(".topRightAccordion .title-icon").click(function(){
        let next = $(this).next()
        
        $(".topRightAccordion .title-icon").not(this).removeClass("activeTab")
        $(".topRightAccordion .article").not(next).slideUp()

        $(next).slideToggle()

        $(this).toggleClass("activeTab")
    })

    $(".topLeftAccordion .title-icon").click(function(){
        let next = $(this).next()
        
        $(".topLeftAccordion .title-icon").not(this).removeClass("activeTab")
        $(".topLeftAccordion .article").not(next).slideUp()

        $(next).slideToggle()

        $(this).toggleClass("activeTab")
    })
    $(".bottomLeftAccordion .title-icon").click(function(){
        let next = $(this).next()
        
        $(".bottomLeftAccordion .title-icon").not(this).removeClass("activeTab")
        $(".bottomLeftAccordion .article").not(next).slideUp()

        $(next).slideToggle()

        $(this).toggleClass("activeTab")
    })
    $(".bottomRightAccordion .title-icon").click(function(){
        let next = $(this).next()
        
        $(".bottomRightAccordion .title-icon").not(this).removeClass("activeTab")
        $(".bottomRightAccordion .article").not(next).slideUp()

        $(next).slideToggle()

        $(this).toggleClass("activeTab")
    })
})