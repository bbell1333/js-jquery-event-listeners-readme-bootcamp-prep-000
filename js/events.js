function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
    return;
  });
}

function frameIt(){
  $('img').on('load',addClass('tasty'));
    
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
});
