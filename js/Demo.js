$(document).ready(function () {
    $(document).on('click', '.demo .settings', function (e) {
        e.preventDefault();
        if ($(this).parent().attr('style') === 'left: 0px;') {
            $(this).parent().animate({ 'left': '-200px' });
        }
        else {
            $(this).parent().animate({ 'left': '0' });
        }
    });

    if ($.cookie('color')) {
        $('#color').attr('href', 'css/colors/' + $.cookie('color'));
    }
    $(document).on('click', '.demo .color',function (e) {
        e.preventDefault();
        $.cookie('color', $(this).data('color'), { expires: 7, path: '/' });
        $('#color').attr('href', 'css/colors/' + $(this).data('color'));
    });

    if ($.cookie('box')) {
        $('html').addClass($.cookie('box'));
    }
    $(document).on('click', '.demo .boxed', function (e) {
        e.preventDefault();
        $.cookie('box', $(this).data('box'), { expires: 7, path: '/' });
        $('html').removeAttr('class').addClass($(this).data('box'));
        window.location.href = 'index.html';
    });

    if ($.cookie('background')) {
        if ($.cookie('box')) {
            $('body').css({ 'background-image': 'url(Theme/img/bg/' + $.cookie('background') + ')' });
        }
    }
    $(document).on('click', '.demo .background', function (e) {
        e.preventDefault();
        if ($.cookie('box')) {
            $.cookie('background', $(this).data('background'), { expires: 7, path: '/' });
            $('body').css({ 'background-image': 'url(Theme/img/bg/' + $(this).data('background') + ')' });
        }
    });

    $(document).on('click', '.demo .reset', function (e) {
        e.preventDefault();
        $('#color').attr('href', 'css/colors/red.css');
        $('html').removeClass('boxed');
        $('body').removeAttr('style');
        $.removeCookie('color', { path: '/' });
        $.removeCookie('box', { path: '/' });
        $.removeCookie('background', { path: '/' });
    });

   
});