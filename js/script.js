
var storitveCardContent = null;
var activeStoritveNav = null;
var brandBoxHolder = null;
var colorChangables = null;
var storitvePannel = null;


function initMap(){

  var coordinates = {lat: 46.045878, lng: 14.5000449};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: coordinates
  });

  var marker = new google.maps.Marker({
    position: coordinates,
    map: map
  })

}


$(function() {

  storitveCardContent = $('.storitve-card-content');
  activeStoritveNav = $('.storitve-nav-activ');
  brandBoxHolder = $('.brand-box-holder');
  colorChangables = $('.color-changable');
  storitvePannel = $('#storitve-pannel');

  console.log("viewport width: " + $(window).width());
  console.log('viewport height: ' + $(window).height());

  //Changes content of storitve-card and makes tab activ or in-active

  $('.storitve-nav').click(function(event) {
    /* Act on the event */

    event.preventDefault();

    if($(this).hasClass('storitve-nav-activ')){
      return;
    }

    storitveCardContent.fadeOut(10);

    if(!($(this).hasClass('storitve-nav-activ'))){
      activeStoritveNav.removeClass('storitve-nav-activ');
      $(this).addClass('storitve-nav-activ');
      activeStoritveNav = $(this);
    }

    var wantedCard = $(this).attr('data-pannel');

    var wantedPicture = $(this).attr('data-picture');

    $.ajax(wantedCard).done(function(data){
      storitveCardContent.html(data);
      storitveCardContent.fadeIn();
    });

    //UNCOMMENT FOR PICTURE CHANGE
   // storitvePannel.css('background-image',"url('" + wantedPicture + "')" );

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

  $('.arrow').hover(function (){

      if($(this).attr('id') == 'arrow-right'){
        $(this).attr('src', '../images/test_arrow_glow_right.png');
      }
      else{
        $(this).attr('src', '../images/test_arrow_glow_left.png');
      }
  }, function () {
      if($(this).attr('id') == 'arrow-right'){
          $(this).attr('src','../images/arrow_right_test.png');
      }
      else{
          $(this).attr('src','../images/left_arrow_test.png');
      }
  });


  brandBoxHolder.click(function(){

    //var contentContainer = $('.produkti-container');
    var imgUrl = null;

    $('.brand-box-row').fadeOut();

    if($(this).attr('id') === 'first-box'){
      imgUrl = '../images/johnMasters.jpg';
    }
    else{
      imgUrl = '../images/redken.jpg';
    }

    $('.produkti-container-img').html(
        "<img id='back-img' class='img-responsive' src='" + imgUrl + "' >"
    );



    $('.produkti-box-wrapper').fadeIn('fast');



  });


  //Lokacija



});
