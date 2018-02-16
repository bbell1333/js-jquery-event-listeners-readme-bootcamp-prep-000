function getIt(){
  $('p').on('click',function(){
    return alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load',function(){
    return $('img').addClass('.tasty');
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
});
