const btnContainer = document.createElement("div");
$(btnContainer).css({
    "display" : "inline-block",
    "background-color" : "wheat",
    "border-radius" : "10%/50%",
    "position" : "fixed",
    "top":"1vh",
    "font-size" : "1vmax",
    "left" : "1vw",
    "z-index" : "10000",
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


class Card {
	eng;
	ukr;
	isAnswered = false;
	constructor(eng, ukr) {
		this.eng = eng;
		this.ukr = ukr;
	}
}
 var arrOfCards = new Array(parseInt(prompt("Input number of cards to learn:")));

 for (let i = 0; i < arrOfCards.length; i++) {
     arrOfCards[i] = new Card(
         prompt(`Input English side of card ${i+1} to learn:`),
        prompt(`Input Ukrainian side of card ${i+1} to learn:`)
     );
   }
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffleArray(arrOfCards);

$("#total-number-of-cards").text(arrOfCards.length);

$(".switch").hover(
	function (event) {
		$(event.target).css("color", "red");
	},
	function (event) {
		$(event.target).css("color", "black");
	}
);

var currIndex = 0;
var rightCounter = 0;
var wrongCounter = 0;

$("#cardText").text(arrOfCards[currIndex].eng);
$("#currCard").text(currIndex + 1);

$("#switch-left").on("click", function () {
	if (currIndex == 0) return;
	$("#cardText").fadeOut(600);
	setTimeout(function(){
		$("#cardText").text(arrOfCards[--currIndex].eng);
	$("#currCard").text(currIndex + 1);
	$("#cardText").fadeIn(600);
	if (arrOfCards[currIndex].isChecked) {
		$("input[type~='submit']").attr("disabled", "true");
		$("input[type~='text']").attr("disabled", "true");
	} else {
		$("input[type~='submit']").attr("disabled", null);
		$("input[type~='text']").attr("disabled", null);
	}
	},600);
});

$("#switch-right").on("click", function () {
	if (currIndex == arrOfCards.length - 1) return;
	$("#cardText").fadeOut(600);
	setTimeout(function(){
	$("#cardText").text(arrOfCards[++currIndex].eng);
	$("#currCard").text(currIndex + 1);
	$("#cardText").fadeIn(600);
	if (arrOfCards[currIndex].isChecked) {
		$("input[type~='submit']").attr("disabled", "true");
		$("input[type~='text']").attr("disabled", "true");
	} 
	else {
		$("input[type~='submit']").attr("disabled", null);
		$("input[type~='text']").attr("disabled", null);
	}
	},600);
});

$("#check").on("click", function (event) {
	event.preventDefault();
	let currAnswer = $("#answer").val();
	$("#answer").val(null);
	if (!arrOfCards[currIndex].isChecked) {
		$("input[type~='submit']").attr("disabled", "true");
		$("input[type~='text']").attr("disabled", "true");
		arrOfCards[currIndex].isChecked = true;
	}
	if (currAnswer.toLowerCase() == arrOfCards[currIndex].ukr.toLowerCase()) {
		rightCounter++;
		$(".fa-circle-check").toggleClass("animateRight");
		setTimeout(function () {
			$(".fa-circle-check").toggleClass("animateRight");
		}, 600);
	} else {
		wrongCounter++;
		$(".fa-circle-xmark").toggleClass("animateWrong");
		setTimeout(function () {
			$(".fa-circle-xmark").toggleClass("animateWrong");
		}, 600);
	}
	$("#corrects").text(rightCounter);
	$("#wrongs").text(wrongCounter);
	$(".smallResults").fadeIn(600);

	if ( (rightCounter + wrongCounter) == arrOfCards.length) {

		if (rightCounter / arrOfCards.length <= 0.25) {
			$(".modal-body").html(
				`<span class="text">Погана робота!<br>Неправильних відповідей: ${wrongCounter}<br>Правильних відповідей: ${rightCounter}</span>`);
			$("#results").modal("show");
			return;
		}
		if (rightCounter / arrOfCards.length <= 0.5) {
			$(".modal-body").html(
				`<span class="text">Середня робота. Підготуйтеся краще!<br>Неправильних відповідей: ${wrongCounter}<br>Правильних відповідей: ${rightCounter}</span>`);
			$("#results").modal("show");
			return;
		}
		if (rightCounter / arrOfCards.length <= 0.75) {
			$(".modal-body").html(
				`<span class="text">Задовільна робота!<br>Неправильних відповідей: ${wrongCounter}<br>Правильних відповідей: ${rightCounter}</span>`);
			$("#results").modal("show");
			return;
		}
		if ( (rightCounter / arrOfCards.length) == 1) {
					
			$(".modal-body").html(
				`<span class="text">Відмінна робота!<br>Неправильних відповідей: ${wrongCounter}<br>Правильних відповідей: ${rightCounter}</span>`);
			$("#results").modal("show");
			return;
		}
	}
});
$(".smallResults").hide();
$("#corrects").text(rightCounter);
$("#wrongs").text(wrongCounter);
