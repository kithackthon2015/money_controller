// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("click","#itii",function(){
    if($("#Firstpoint").css("display") == "none"){
        $("#Firstpoint").slideDown("slow");
    } else {
        $("#Firstpoint").slideUp("slow");
    }
});

$(document).on("click","#nii",function(){
    if($("#Secondpoint").css("display") == "none"){
        $("#Secondpoint").slideDown("slow");
    } else {
        $("#Secondpoint").slideUp("slow");
    }
});

$(document).on("click","#sanni",function(){
    if($("#Thirdpoint").css("display") == "none"){
        $("#Thirdpoint").slideDown("slow");
    } else {
        $("#Thirdpoint").slideUp("slow");
    }
});
