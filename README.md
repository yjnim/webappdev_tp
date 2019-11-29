# Yunji's log

index.html은 header와 container 두 개의 div로 나뉘어져 있습니다.

index.html을 실행 시 기본적으로
div#header에는 html/header.html의 내용이 로드되며,
div#container에는 html/home.html의 내용이 로드됩니다.

그리고 js/loadHTML.js의 gopage(page) 함수가 작동하며
index.html의 div#container에 html/home.html 말고도
html/login.html, html/selab.html, html/course/course.html, html/course/cse326.html 등 여러 페이지들이 로드될 수 있습니다.