$(document).ready(function () {
    function prev() {
        $('#pc img:last').prependTo('#pc');
        $('#pc').css('margin-left', '-100%');
        $('#pc').stop().animate({ marginLeft: 0 }, 2000);
    }

    function next() {
        $('#pc').stop().animate({ marginLeft: '-100%' }, 2000, function () {
            $('#pc img:first').appendTo('#pc');
            $('#pc').css({ marginLeft: 0 });
        });
    }

    setInterval(next, 3500);

    $('.prev').click(function () {
        prev();
    });

    $('.next').click(function () {
        next();
    });

});
