<<<<<<< HEAD
window.onload = function(){

    var h1 = document.querySelector('.page1-title h1');
=======
$(document).ready(function(){
    var h1 = document.querySelector('.page1-title > h1');
>>>>>>> haeseok
    var count = 0;
    h1.addEventListener("click", click_, false);

    function click_(){ 
        count = count + 1;
<<<<<<< HEAD
        if(count == 10){
            count = 0;
            var url = "../motoGame/index.html";
            var name = "popup test";
            var option = "width = 720, height = 480,location = no";
            window.open(url, name, option);
            // Swal.fire({
            //     title: '<strong>HTML <u>example</u></strong>',
            //     html:
            //       '<body>' +
            //       '<template>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAYAAAD+4+QTAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xOdTWsmQAAALfSURBVEhLrVVLaBRBEN2NoqirB1Hw4MGD+ImHYNQQdme2IdMz09s9CfgZD56CQREPgmJAEFn1JniSIIIaPHjRg168CYoEQYwa/AYvXvwgRhEFxQ9ZfdXTO3F3Zpc1yYNH73ZVvaqu/kymGdrDcB6Nlls6ZHE5brtquNvzlmrjbMHmwT6IX4b4n5hc3YMpG3nMEMzrXQ3RqzUJIlaKjtho3KYP25UDWMHP+gSWq0a7hFgyKy2D4Gh9AiK1zrjMDIwFy9D3L7GwK9+AD6Pf6gXGY/m+vsXGfXqwuTwVJ+DyIiXFdLbgqq1I/gDzFV0EV2MFT3VEUf8JiDyPkshfYD9jLGdMGkzKFbC/jIpQdywhlhtT60BLbkRJ4nZ9xni8u3vHAuOSKXK5EwU8NvbTZrp1MBbm0KajCJ6oScbVXZj1/Sg6wRbbkQp+r7TNKwU03wxZ9HY3XTwE77IcKWw/6LSc0hokOog9ehYncuV+/L9Ge4IEk0j8w8zfpziscJvdE3SWy+U2oz0FIcR8xkubbU8eqQpqkpArP9bMNaBOxOUQHRa0coRaauRr4bruIuzJ7zSRRoToU4wVOiRGhpCtvnupQAvO1Qs1Y546gBaiuNebgmChkWmINuYF62xPddlu4GH5B1DdMIRQZXoC+Ewgjva0A/8rSHQFK7uE8bztlLaTTSsTir6y4aTPviZXnyxP7SUbEg3E8wnKm+RD7xk68C5h5+o67tncTMHv3YDlfks4gFQZ3eyEjcvvWMV7CA+ZQs4mfKrk8jD2oO57kWTULi6/IuEHCN7G6NPNpzaFYThH25Jxmij0CT0jU21KI849juP6Rt8QeixT46pEYfSMPEo1aspJ6rfRa4Qs/N6mxxPlCK3kRNIQ85YRagoIDabEatIrgLeK5VJXQyesR7QbnebAMwL/M4j757jTl1UOGo/4UTwJxzGM4zg1F5jvrzLmlpH3/bWI3QPxfibEymg2k/kLGmgFj+yZMV8AAAAASUVORK5CYII</template> ' +
            //       '<script src="moto.js"></script> ' +
            //       '</body>',
            //     showCloseButton: true,
            //     showCancelButton: true,
            //     focusConfirm: false,
            //     confirmButtonText:
            //       '<i class="fa fa-thumbs-up"></i> Great!',
            //     confirmButtonAriaLabel: 'Thumbs up, great!',
            //     cancelButtonText:
            //       '<i class="fa fa-thumbs-down"></i>',
            //     cancelButtonAriaLabel: 'Thumbs down'
            //   })
        }
    }
}
=======
        if(count === 5){
            count = 0;
            var url = "/html/moto.html";
            var name = "popup test";
            var option = "width = 721, height = 481";
            window.open(url, name, option);
        }
    }
});
>>>>>>> haeseok