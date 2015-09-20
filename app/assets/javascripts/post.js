$(document).ready(function() {
setTimeout(function(){
$('.odometer').html(parseInt($("#number").val())); //数字は最後の数値
}, 1000);
});
