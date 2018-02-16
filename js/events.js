function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
    return;
  });
}

function frameIt(){
  $('img').on('load',addClass('tasty'));
    
}

function pressIt(){
  $('input #typing').on('keydown',function(key){
    if (key.which == 71){
      alert('g was pressed');
      return;
    }
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
});
