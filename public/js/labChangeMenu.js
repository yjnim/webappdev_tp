$(document).ready(function(){
    $('#Lab-Member').css('display', 'block');
    $('#Lab-Research').css('display', 'none');
    $('#Lab-Publications').css('display', 'none');
    $('#Lab-Contact').css('display', 'none');
    $('#List-Member').removeClass('Lab-List-a');
    $('#List-Member').addClass('Lab-List-a-hover');
});

function changeLabinfo(menuname) {
    if (menuname == 'members') {
        $('#Lab-Member').css('display', 'block');
        $('#Lab-Research').css('display', 'none');
        $('#Lab-Publications').css('display', 'none');
        $('#Lab-Contact').css('display', 'none');
        $('#List-Member').removeClass('Lab-List-a');
        $('#List-Member').addClass('Lab-List-a-hover');
        $('#List-Research').removeClass('Lab-List-a-hover');
        $('#List-Research').addClass('Lab-List-a');
        $('#List-Publications').removeClass('Lab-List-a-hover');
        $('#List-Publications').addClass('Lab-List-a');
        $('#List-Contact').removeClass('Lab-List-a-hover');
        $('#List-Contact').addClass('Lab-List-a');
    } else if (menuname == 'research') {
        $('#Lab-Research').css('display', 'block');
        $('#Lab-Member').css('display', 'none');
        $('#Lab-Publications').css('display', 'none');
        $('#Lab-Contact').css('display', 'none');
        $('#List-Research').removeClass('Lab-List-a');
        $('#List-Research').addClass('Lab-List-a-hover');
        $('#List-Member').removeClass('Lab-List-a-hover');
        $('#List-Member').addClass('Lab-List-a');
        $('#List-Publications').removeClass('Lab-List-a-hover');
        $('#List-Publications').addClass('Lab-List-a');
        $('#List-Contact').removeClass('Lab-List-a-hover');
        $('#List-Contact').addClass('Lab-List-a');
    } else if (menuname == 'publications') {
        $('#Lab-Research').css('display', 'none');
        $('#Lab-Member').css('display', 'none');
        $('#Lab-Publications').css('display', 'block');
        $('#Lab-Contact').css('display', 'none');
        $('#List-Publications').removeClass('Lab-List-a');
        $('#List-Publications').addClass('Lab-List-a-hover');
        $('#List-Member').removeClass('Lab-List-a-hover');
        $('#List-Member').addClass('Lab-List-a');
        $('#List-Research').removeClass('Lab-List-a-hover');
        $('#List-Research').addClass('Lab-List-a');
        $('#List-Contact').removeClass('Lab-List-a-hover');
        $('#List-Contact').addClass('Lab-List-a');
    } else if (menuname == 'contact') {
        $('#Lab-Research').css('display', 'none');
        $('#Lab-Member').css('display', 'none');
        $('#Lab-Publications').css('display', 'none');
        $('#Lab-Contact').css('display', 'block');
        $('#List-Contact').removeClass('Lab-List-a');
        $('#List-Contact').addClass('Lab-List-a-hover');
        $('#List-Member').removeClass('Lab-List-a-hover');
        $('#List-Member').addClass('Lab-List-a');
        $('#List-Research').removeClass('Lab-List-a-hover');
        $('#List-Research').addClass('Lab-List-a');
        $('#List-Publications').removeClass('Lab-List-a-hover');
        $('#List-Publications').addClass('Lab-List-a');
    }
}