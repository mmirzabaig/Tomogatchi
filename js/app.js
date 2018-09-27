$('.nameButton').on('click', () => {

  let $name = $('.inputName').val();
  $('.inputName').remove();
  $('#htc').append('<p>' + $name + '</p>');
  $('.nameButton').css({
    'display': 'none'
  })

  // $('.inputName').text('hello');

});
$('.startP').on('click', () => {
  // $('body').velocity('transition.bounceLeftIn').css({'transition': 'background-color  0.5s ease'});
  // console.log('hello');
  let time = 20;
  $('.startP').text(time);
  const setTimer = () => {



    let timer = setInterval(() => {
      $('.startP').text(time - 1);
      time--;
      console.log(time);

      if ($('#age').val() === 10) {
        $('.bird').velocity('transition.bounceLeftIn', 500);
        $('.bird').velocity('transition.bounceRightOut', 500);
        $('#age').val(0);
        // $('body').css({'transition': 'background-color  0.5s ease',
        // 'background-color': '#16222A'});
        $('.startP').css({
          'top': '-250px'
        });
        $('.bird').css({
          'background-size': 'auto 150%',
          'width': '150px',
          'height': '168px',
          'margin-top': '-40%',
          'margin-left': '52%'
        });
      }
      if ($('#hunger').val() === 10) {
        clearInterval(timer);
        $('.startP').text('GAME OVER');
        $('body').css({
          'transition': 'background-color  0.5s ease',
          'background-color': '#16222A'
        });
        $('h1').css({
          'color': 'red'
        });
        $('.startP').css({
          'font-family': "'Creepster', cursive",
          'color': 'red'
        });
      }

      if ($('#energy').val() === 0) {
        clearInterval(timer);
        $('.bird').velocity('callout.flash', 2000);
        $('body').css({
          'transition': 'background-color  0.5s ease',
          'background-color': '#16222A'
        });
        $('.startP').text('GAME OVER');
        $('h1').css({
          'color': 'red'
        });
        $('.startP').css({
          'font-family': "'Creepster', cursive",
          'color': 'red'
        });

      }
      if ($('#MOOD').val() === 0) {
        clearInterval(timer);
        $('.startP').text('GAME OVER');
        $('body').css({
          'transition': 'background-color  0.5s ease',
          'background-color': '#16222A'
        });
        $('h1').css({
          'color': 'red'
        });
        $('.startP').css({
          'font-family': "'Creepster', cursive",
          'color': 'red'
        });
      }
      let $hungerVal = $('#hunger').val();
      $hungerVal++;
      $('#hunger').val($hungerVal);

      let $MOODVal = $('#MOOD').val();
      $MOODVal--;
      $('#MOOD').val($MOODVal);

      let ageVal = $('#age').val();

      ageVal++;
      $('#age').val(ageVal);

      let $energyVal = $('#energy').val();
      $energyVal--;
      $('#energy').val($energyVal);

      if (time === 0) {
        $('body').css({
          'transition': 'background-color  0.5s ease',
          'background-color': '#E6E60D'
        });
        $('.startP').text('YOU WIN');
        clearInterval(timer);

        // console.log(age)
      }
    }, 1000)
  }
  setTimer()
})



$('.adderal').on('click', () => {
  const i = 0;
  //Velocity
  $('.bird').velocity('transition.bounceLeftIn', 250);
  $('.bird').velocity('transition.bounceRightOut', 250);
  $('.bird').velocity('transition.bounceDownOut', 250);
  $('.bird').velocity('transition.bounceDownIn', 250);
  $('.bird').velocity('transition.bounceLeftIn', 250);
  //age value decrement
  let $ageVal = $('#age').val();
  $ageVal += 2;
  $('#age').val($ageVal);
  let $energyVal = $('#energy').val();
  $energyVal -= 2;
  $('#energy').val($energyVal);

  //hunger value decrement
  let $hungerVal = $('#hunger').val();
  $hungerVal -= 2;
  $('#hunger').val($hungerVal);

})


$('.food').on('click', () => {
  $('.bird').velocity('callout.bounce');
  let $energyVal = $('#energy').val();
  $energyVal++;
  $('#energy').val($energyVal);

  let $ageVal = $('#age').val();
  $ageVal++;
  $('#age').val($ageVal);

  let $hungerVal = $('#hunger').val();
  $hungerVal--;
  $('#hunger').val($hungerVal);

})
$('.sleep').on('click', () => {
  $('body').css({
    'transition': 'background-color  0.5s ease',
    'background-color': '#4b738e'
  });
  $('.bird').velocity('transition.fadeOut', 800);
  $('.bird').velocity('transition.fadeIn', 800);
  $('body').css({
    'transition': 'background-color  0.5s ease',
    'background-color': '#4b738e'
  });
  // $('body').css({'background' : 'black'});
  let $energyVal = $('#energy').val();
  $energyVal += 2;
  $('#energy').val($energyVal);


  let $hungerVal = $('#hunger').val();
  $hungerVal += 2;
  $('#hunger').val($hungerVal);

})
$('.play').on('click', () => {
  $('.bird').velocity('transition.perspectiveLeftIn', 800);

  let $MOODVal = $('#MOOD').val();
  $MOODVal += 3;
  $('#MOOD').val($MOODVal);

})
