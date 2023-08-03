
        //슬라이드 --------------------------------
        let slideNo = 0;
        let loop;

        function slide(no) {
            slideNo += no;
            if(slideNo > 2) slideNo=0;
            if(slideNo < 0) slideNo=2;

            //슬라이드 이동할 폭 : 헤더의 폭 or 슬라이드의 폭
            let x = ($('#listBox2').width() / 5) * slideNo;

            $('#listBox2').css('marginLeft',-x);


        }   //end slide()

        function playSlide() {  loop = setInterval('slide(1)',3000) }

        function stopSlide() {  clearInterval(loop) }


        function buttonChange(){   /*일시정지 On, 재생 Off*/
            $('.icon').eq(2).addClass('active');    //일시정지 하이라이트 표시
            $('.icon').eq(3).removeClass('active');   //재생 버튼 하이라이트 해제
        }

        function youtube() {
            $('#youtube').height($('#youtube').width() * 0.5625);
        }
        $(document).ready(youtube);
        $(window).resize(youtube);


        $(function(){      //페이지가 열릴 때

            playSlide();     //페이지 열릴 때 슬라이드 동작

            $('.slideLeft').click(function(){      //이전버튼
                slide(-1);    //이전 슬라이드로 이동
            });

            $('.slideRight').click(function(){          //다음버튼
                slide(1);    //다음 슬라이드로 이동
            });

            $('#mapButton').click(function(){ 
                $('#map').slideToggle();

                if( $(this).html() == 'SHOW MAP')
                    $(this).html('HIDE MAP');
                else
                    $(this).html('SHOW MAP');
            })

        });   //end $(function)
