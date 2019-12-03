// JQuery로 재작성 및 기능 개선

// ===================================================
// 전역변수
// ===================================================

// 현재 슬라이드 위치
var slideIndex = 0;



// ===================================================
// 슬라이드 함수
// ===================================================

// 슬라이드 이동
var moveSlide = function(move) {
    var length = lengthCheck();
    if (!(slideIndex === 0 && move === -1) &&
    !(slideIndex === length && move === 1)) {
        var slnum = slideIndex + move;
        var elp = $("#slide" + slideIndex)[0];
        var eln = $("#slide" + slnum)[0]; 
        changeVisible(elp, eln);
        var offset = $("#slide" + slnum).offset();
        $('html, body').animate({scrollTop : offset.top}, 0);
        slideIndex += move;
        nextSelected(move);
    }
    
};

// 슬라이드 점프
var jumpSlide = function() {
    var index = selectedIndex();
    moveSlide(index - slideIndex);
    slideIndex = index;
}

// 프린트 뷰 : 슬라이드 나눔, CSS 초기화
var printView = function() {
    var length = lengthCheck();
    var list = $('.slide');

    for (var i=0; i<length+1; i++) {
        list[i].style.all = "initial";
        list[i].innerHTML += '<hr>';
    }

    var layout = $('.layout');
    layout[0].innerHTML = "";

    var el = $("link");
    el[0].href = '';

    var offset = $("#slide0").offset();
        $('html, body').animate({scrollTop : offset.top}, 0);
}



// ===================================================
// 슬라이드 유틸리티
// ===================================================

// 슬라이드 마지막 번호 리턴
var lengthCheck = function() {
    return $('.slide').length - 1;
}

// 슬라이드 visibility 처리
var changeVisible = function(elp, eln) {
    eln.style.visibility = "visible";
    elp.style.visibility = "hidden";
}

// 현재 선택된 select option index 추출
var selectedIndex = function()  {
    var index = $("#jumplist option").index($("#jumplist option:selected"));
    return index;
}

// select 박스 선택 값 변경
var nextSelected = function(move) {
    if (move === 1 || move === -1) {
        var index = selectedIndex();
        var option = $("option");
        option = option[index+move].value;
        $("#jumplist").val(option);
    }
}

// 새로고침 시 슬라이드를 처음으로 되돌림
window.onbeforeunload = function(e) {
    this.slideIndex = 0;
    var offset = $("#slide0").offset();
        $('html, body').animate({scrollTop : offset.top}, 0);
}

$(document).keydown(function(event) {
    if (event.keyCode === 39 || event.keyCode === 40) {
        moveSlide(1);
    } else if (event.keyCode === 37 || event.keyCode === 38) {
        moveSlide(-1);
    }
});

// ===================================================
// 기타 유틸리티
// ===================================================

// 숫자인지 확인하는 함수
function isNumber(s) {
    s += ''; // 문자열로 변환
    s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
    if (s == '' || isNaN(s)) return false;
    return true;
}

// 스트링에서 숫자를 빼오는 함수
function getNum(String) {
    var num = "";
    for (var i=0; i < String.length; i++) {
        if (isNumber(String[i])) {
            num += String[i]
        } else {
            break;
        }
    }
    return num;
}

// 새로고침 방지 함수
/*
$(document).keydown(function (e) {
     
    if (e.which === 116) {
        if (typeof event == "object") {
            event.keyCode = 0;
        }
        return false;
    } else if (e.which === 82 && e.ctrlKey) {
        return false;
    }
});
*/