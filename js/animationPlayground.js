/**
 * Created by Andrija on 6/26/18.
 */
$(function () {

    var win = $(window);
    var text = $('.page-header-text');
    //text.css('opacity', '0');
    console.log(text.offset().top);

    win.on('scroll', function () {

        // console.log("Scrolling: " + win.scrollTop);

        //console.log('Scrolling: ' + win.scrollTop());
        //console.log('Text move:' + (text.offset().top - win.scrollTop()));
        // console.log("text scroll" + text.scrollTop());

        // if ((win.height() + win.scrollTop()) >= text.offset().top && (win.scrollTop() - text.offset().top) <= (win.height() / 2)) {
        //
        //     console.log('Text scroll top: ');
        //
        //    text.css('opacity', (Math.abs(2 - ((Math.abs(win.scrollTop() - text.offset().top)) / (win.height() / 2)))));
        //     //console.log('opacity: ' + ((win.scrollTop()) / (win.height() / 2)));
        //     //console.log('oppacoi: ' + Math.abs(2 -((Math.abs(win.scrollTop() - text.offset().top)) / (win.height() /2 ))));
        //
        // }

        $('.nav-item-active').removeClass('nav-item-active');

        var hrefID = $('section:visible').attr('id');
        var activeNav = $('.nav-item').find('[href=' + '"#' + hrefID + '"]');
        if(activeNav.hasClass('nav-item-active')){return;}
        else{
            activeNav.addClass('nav-item-active');
        }

    })


});


