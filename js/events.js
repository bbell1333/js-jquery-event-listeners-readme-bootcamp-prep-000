function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
    return;
  });
}

function frameIt(){
  $('img').on('load',function(){
    $('img').addClass('tasty');
    return;
  });
    
}

function pressIt(){
  $('input').on('keydown',function(e){
    if (e.keyCode == 71){
      alert('g was pressed');
      return;
    }
  });
}

function submitIt(){
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
}

$(document).ready(function(){
// call functions here
submitIt();

});
