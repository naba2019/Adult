var $win = $(window);
$slickSolution = false;
function solSlider(){
    if($(window).innerWidth() > 990){
        if(!$slickSolution){
            $(".b-stories").slick({
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                fade: true,
                cssEase: 'linear'
            });
            $slickSolution = true;
        }
    } else if($(window).innerWidth() <= 991){
        if($slickSolution){
            $('.b-stories').slick('unslick');
            $slickSolution = false;
        }
    }
}
$(function(){
    solSlider();

    $win.on('resize', function(){
        solSlider();

    });

    if ($win.width() >= 991) {
        $(document).on('scroll', function () {

            scrollShow();
        });
    }
    let scrollShow = function () {

        let element = $('[data-unshow]'),
            scroll = $(document).scrollTop(),
            winHeight = $win.height();

        element.each(function () {
            let self = $(this),
                elementPos = self.offset().top;

            if (scroll >= (elementPos - (winHeight / 1.2))) {
                self.addClass('show')
            }
        });
    };

    $('a.btn').click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop: $("#order_form").offset().top-300}, 1000);
        return false;
    });

});