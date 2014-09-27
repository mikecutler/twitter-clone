$(document).ready(function () {

    $('#tweet-controls').hide();
    $('.stats').hide();
    $('.reply').hide();

    $('.tweet').on('click', function(){
        $(this).find('.stats').show();
        $(this).find('.reply').show();
    });

    $('.tweet-compose').on('click', function(){
        $('.tweet-compose').css("height", "5em");
        $('#tweet-controls').show();

    });

    $('.tweet-compose').on('focus', function (e) {
        $('#tweet-controls').show();
    });
    $('.tweet-compose').on('keyup', function (e) {
        var length = $('.tweet-compose').val().length;
        console.log(length);

        var count = 140 - length;
        $('#char-count').text(count);
        if (count <= 10) {
            $('#char-count').css('color', 'red')
        } else if (count > 10){
            $('#char-count').css('color','grey')
        }
        if (length > 140) {
            $('.button').attr('disabled','disabled')
        } else if (length <= 140) {
            $('.button').removeAttr('disabled', 'disabled')
        }
     });
        $('.button').on('click', function(e){
            var el = $('.tweet:first').clone();
            el.find('.avatar').prop('src', 'img/jennyshen.jpg');
            el.find('.fullname').html('Mike Cutler');
            el.find('.username').html('@mchammer');
            el.find('.tweet-text').html($('.tweet-compose').val());
            $('#stream').prepend(el);
    });



});
