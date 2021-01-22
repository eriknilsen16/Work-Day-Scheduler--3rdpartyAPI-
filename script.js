$(document).ready(function(){
$('.saveButton').on('click', function(){
const value = $(this).siblings('.stuff').val();
const time = $(this).parent().attr('id');
localStorage.setItem(time, value);

})

});