
//모바일 화면에서 메뉴 버튼 클릭하면 왼쪽 사이드메뉴 보이기
function menuOn(){
    //사이드 메뉴 On
    document.getElementById("header").style.left = "0";

    //검정 배경 On
    document.getElementById("blackBox").style.display="block";
}


//사이드메뉴 숨기기
function menuOff() {
    //사이드 메뉴 Off
    document.getElementById("header").style.left = "-300px";

    //검정 배경 Off
    document.getElementById("blackBox").style.display="none";
}


//모달창 보이기
function modal(value) {
    document.getElementById("modal").style.display="flex";
    document.getElementById("modalImage").src=value.src;
    document.getElementById("modalText").innerHTML=value.alt;
}


//모달창 숨기기
function modalOff() {
    document.getElementById("modal").style.display="none";
}