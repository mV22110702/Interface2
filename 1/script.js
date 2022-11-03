const btnContainer = document.createElement("div");
$(btnContainer).css({
    "display" : "inline-block",
    "background-color" : "wheat",
    "border-radius" : "100%",
    "position" : "fixed",
    "font-size": "1vmax",
    "top":"1vh",
    "left" : "1vw",
    "width" : "5vw",
    "padding" : "1vmin",
    "text-align" : "center",
    "cursor" : "pointer"
});
$(btnContainer).on("click",()=>window.location.href=`..\\index.html`);
const arrow = document.createElement("i");
arrow.setAttribute("class","fa-solid fa-arrow-left");
btnContainer.appendChild(arrow);
$(btnContainer).hover(()=>{$(btnContainer).css("color","red")},()=>{$(btnContainer).css("color","black")});
document.getElementsByTagName("body")[0].prepend(btnContainer);


const scoreTable = document.getElementsByClassName("scoreBoard")[0];

document.getElementById("userName1").innerText = prompt("Enter player 1 name:");
document.getElementById("userName2").innerText = prompt("Enter player 2 name:");

const userNumElement1 = document.getElementById("userNumber1");
const userNumElement2 = document.getElementById("userNumber2");

const userScoreElement1 = document.getElementById("userScore1");
const userScoreElement2 = document.getElementById("userScore2");

document.getElementById("generator").addEventListener("click", genRandom);
document.getElementById("restart").addEventListener("click",() => {
  userScoreElement1.innerText=0;
  userScoreElement2.innerText=0;
  userNumElement1.children[0].innerText='';
  userNumElement2.children[0].innerText='';
  scoreTable.children[0].replaceChildren('');
  scoreTable.children[1].replaceChildren('');
  document.getElementById("generator").removeAttribute("disabled");
});

function genRandom(){
  var keepGenerating = true;
  var rand1, rand2;
  while(keepGenerating){
  rand1 = parseInt(Math.random()*101);
  rand2 = parseInt(Math.random()*101);
  if (rand1 != rand2) keepGenerating=false;
  }
  
  setNumbers(rand1,rand2);
  incrementWinner(rand1,rand2);
  writeResults(rand1,rand2);
  

}


  function writeResults(Rand1,Rand2){
  var interResults = document.createElement("tr");
  
  var p1Results = document.createElement("td");
  p1Results.innerText= Rand1;
  var p2Results = document.createElement("td");
  p2Results.innerText= Rand2;
  
  var roundResults = document.createElement("td");
  roundResults.innerText= (Rand1 > Rand2) ? document.getElementById("userName1").innerText : document.getElementById("userName2").innerText ;
  
  interResults.append(p1Results,p2Results,roundResults);
scoreTable.children[0].innerHTML = `<th>${document.getElementById("userName1").innerText}</th><th>${document.getElementById("userName2").innerText}</th><th>Winner</th>`;
scoreTable.children[1].appendChild(interResults);
}

function incrementWinner(Rand1,Rand2){
    if (Rand1 > Rand2){
      userScoreElement1.innerText = (parseInt(userScoreElement1.innerText) === 0)? 1 : parseInt(userScoreElement1.innerText) + 1;
      
    }
  else{
    userScoreElement2.innerText = (parseInt(userScoreElement2.innerText) === 0)? 1 : parseInt(userScoreElement2.innerText) + 1;
    
  }
  if (parseInt(userScoreElement1.innerText) == 3 || parseInt(userScoreElement2.innerText) == 3)
   if (parseInt(userScoreElement1.innerText)>parseInt(userScoreElement2.innerText)){
        
        alert(`Player ${document.getElementById("userName1").innerText} won! Congratulations!`);
        document.getElementById("generator").setAttribute('disabled','');
   }
  else{
    alert(`Player ${document.getElementById("userName2").innerText} won! Congratulations!`);
    document.getElementById("generator").setAttribute('disabled','');
  }
}

function setNumbers(Rand1,Rand2){
  userNumElement1.children[0].innerText = Rand1;
  userNumElement2.children[0].innerText = Rand2;
}
