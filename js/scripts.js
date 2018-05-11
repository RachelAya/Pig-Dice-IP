var playerI='';
var playerII='';
// business logic
function Player(name)
{
  this.name=name;
  this.score=0;
  this.face=0;
  this.total=0;
}
Player.prototype.rollRandom=function ()
{
  return Math.floor((Math.random()*6)+1);
}
Player.prototype.pass=function ()
{
   return this.score=+this.face;
}
//UI logic
$(document).ready(function ()
{
  $("form#pigDice").submit(function (event)
  {
    event.preventDefault();
    var nameI= $("input#playerI-name").val();
    var nameII=$("input#playerII-name").val();

    playerI= new Player(nameI);
    playerII=new Player(nameII);

    $("#b1").click(function(){
      $("#formI").hide();
      $("#pNameI").text("Welcome,"+playerI.name+"! "+"This is Pig Dice");
    });
    $("#b2").click(function(){
      $("#formII").hide();
      $("#pNameII").text("Welcome,"+playerII.name+"! "+"This is Pig Dice");
    });

    $("#roll1").click(function(event)
    {
      event.preventDefault();
      playerI.face=playerI.rollRandom();
      console.log(playerI.face);
      if (playerI.face===1)
      {
        playerI.score=playerI.pass();
        $(".playerIResult").text("It is not your turn anymore.");
        $(".playerIResult").text("Your current score is"+playerI.score);
      }
      else
      {
        $(".playerIResult").text(playerI.face);
      }
    });
    $("#roll2").click(function(event)
    {
      event.preventDefault();
      playerII.face=playerII.rollRandom();
      console.log(playerII.face);
      if (playerII.face===1)
      {
        $(".playerIIResult").text("It is not your turn anymore.");
      }
      else
      {
        $(".playerIIResult").text(playerII.face);
      }

    });


  });
});
