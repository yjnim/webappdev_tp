$(document).ready(function(){
    var h1 = document.querySelector('.page1-title > h1');
    var count = 0;
    h1.addEventListener("click", click_, false);

    function click_(){ 
        count = count + 1;
        if(count === 5){
            count = 0;
            var url = "/html/moto.html";
            var name = "popup test";
            var option = "width = 721, height = 481";
            window.open(url, name, option);
        }
    }
});