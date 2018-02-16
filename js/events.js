function getIt(){
  $('p').on('click',function(){
    alert('Hey!');
    return;
  });
}

function frameIt(){
  $('img').on('load',function(){
    append('tasty');
    return;
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
});
