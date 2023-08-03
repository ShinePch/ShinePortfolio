// page 재로딩 체크
let reLoading = performance.getEntriesByType('navigation')[0].type === 'reload';


// 재로딩중이라면......
if ( reLoading ) { 
    $('.page_tr').show().delay(500).fadeOut(500);
}
// 애니메이션

gsap.registerPlugin(ScrollTrigger);


// section01
const sec01 = gsap.timeline();

sec01.from('.sec01-g1',{
    x : -100, 
    opacity : 0,
    duration : 0.4,
}).from('.sec01-g2', {
    x : 100,
    opacity : 0,
    duration : 0.4,
}).from('.sec01-g3', {
    x : -100,
    opacity : 0,
    duration : 0.4,
}).from('.sec01-g4', {
    x : -100,
    opacity : 0,
    duration : 0.4,
}).from('.sec01-tit', {
    y : '100%',
    opacity : 0,
    duration : 0.4,
}).from('.sec01-scroll', {
    y : '-50%',
    opacity : 0,
    duration : 0.3,
}).from('.sec01-pr', {
    opacity : 0,
    duration : 0.4,
})

/*

변수명.from('오브젝트', {
    속성 : 값,
}, '<');

변수명.from('오브젝트', {
    속성 : 값,
}, '>');

>  : 앞의 애니메이션이 끝나고 다음 애니 실행
>1 : 앞의 애니끝나고 1초뒤에 실행
>-1  : 앞의 애니끝나는 시점 -1초 빨리 실행


< : 앞의 애니와 동시에 실행
< 1 : 선행애니실행후 1초뒤에 실행
< -1 : 선행애니실행시점 -1초 빨리 실행


*/



// section02

gsap.from('.sec02-tit', {
    y : '-100%',
    opacity : 0,
    duration : 2,
    scrollTrigger : {
        trigger : '.sec02-tit',
        start : 'top 80%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec02-left', {
    x : '-100%',
    duration : 1,
    scrollTrigger : {
        trigger : '.sec02-left',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec02-right', {
    x : '100%',
    duration : 1,
    scrollTrigger : {
        trigger : '.sec02-right',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec02-scroll', {
    y : '-100%',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec02-scroll',
        start : 'top 75%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

/*
 toggleActions
    onEnter 오브젝트의 top이 start를 통과할 때
    onLeave 오브젝트의 end가 end를 통과할 때 
    onEnterBack 오브텍트의 end가 end를 들어올 때
    onLeaveBack > end가 start를 나갈 때 > reset(애니 리셋)
*/


gsap.from('.sec03-tit', {
    y : '-100%',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec03-tit',
        start : 'top 80%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec03-pr1', {
    y : 150,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec03-pr1',
        start : 'top 80%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec03-pr2', {
    y : 150,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec03-pr2',
        start : 'top 80%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec03-pr3', {
    y : 150,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec03-pr3',
        start : 'top 80%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec03-limit', {
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec03-limit',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec04-btn', {
    y : 150,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec04-btn',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec04-you', {
    y : 150,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec04-you',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});


gsap.from('.sec04-cont', {
    x : '50%',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec04-cont',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec04-bt-image', {
    y : '-100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec04-bt-image',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});
// sec05
gsap.from('.sec05-bg02', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec05-bg02',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec05-tit', {
    y : '0',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec05-tit',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec05-input1', {
    x : '-100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec05-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec05-input2', {
    x : '-100',
    opacity : 0,
    duration : 1,
    delay : .2,
    scrollTrigger : {
        trigger : '.sec05-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec05-input3', {
    x : '-100',
    opacity : 0,
    duration : 1,
    delay : 0.4,
    scrollTrigger : {
        trigger : '.sec05-input3',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec05-hint', {
    y : '0',
    opacity : 0,
    duration : 1,
    delay : .8,
    scrollTrigger : {
        trigger : '.sec05-hint',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});
// sec06
gsap.from('.sec06-bg02', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec06-bg02',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec06-tit', {
    y : '0',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec06-tit',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec06-input1', {
    x : '-100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec06-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec06-input2', {
    x : '-100',
    opacity : 0,
    duration : 1,
    delay : .2,
    scrollTrigger : {
        trigger : '.sec06-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec06-input3', {
    x : '-100',
    opacity : 0,
    duration : 1,
    delay : 0.4,
    scrollTrigger : {
        trigger : '.sec06-input3',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec06-input4', {
    x : '-100',
    opacity : 0,
    duration : 1,
    delay : 0.6,
    scrollTrigger : {
        trigger : '.sec06-input4',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec06-hint', {
    y : '0',
    opacity : 0,
    duration : 1,
    delay : 1,
    scrollTrigger : {
        trigger : '.sec06-hint',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

// sec07
gsap.from('.sec07-bg02', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec07-bg02',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec07-tit', {
    y : '0',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec07-tit',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec07-input1', {
    x : '-100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec07-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec07-input2', {
    x : '-100',
    opacity : 0,
    duration : 1,
    delay : .2,
    scrollTrigger : {
        trigger : '.sec07-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec07-input3', {
    x : '-100',
    opacity : 0,
    duration : 1,
    delay : 0.4,
    scrollTrigger : {
        trigger : '.sec07-input3',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec07-hint', {
    y : '0',
    opacity : 0,
    duration : 1,
    delay : .8,
    scrollTrigger : {
        trigger : '.sec07-hint',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

// sec08
gsap.from('.sec08-tit', {
    y : '0',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec08-tit',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec08-input1', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec08-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec08-input2', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : .2,
    scrollTrigger : {
        trigger : '.sec08-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec08-input3', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : 0.4,
    scrollTrigger : {
        trigger : '.sec08-input3',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec08-input4', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : 0.6,
    scrollTrigger : {
        trigger : '.sec08-input4',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec08-agree', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec08-agree',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec08-party', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec08-party',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec08-loreo', {
    x : '-100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec08-loreo',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec08-roreo', {
    x : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec08-roreo',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});
// sec09
gsap.from('.sec09-tit', {
    y : '0',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec09-tit',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-gift01', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec09-gift01    ',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-gift02', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec09-gift02',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-gift03', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec09-gift03',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-gift04', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : 0.6,
    scrollTrigger : {
        trigger : '.sec09-gift04',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-gift05', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : 0.6,
    scrollTrigger : {
        trigger : '.sec09-gift05',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-gift06', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : 0.6,
    scrollTrigger : {
        trigger : '.sec09-gift06',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-gift07', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : 0.6,
    scrollTrigger : {
        trigger : '.sec09-gift07',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-agree', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec09-agree',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-party', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec09-party',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-loreo', {
    x : '-100',
    opacity : 0,
    scrollTrigger : {
        trigger : '.sec09-loreo',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-roreo', {
    x : '100',
    opacity : 0,
    scrollTrigger : {
        trigger : '.sec09-roreo',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec09-event', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec09-event',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});
// sec10
gsap.from('.sec10-tit', {
    y : '0',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-tit',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-input1', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-input2', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : .2,
    scrollTrigger : {
        trigger : '.sec10-input2',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-input3', {
    y : '100',
    opacity : 0,
    duration : 1,
    delay : 0.4,
    scrollTrigger : {
        trigger : '.sec10-input3',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-agree', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-agree',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-link', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-link',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-party', {
    y : '-100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-party',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-review', {
    y : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-review',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-loreo', {
    x : '-100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-loreo',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-roreo', {
    x : '100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-roreo',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});

gsap.from('.sec10-lboreo', {
    x : '-100',
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.sec10-lboreo',
        start : 'top 90%',
        end : 'end 0',
        toggleActions : 'play none none reset',
    }
});



// quiz 버튼 클릭 시 해당 페이지로 스크롤 이동
let quiz_btn = $('.quiz-btn');
let quiz_cont = $('.quiz')


quiz_btn.each(function(index){
    $(this).on('click', function() {
        // console.log(index);
        // quiz박스의 offset().top추출
        let quiz_top = quiz_cont.eq(index).offset().top;
        console.log(quiz_top);

        // 페이지 스크롤 애니
        $('html, body').animate({
            'scrollTop' : quiz_top
        },400,'swing');



        return false;
    });
});

// section 05 오답창 띄우기
$('.sec05-input1 input, .sec05-input3 input').on('focus click', function (){
    $('.popup-wa05').show();
});
// section 05 힌트창 띄우기
$('.sec05-hint').on('focus click', function (){
    $('.popup-hint05').show();
});

// 팝업창 닫기
$('.popup').on('click', function() {
    $(this).hide();
});


// section 06 오답창 띄우기
$('.sec06-input1 input, .sec06-input3 input').on('focus click', function (){
    $('.popup-wa06').show();
});
// section 06 힌트창 띄우기
$('.sec06-hint').on('focus click', function (){
    $('.popup-hint06').show();
});

// 팝업창 닫기
$('.popup, .popup-hint').on('click', function() {
    $(this).hide();
});

// section 07 오답창 띄우기
$('.sec07-input1 input, .sec07-input3 input').on('focus click', function (){
    $('.popup-wa07').show();
});
// section 07 힌트창 띄우기
$('.sec07-hint').on('focus click', function (){
    $('.popup-hint07').show();
});

// 팝업창 닫기
$('.popup').on('click', function() {
    $(this).hide();
});




// section 08 more 띄우기
$('.sec08-more').on('click', function (){
    $('.more').show();
});
$('.sec10-more').on('click', function (){
    $('.more').show();
});



// 팝업창 닫기
$('.more').on('click', function() {
    $(this).hide();
});