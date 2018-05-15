var playerI='';
var playerII='';
// business logic
function Player(name)
{
  this.name=name;
  this.score=0;
  this.face=0;
  this.tScore=0;
}

Player.prototype.rollRandom=function ()
{
  return Math.floor((Math.random()*6)+1);
}

Player.prototype.pass=function ()
{
  return this.tScore+=this.score;
}

Player.prototype.caseOfOne=function ()
{
  if(this.face===1)
  {
      this.pass();
    $("#roll1").toggle();
    alert("You rolled a one. It is not your turn any more!");
    return  this.score=0;

  }
  else
  {
    return  this.score+=this.face;
  }
};
Player.prototype.win = function ()
{
 if (this.tScore===100)
 {
  return alert(this.player.name+ " is the winner!")
 }
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
      $("#rollP1").show();
      playerI.face=playerI.rollRandom();
      console.log(playerI.face);
      $("#rollP1").text("You just rolled a: "+playerI.face);
      $("#totalP1").text("Your current score is: "+playerI.caseOfOne());

    });

    $("#pass1").click(function (event) {
      event.preventDefault();
      $("#rollP1").hide();
      $("#totalP1").text("Your total score is: "+playerI.pass());
    });

    $("#roll2").click(function(event)
    {
      event.preventDefault();
      $("#rollP2").show();
      playerII.face=playerII.rollRandom();
      console.log(playerII.face);
      $("#rollP2").text("You just rolled a: "+playerII.face);
      $("#totalP2").text("Your current score is: "+playerII.caseOfOne());


    });
    $("#pass2").click(function (event) {
      event.preventDefault();
      $("#rollP2").hide();
      $("#totalP2").text("Your total score is: "+playerII.pass());
    });

  });
});
