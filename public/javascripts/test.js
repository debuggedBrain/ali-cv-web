console.log('loaded js file');

$(document).ready(function(){

  $('#submitBtn').click(function () {
    console.log('hi');
    var emotions = [];
    $('#emotions > li > input:checked').each(function(){
      emotions.push($(this).val());
    });

    var satis;
    $('#satisfaction > li > input:checked').each(function (){
      satis = $(this).val();
    });
    
  })
});
