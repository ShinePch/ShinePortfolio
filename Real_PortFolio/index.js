$('.gnb li a').click(function(){

            
    let $link = $(this);
    console.log($link);
    
    // 클릭한 대상에서 href값 추출
    let $href = $(this).attr('href');
    console.log($href);
    
    // #name ------ id = "name" $('#name')
    
    // 클릭한 대상과 동일한 page 요소의 offset().top 추출
    let $pageTop = $($href).offset().top;
    console.log($pageTop);

    //스크롤바 애니메이션
    $('html,body').stop().animate({
        scrollTop : $pageTop
    },500,'swing');

    return false;
}); //click event end