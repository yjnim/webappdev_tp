$(document).ready(function(){
    $('.lecture-list').css('display', 'block');
    $('.lecture-info').css('display', 'none');
});

function changeMenu(menuname) {
    if (menuname == 'list') {
        $('#lecturemenu-list').removeClass('lecture-menu-off');
        $('#lecturemenu-list').addClass('lecture-menu-on');
        $('#lecturemenu-info').removeClass('lecture-menu-on');
        $('#lecturemenu-info').addClass('lecture-menu-off');
        $('.lecture-list').css('display', 'block');
        $('.lecture-info').css('display', 'none');
    } else if (menuname == 'info') {
        $('#lecturemenu-info').removeClass('lecture-menu-off');
        $('#lecturemenu-info').addClass('lecture-menu-on');
        $('#lecturemenu-list').removeClass('lecture-menu-on');
        $('#lecturemenu-list').addClass('lecture-menu-off');
        $('.lecture-info').css('display', 'block');
        $('.lecture-list').css('display', 'none');
    }
}