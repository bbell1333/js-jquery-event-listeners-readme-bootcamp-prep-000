function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
    return;
  });
}

function frameIt(){
  $('img').on('load',addClass('tast'));
    
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
});
