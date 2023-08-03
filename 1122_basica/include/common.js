//공통스크립트

$(function(){
    $("#view").click(function(){   //view버튼을 클릭하면
        $('#menu').toggle();   //메뉴 On/Off
    })
});



let slideNo = 0;   //슬라이드 번호용

//슬라이드 변경용 함수
function slide(no) {
    slideNo += no;   //1.넘겨받은 값 만큼 슬라이드 번호를 변경

    if(slideNo > 2)  slideNo = 0;
    if(slideNo < 0)  slideNo = 2;

    //2.모든 이미지,타이틀 숨기기, 서클버튼 표시--------
    let header = document.getElementById("header");
    let title = document.getElementsByClassName("headerBox");
    let circle = document.getElementsByClassName("circle");

    let a;
    for( a=0; a<3; a++) {   //a의 값을 0~2까지 1씩 증가하면서 반복
        title[a].style.display = "none";       //타이틀 숨기기
        circle[a].style.opacity=".3"; //서클버튼 투명
    }

    //3.헤더 배경이미지 변경하기
    header.style.backgroundImage = `url(images/bg${slideNo+1}.jpg)`;

    //4.해당 제목 표시
    title[slideNo].style.display = "block";
    // document.getElementById("title").innerHTML = title[slideNo];

    //5.해당 서클버튼만 흰색 배경
    circle[slideNo].style.opacity = "1";

}   //end slide()



//모달창 띄우기------------------------------------
//모달창에 띄울 이미지 파일이름&텍스트 배열화
let imgName = [ "images/1.jpg",  "images/2.jpg",  "images/3.jpg",  "images/4.jpg",  "images/5.jpg",  "images/6.jpg" ];
let text = [ "SETTING Jacob Cummings", "CAMERA Jacob Cummings", "MUSIC Jacob Cummings", "SAFARI Jacob Cummings", "PHONE Jacob Cummings", "GAME CENTER Jacob Cummings"];

function modal(no) {
    document.getElementById("modal").style.display="flex";
    document.getElementById("modalImage").src=imgName[no];
    document.getElementById("modalText").innerHTML=text[no];
}

function modalClose() {
    document.getElementById("modal").style.display="none";
}


