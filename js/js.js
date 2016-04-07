// alert('hello');
// $(document).ready(function() {

//   $('.contact').mouseover(function(){
//     $(this).stop().effect('shake', {distance:3}, 200);
// });

// });
$ (document).ready(function() {

// $(function() {
// 	var engine = new RainyDay({
// 		image: element,

// 		parentElement:someDiv,

// 		crop:[0, 0, 50, 60],

// 		blur:10,

// 		opacity: 1

// });
// engine.rain(
// 	[
// 	   [1, 0, 20],
// 	   [3, 3, 1]
// 	   ],
// 	   100);
// });

$(".contact, .about-me, .projects").mouseover(function () {
      $(this).effect("shake");
}); 

$(".contact").click(function(){
      document.location.href = "contact.html";
});

$(".about-me").click(function(){
      document.location.href = "about-me.html";
});

$(".projects").click(function(){
      document.location.href = "projects.html";
});

// $('#about-me-circle').circleType({radius: 384});

});


