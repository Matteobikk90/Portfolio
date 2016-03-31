// alert('hello');
// $(document).ready(function() {

//   $('.contact').mouseover(function(){
//     $(this).stop().effect('shake', {distance:3}, 200);
// });

// });
$ (document).ready(function() {

$(".contact, .about-me, .projects").mouseover(function () {
      $(this).effect("shake");
}); 

});