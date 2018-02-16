function getIt(){
  $('p').on('click',function(){
    return alert('Hey!');
  });
}

function framIt(){
  $('img').on('load',function(){
    return addClass('tasty');
  });
}

$(document).ready(function(){

// call functions here
getIt();
});
