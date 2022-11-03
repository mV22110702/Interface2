
const btnContainer = document.createElement("div");
$(btnContainer).css({
    "display" : "inline-block",
    "background-color" : "wheat",
    "border-radius" : "10%/50%",
    "position" : "fixed",
    "top":"1vh",
    "font-size" : "1vmax",
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


document.children[0].style.setProperty('height', '100%');
document.body.style.setProperty('background-color', '#222');
document.body.style.setProperty('height', '100%');
document.body.style.setProperty('display', 'grid');
document.body.style.setProperty('position', 'relative');
document.body.style.setProperty('z-index', '-2');
document.body.style.setProperty('grid-template-rows', '1fr');
document.body.style.setProperty('grid-template-columns', '1fr');
document.body.style.setProperty('justify-items', 'center');
document.body.style.setProperty('align-items', 'center');
var size = 30;
var sizeStr = `${size}vmax`;
var sizeStrLower = `${size - 0.5}vmax`;

var OUTERDIV = document.createElement('div');
OUTERDIV.style.setProperty('width', sizeStr);
OUTERDIV.style.setProperty('height', sizeStr);
OUTERDIV.style.setProperty('position', 'relative');

var BACKGLOW = document.createElement('div');
BACKGLOW.style.setProperty('width', sizeStr);
BACKGLOW.style.setProperty('height', sizeStr);
BACKGLOW.style.setProperty('background', 'linear-gradient(to bottom left, green 0%, aqua 100%)');
BACKGLOW.style.setProperty('position', 'absolute');
BACKGLOW.style.setProperty('z-index', '0');
BACKGLOW.style.setProperty('filter', 'blur(15px)');

var DIV = document.createElement('div');
DIV.style.setProperty('width', sizeStr);
DIV.style.setProperty('height', sizeStr);
DIV.style.setProperty('background', 'linear-gradient(to bottom left, green 0%, aqua 100%)');
DIV.style.setProperty('padding', '0.25vmax');

var INNERDIV = document.createElement('div');
INNERDIV.style.setProperty('background-color', '#222');
INNERDIV.style.setProperty('box-sizing', 'border-box');
INNERDIV.style.setProperty('width', sizeStrLower);
INNERDIV.style.setProperty('height', sizeStrLower);
INNERDIV.style.setProperty('display', 'grid');
INNERDIV.style.setProperty('grid-template-rows', '20% 80%');
INNERDIV.style.setProperty('justify-items', 'space-evenly');
INNERDIV.style.setProperty('padding', '1.5vmax');
INNERDIV.style.setProperty('position', 'relative');


var FIRSTROW = document.createElement('div');
FIRSTROW.style.setProperty('display', 'flex');
FIRSTROW.style.setProperty('justify-content', 'space-evenly');
FIRSTROW.style.setProperty('box-sizing', 'border-box');

var INPUT = document.createElement('input');
INPUT.style.setProperty('box-sizing', 'border-box');
INPUT.style.setProperty('text-align', 'center');
INPUT.style.setProperty('font-size', '0.8em');
INPUT.setAttribute('type', 'text');
INPUT.setAttribute('name', 'question');
INPUT.style.setProperty('background-color', '#FFF2CC');
INPUT.style.setProperty('height', '40%');
INPUT.style.setProperty('flex-basis', '80%');
INPUT.classList.add('form-control');
INPUT.classList.add('rounded-pill');

INPUT.addEventListener('focus', (evt) => evt.target.style.backgroundColor = "#EEDDFF");
INPUT.addEventListener('blur', (evt) => evt.target.style.backgroundColor = "#FFF2CC");
INPUT.addEventListener('keydown', sayQuestion);

function sayQuestion(evt) {
    var quest = evt.target.value;
    document.getElementsByTagName('output')[0].innerText = '';
    if (evt.keyCode == 13) {
        if (quest.endsWith("?") == true) {
            document.getElementsByTagName('output')[0].innerText = (Math.round(Math.random()) == 0) ? 'Ні' : 'Так';
        }
        else {
            document.getElementsByTagName('output')[0].innerText = '?';
        }
    }

}

var SECONDROW = document.createElement('div');
SECONDROW.style.setProperty('box-sizing', 'border-box');
SECONDROW.style.setProperty('display', 'flex');
SECONDROW.style.setProperty('position', 'relative');
SECONDROW.style.setProperty('justify-content', 'space-evenly');
SECONDROW.style.setProperty('align-items', 'center');


var GLOWDISC = document.createElement('div');
GLOWDISC.style.setProperty('width', '21vmax');
GLOWDISC.style.setProperty('height', '21vmax');
GLOWDISC.style.setProperty('border-radius', '100%');
GLOWDISC.style.setProperty('background-color', 'purple');
GLOWDISC.style.setProperty('position', 'absolute');
GLOWDISC.style.setProperty('z-index', '4');
GLOWDISC.style.setProperty('filter', 'blur(25px)');

var DISC = document.createElement('div');
DISC.style.setProperty('width', '20vmax');
DISC.style.setProperty('height', '20vmax');
DISC.style.setProperty('border-radius', '100%');
DISC.style.setProperty('background-image', 'url("Ball.png")');
DISC.style.setProperty('position', 'relative');
DISC.style.setProperty('display', 'flex');
DISC.style.setProperty('justify-content', 'space-evenly');
DISC.style.setProperty('align-items', 'center');
DISC.style.setProperty('background-position', '-1%');
DISC.style.setProperty('background-size', 'cover');
DISC.style.setProperty('z-index', '5');

var OUTPUT = document.createElement('output');
OUTPUT.style.setProperty('width', '30%');
OUTPUT.style.setProperty('height', 'fit-content');
OUTPUT.style.setProperty('text-align', 'center');
OUTPUT.style.setProperty('color', 'white');
OUTPUT.style.setProperty('font-size', '3em');
OUTPUT.style.setProperty('font-weight', 'bold');
OUTPUT.style.setProperty('display', 'inline');


document.body.append(OUTERDIV);
OUTERDIV.append(BACKGLOW);
OUTERDIV.append(DIV);
DIV.append(INNERDIV);
INNERDIV.append(FIRSTROW);
INNERDIV.append(SECONDROW);
FIRSTROW.append(INPUT);
SECONDROW.append(DISC);
SECONDROW.append(GLOWDISC);
DISC.append(OUTPUT);