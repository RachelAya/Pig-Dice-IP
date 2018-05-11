var playerI='';
var playerII='';

$(document).ready(function ()
{
  $("#b1").click(function(){
    var nameI= $("input#playerI-name").val();
    $("#formI").hide();
    $("#pNameI").text("Welcome,"+nameI+"! "+"This is Pig Dice");
  });
  $("#b2").click(function(){
    var nameII=$("input#playerII-name").val();
    $("#formII").hide();
    $("#pNameII").text("Welcome,"+nameII+"! "+"This is Pig Dice");
  });
  
});
