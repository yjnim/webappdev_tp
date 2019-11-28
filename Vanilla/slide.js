// Slide index 
// 건드리지마요
var slideIndex = 0;

function lengthCheck() {
    var i = 0;
    for (i=0; ; i++) {
        var slnum = "slide" + i;
        if (!document.getElementById(slnum)) {
            break;
        }
    }
    return i-1;
}


//슬라이드 숫자 추출
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

// 숫자 확인
function isNumber(s) {
    s += ''; // 문자열로 변환
    s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
    if (s == '' || isNaN(s)) return false;
    return true;
}

// current 슬라이드 부분
function showCurrent() {
    var current = document.getElementById('currentSlide');
    var length = lengthCheck();
    var s = String(slideIndex) + " / " + String(length);
    if (slideIndex === 0 ) {
        current.innerHTML = "";
    } else {
        current.innerHTML = s;
    }
    
}

// 슬라이드 이동
function moveSlide(move) {
    const length = lengthCheck();
    if (slideIndex === 0 && move === -1) {
    } else if (slideIndex === length && move === 1) {
    } else {
        var slnump = "slide" + slideIndex;
        slideIndex += move;
        var slnumn = "slide" + slideIndex;
        var next = document.getElementById(slnumn);
        var previous = document.getElementById(slnump);
        next.style.visibility = 'visible';
        previous.style.visibility = 'hidden';

        var list = document.getElementById("jumplist");
        list.selectedIndex = slideIndex;
        showCurrent();
    }
}


// 슬라이드 점프
function jumpSlide() {
    var list = document.getElementById("jumplist");
    var selected = list.options[list.selectedIndex].value;
    var s = getNum(selected);
    var slnump = "slide" + slideIndex;
    var slnumn = "slide" + s;
    slideIndex = parseInt(s);
    var previous = document.getElementById(slnump)
    var next = document.getElementById(slnumn);
    next.style.visibility = 'visible';
    previous.style.visibility = 'hidden';

    showCurrent()
}

// 슬라이드 뷰
function movePrintView() {
    var length = lengthCheck();
    var list = document.getElementsByClassName('slide');
    var layout = document.getElementsByClassName('layout');

    layout[0].innerHTML = "";
    
    for (i=0; i<length; i++) {
        var div = list[i];
        div.style.all = 'initial';
        div.innerHTML += '<hr>';
    }

    var el = document.getElementsByTagName('link');
    el[0].href = './none.css';
}
