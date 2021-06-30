AOS.init();
$(window).on("load", loadFunc)
function loadFunc() {
    setTimeout(() => {
        $('#loading-anime').css('opacity', '0');  
        setTimeout(() => {
            $('#loading-anime').css('display', 'none');       
        }, 700)
    }, 4000);    
} 
$('#p-prevois').click(function() {
    $('p#one').toggleClass('active');
    $('p#two').toggleClass('active');
});
$('#p-next').click(function() {
    $('p#two').toggleClass('active');
    $('p#one').toggleClass('active');
});
$('#fixTog').click(function() {
    $('.fixed').css('left', 0)
});
$('#closeFix').click(function() {
    $('.fixed').css('left', 100 + '%')
});
$('#toggle').click(function() {
    $('.mobile-menu').css('right', 0)
});
$('#close').click(function() {
    $('.mobile-menu').css('right', -100 + '%')
});
function changeRight() {
    $('.home-item-one').addClass('active');
    $('#home-btn-one').addClass('active');
    $('.home-item-two').removeClass('active');
    $('#home-btn-two').removeClass('active');
}
function changeLeft() {
    $('.home-item-two').addClass('active');
    $('#home-btn-two').addClass('active');
    $('.home-item-one').removeClass('active');
    $('#home-btn-one').removeClass('active');
}
$('#home-btn-one').click(changeRight);
$('#home-btn-two').click(changeLeft);
setInterval(function () {
    changeLeft();
},4000);
setInterval(function () {
    changeRight();
},8000);
$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
});
$('.customer').slick({
    autoplay: true,
    autoplaySpeed: 2500,
});
$('.img-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
});
$('.logo-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

/* Fixed Header */
function changeClass() {
    const header = document.querySelector('#header');
    if(window.scrollY >= 55) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active')
    }
};
window.addEventListener('scroll', changeClass);

/* Scroll-Top */
function scrollTopFunc() {
    const scrollTop = document.querySelector('#scroll-top');
    if(window.scrollY > 500) {
        scrollTop.classList.add('active');
    }
    else {
        scrollTop.classList.remove('active');
    }
};
window.addEventListener('scroll', scrollTopFunc);