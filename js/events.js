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

$(document).ready(function(){
// call functions here
frameIt();

});
