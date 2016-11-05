$(document).ready(function(){
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('#btn').click(function(){
      var r = getRandomInt(0,255);
      var g = getRandomInt(0,255);
      var b = getRandomInt(0,255);
      var a = Math.random().toFixed(1);      

        $('body').css('backgroundColor','rgba(' + r + ',' + g + ',' + b + ',' + a + ')');
    })
});
