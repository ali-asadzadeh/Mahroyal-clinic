function showImage(event, imageSrc) {
    event.preventDefault();
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'block';
}
function hideImage() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
var lightbox = document.getElementById('lightbox');
lightbox.addEventListener('click', hideImage);

const nextIcon = '<div class="btn bg-sky-blue border border-1 border-primary rounded-circle"><i class="fa fa-angle-left text-primary fa-lg align-middle"></i></div>';
const prevIcon = '<div class="btn bg-sky-blue border border-1 border-primary rounded-circle"><i class="fa fa-angle-right text-primary fa-lg align-middle"></i></div>';
const nextIconOne = '<div class="btn bg-sky-blue border border-1 border-primary rounded-circle"><i class="fa fa-angle-left text-primary fa-lg align-middle"></i></div>';
const prevIconOne = '<div class="btn bg-sky-blue border border-1 border-primary rounded-circle"><i class="fa fa-angle-right text-primary fa-lg align-middle"></i></div>';
$('document').ready(function (){
    $(".my_slider").owlCarousel({
        nav:true,
        loop:true,
        dots:false,
        navText: [
            nextIcon,
            prevIcon
        ],
        margin: 10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            },
            1400:{
                items:5
            },
            1600:{
                items:6
            }
        }
    });
    $(".my_slider1").owlCarousel({
        nav:true,
        loop:true,
        dots:false,
        navText: [
            nextIconOne,
            prevIconOne
        ],
        margin: 20,
        responsive:{
            0:{
                items:1
            }
        }
    });
})
$(document).ready(function() {
    $(".swiper-card").hover(
        function() {
            $(this).find(".card-text").slideDown(500);
        },
        function() {
            $(this).find(".card-text").slideUp(500);
        }
    );
});

