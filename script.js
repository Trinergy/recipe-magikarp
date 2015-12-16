$(document).ready(function() {
 $('button').click(function(){
 	$('.pix').toggleClass("hide")
 });
 $(document).on('click', '.Ings li', function(){
 	$(this).toggleClass('checked')
 });
});
