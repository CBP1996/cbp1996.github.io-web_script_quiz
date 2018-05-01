// Question section

function Question(text, choices, answer)
{
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.isCorrectAnswer = 
function(choice)
{
	return this.answer === choice;
}


// Quiz section


function Quiz(questions)
{
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = 
function()
	{
		return this.questions[this.questionIndex];
	}

Quiz.prototype.guess = 
function(answer)
	{
		if(this.getQuestionIndex().isCorrectAnswer(answer))
		{
			this.score++;
			alert("Correct!");
		}
		else
		{
			alert("Incorrect!");
		}
		this.questionIndex++;
	}	
Quiz.prototype.isEnded = 
function()
	{
		return this.questionIndex === this.questions.length;
	}


// Application section

var questions = 
[
	new Question("What scripting language have we worked with all semester?", ["ASP", "Perl","Python", "Javascript"], "Javascript"),
	
	new Question("Which one is not a basic data type?", ["Boolean", "Number","Strings", "Variables"], "Variables"),
	
	new Question("What is a built-in browswer function referred to as?", ["Methods", "Functions","Parameters", "Arrays"], "Methods"),
	
	new Question("What is the terminology for receiving a value from a function? ", ["Return", "Execute","Call", "Invoke"], "Return"),
	
	new Question("Which one is not a loop?", ["Switch", "For","While", "Do While"], "Switch"),
	
	new Question("When we want to create an error, what keyword do we use in our code?", ["Call", "Console","Window", "Throw"], "Throw"),

	new Question("What method do you use to add a value to the end of an array?", [".Unshift()", ".Push()",".Shift()", ".Pop()"], ".Push()"),
	
	new Question("Which method will select only one element from the DOM?", ["Document.querySelectorAll()", "Document.getElementsByTagName()","Document.getElementById()", "Document.getElementsByClassName()"], "Document.getElementById()"),
	
	new Question("The body element is the ___ of the html element", ["Sibling", "Descendant","Parent", "Child"], "Child"),
	
	new Question("What is the opposite of the jQuery hide() method?", ["Show()", "Animate()","Display()", "Render()"], "Show()"),



];

var quiz = new Quiz(questions);

populateQuiz();




function populateQuiz()
{
	if(quiz.isEnded())
	{
		showScores();
	}

	else
	{
		document.getElementById("question").innerHTML = quiz.getQuestionIndex().text;

		var choices = quiz.getQuestionIndex().choices;

		for(var i = 0; i < choices.length; i++)
		{
			document.getElementById("choice" + i).innerHTML = choices[i];
			guess("button" + i, choices[i]);
		}

		showProgress();
	}
}


function guess(id, guess)
{
	document.getElementById(id).onclick = 
	function()
	{
		quiz.guess(guess);
		populateQuiz();
	}
}


function showProgress()
{
	var currentQuestion = quiz.questionIndex + 1;
	document.getElementById("progress").innerHTML = "Question " + currentQuestion + 
													" of " + quiz.questions.length;

}


function showScores()
{
	var finishedQuizHTML = "<h1<Result</h1>";
	finishedQuizHTML += "<h2 id='score'> Your score: " + quiz.score + "/10 </h2>";
	var restartQuiz = "<input type='button' value='Refresh Page' onClick='window.location.reload()''>";
	document.getElementById("quiz").innerHTML = finishedQuizHTML + restartQuiz;

	

}
