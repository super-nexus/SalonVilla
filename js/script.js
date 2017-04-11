
var storitveCardContent = null;
var activeStoritveNav = null;
var brandBoxHolder = null;


$(function() {

  storitveCardContent = $('.storitve-card-content');
  activeStoritveNav = $('.storitve-nav-activ');
  brandBoxHolder = $('.brand-box-holder');


  //Changes content of storitve-card and makes tab activ or in-active

  $('.storitve-nav').click(function(event) {
    /* Act on the event */

    storitveCardContent.fadeOut();

    if(!($(this).hasClass('storitve-nav-activ'))){
      activeStoritveNav.removeClass('storitve-nav-activ');
      $(this).addClass('storitve-nav-activ');
      activeStoritveNav = $(this);
    }

    var wantedCard = $(this).attr('data-pannel');

    $.ajax(wantedCard).done(function(data){
      storitveCardContent.html(data);
      storitveCardContent.fadeIn();
    });

  });


  //Brand- box on hover if you hover over one the other fades out
  //Changing the opacity to 0.4

  brandBoxHolder.hover(function(){

      if($(this).attr('id') == "first-box"){

        $('#second-box').animate({
          'opacity' : 0.4
        }, "fast");
      }
      else {
        $('#first-box').animate({
          'opacity' : 0.4
        }, 'fast');
      }

  }, function(){
    if($(this).attr('id') == 'first-box'){
      $('#second-box').animate({
        'opacity' : 1
      }, 'fast');
    }
    else {
      $('#first-box').animate({
        'opacity' : 1
      }, 'fast');
    }

  });


  brandBoxHolder.click(function(){

    //var contentContainer = $('.produkti-container');
    var imgUrl = null;

    $('.brand-box-row').fadeOut();

    if($(this).attr('id') == 'first-box'){
      imgUrl = '../images/johnMasters.jpg';
    }
    else{
      imgUrl = '../images/redken.jpg';
    }

    $('.produkti-container-img').html(
        "<img class='img-responsive' src='" + imgUrl + "' >"
    );



    $('.produkti-box-wrapper').fadeIn('fast');



  });

});
