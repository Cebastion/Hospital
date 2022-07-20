$(document).ready(function(){
    $('.block-info__question').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});