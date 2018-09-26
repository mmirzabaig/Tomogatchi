$('.startP').on('click', () => {

  console.log('hello');
  let time = 10;
$('.startP').text(time);

  const setTimer = () => {

    let timer = setInterval(() => {
        $('.startP').text(time-1);
      time--;
      console.log(time);

      let ageVal = $('#age').val();

      ageVal++;
      $('#age').val(ageVal);

      let $energyVal = $('#energy').val();
      $energyVal--;
      $('#energy').val($energyVal);

      if (time  === 0) {
        clearInterval(timer);

        // console.log(age)
      }
    }, 2000)
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
  $ageVal+=2;
  $('#age').val($ageVal);
  let $energyVal = $('#energy').val();
  $energyVal-=2;
  $('#energy').val($energyVal);

  //hunger value decrement
  let $hungerVal = $('#hunger').val();
  $hungerVal-=2;
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
  let $energyVal = $('#energy').val();
  $energyVal+=2;
  $('#energy').val($energyVal);


  let $ageVal = $('#age').val();
  $ageVal+=2;
  $('#age').val($ageVal);


  let $hungerVal = $('#hunger').val();
  $hungerVal+=2;
  $('#hunger').val($hungerVal);

})
$('.play').on('click', () => {

  let $boredomVal = $('#boredom').val();
  $boredomVal+=3;
   $('#boredom').val($boredomVal);

})
