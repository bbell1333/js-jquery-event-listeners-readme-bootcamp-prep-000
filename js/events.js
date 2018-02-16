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
  $('input:first').on('keydown',function(){
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
