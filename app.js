$(function(){
    let filter = $("[data-filter]")
    filter.on("click", function(event){
        event.preventDefault();

        let cat = $(this).data('filter');
        if(cat == "all"){
            $("[data-cat]").removeClass('hide')
        } else{
                $("[data-cat]").each(function(){
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                }
                else {
                    $(this).removeClass('hide');
                }

            });
        }
    });

    let modalCall = $("[data-modal]")
    .on("click", function(event){
        event.preventDefault();
        let $this = $(this)
        let modalID = $this.data('modal')
        console.log(modalID)
        $(modalID).toggleClass('show')
        $("body").toggleClass("scroll")
    });
    $(".modal").on("click", function(event){
        $(this).removeClass("show")
        $("body").removeClass("scroll")
    });
    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();
    });
    const burger = $('#burger');
    const nav = $("#burger__nav");
    burger.on("click", function(event){
        event.preventDefault();
        nav.toggleClass("show");
    });
});