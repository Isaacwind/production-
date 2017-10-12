var app = $("#app");


function startScreen() {
	var button = document.createElement("button");
	button.innerHTML = "start";
	app.html(button);

	app.on("click", "button", function() {
		app.html("");
	});

}

startScreen();


function trivia() {
	var questions = ["What is your name?", "What is 2 + 2?", "Capital city of US?", "How many bones are in a human body?", "How many states in the US?"];
	var answers = [["isaac", "tenzin"], [4, 88], ["moscow", "Washington"], [206, 5], [49, 50]]; //2 dimentional array

	var $form = $("<form></form>");

	for (var i=0; i<questions.length; i++) {
		var container = "<div>";
		container += "<p>" + questions[i] + "</p>";
		container += "<ul>";
		container += "<li><input type='radio' name='key'>" + answers[i][0] + "</input></li>";
		container += "<li><input type='radio' name='key'>" + answers[i][1] + "</input></li>";
		container += "</ul>"
		container += "</div>";
		$form.append(container);
	}

	app.html($form);
}

trivia();



