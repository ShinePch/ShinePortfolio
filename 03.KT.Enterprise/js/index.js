
// 섹션 타이틀 박스 가져오기
let $titbox = $('.tit-box');


// 스크롤이벤트 (마우스 내릴때 헤더영역 고정및 색상변경 )
$(window).scroll(function() {

    // 현재창의 높이값 가져오기
    let $wh = $(window).height();
    // 스크롤값 가져오기
    let $scroll_offset = $(window).scrollTop();

    $titbox.each(function() {
        // tit- box의  offset().top저장하기
        let $tit_top = $(this).offset().top;

        // if문을 활용하여 스크롤값 비교
        if ( ($wh + $scroll_offset) > $tit_top+100 ) {
            $(this).addClass('ani');
        }
    });

   

    // 스크롤탑이 0보다클때
   

    if ( $(window).scrollTop() > 0 ) {
        $('.kt-header').addClass('on');
        $('#notice').hide();
        $('.depth1').addClass('on');
        $('.s-box').addClass('on');
        $('.all-menu').addClass('on');
    } else {
        $('.kt-header').removeClass('on');
        $('#notice').show();
        $('.depth1').removeClass('on');
        $('.s-box').removeClass('on');
        $('.all-menu').removeClass('on');
    }

    // upDown 요소 100보다클때 숨김처리
     // scroll-top 보이기 / 감추기
    if ( $(window).scrollTop() > 100 ) {
        $('.scroll-dn').hide();
        $('.scroll-top').addClass('active');
    } else {
        $('.scroll-dn').show();
        $('.scroll-top').removeClass('active');
    }
});

//scroll-top click 페이지 상단으로 이동하기
$('.scroll-top').on('click',function(){
    $('html,body').animate({
        scrollTop : 0
    },500,'swing')
});

// Gnb에 마우스가 올라갈때
$('.gnb > li').on('mouseenter',function(){
    $('.kt-header').addClass('on');
    $('.depth1').show();
    $('.search a').removeClass('active');
    $('.s-box').hide();
    $('.allmenu').removeClass('active');
    $('.all-menu').hide();
});



// header에서 마우스가 나갈때
$('.kt-header, .depth1').on('mouseleave',function(){
    $('.kt-header').removeClass('on');
    $('.depth1').hide();
    $('.gnb .sublist > li > a').removeClass('active');
    $('.gnb .sublist > li:first-child > a').addClass('active');

    // search -active체크
    if ( $('.search a, .allmenu').hasClass('active') ) {
        $('.kt-header').addClass('on');
    }
});


// Gnb Depth 마우스 올라갈떄 글자색상 제어
$('.gnb .sublist > li').on('mouseenter',function(){    
    $('.gnb .sublist > li > a').removeClass('active');
    $(this).find('a').addClass('active');
});


// search 버튼 클릭
$('.search a').on('click',function(){
    // if조건문
    if ($(this).hasClass('active')) {
        // active가 있을때
        $(this).removeClass('active');
        $('.kt-header').removeClass('on');
        $('.s-box').hide();
    } else {
        // active가 없을때
        $(this).addClass('active');
        $('.kt-header').addClass('on');
        $('.allmenu').removeClass('active');
        $('.depth1').hide();
        $('.all-menu').hide();
        $('.s-box').show();
    }

    return false;
});

// all menu 버튼 클릭
$('.allmenu a').on('click',function(){
    // if조건문
    if ($(this).parent().hasClass('active')) {
        // active가 있을때
        $(this).parent().removeClass('active');
        $('.kt-header').removeClass('on');
        $('.all-menu').hide();
    } else {
        // active가 없을때
        $(this).parent().addClass('active');
        $('.kt-header').addClass('on');
        $('.search a').removeClass('active');
        $('.depth1').hide();
        $('.s-box').hide();
        $('.all-menu').show();
    }

    return false;
});


// 
let link = $('.list li a');
let arr = [0,1,2,3,4];
let img = $('.list li img');

link.each(function(index){
    $(this).on('click',function() {
        img.attr('src',"img/a"+arr[index]+".png");
    });
});


// swiper 공지사항
let n_slide = new Swiper('.swiper01', {
    loop : true,
    direction : 'vertical',
    autoplay : {
        delay : 2000,
        disableOnInteraction : false,
        // true : 마우스나 터치로 커스텀을 할경우 자동슬라이드가 중지
        // false : 커스텀에 상관없이 계속 자동슬라이드
    },
});

// Swiper Main Slide
let v_slide = new Swiper('.swiper02',{
    loop: true,
    autoplay : {
        delay:3000,
        disableOnInteraction : false,
    },
    pagination : {
        el : '.swiper02 .swiper-pagination',
        clickable : true,
    },
});

// slider play sotp btn
$('.control-btn').on('click',function(){
    // active클래스 유무에 따라 bg이미지 교체
    if ( $(this).hasClass('active') ) {
        // 있을때 ( 이미지 재생 )
        $(this).removeClass('active');
        // 슬라이드를 재생시키기
        v_slide.autoplay.start();
    } else {
        // 없을때 ( 이미지는 정지 )
        $(this).addClass('active');
        // 슬라이드 재생을 정지시키기
        v_slide.autoplay.stop();
    }
});

// Swiper Carousel -- Family Site
let family = new Swiper('.swiper03', {
    slidesPerView :  8, // 슬라이드 영역에 보여질 이미지 개수
    slidesPerGroup : 8, // 네비게이션버튼 적용시 슬라이드될 이미지 개수
    navigation : {
        prevEl : '.family-prev-btn',
        nextEl : '.family-next-btn'
    },
});


// sec04 tab contents
$('.tab-cont').hide();
$('.tab-cont').eq(0).show();
$('.tab-tit').eq(0).addClass('active');

$('.tab-tit').on('mouseenter',function() {
    // 전체 컨텐츠 박스 숨기기
    $('.tab-cont').hide();
    // 모든요소 active제거하기
    $('.tab-tit').removeClass('active');

    // 마우스가 올라간대상의 동생요소 보이기
    $(this).next().show();
    // 마우스가 올라갈때 active생성하기
    $(this).addClass('active');
});
