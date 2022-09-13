var scores = [];
var highscore =
{
  name: ' ',
  score: 0,
}
var chalk = require('chalk')
var questionbg=chalk.black.bgYellow.bold;
var readLineSync = require('readline-sync');
while(true)
{
  for(var i=0;i<1;i++)
  {
    var game_score=0
    var name = readLineSync.question("Hey, What's your name?")
    console.log("Hey!"+" "+name+" "+"Welcome to this Quiz!")
  }
  var questions = [
    {
      question: "In a website browser address bar, what does “www” stand for?",
      answer: "World Wide Web",
      score: 1,
    },
    {
      question: "According to Greek mythology, who was the first woman on earth?",
      answer: "Pandora",
      score: 1,
    },
    {
      question: "In which European city would you find Orly airport?",
      answer: "Paris",
      score: 1,
    },
    {
      question: "Which author wrote the ‘Winnie-the-Pooh’ books?",
      answer: "A A Milne",
      score: 1,
    },
  ]
  for(var i=0; i<questions.length;i++)
  {
    play(questions[i].question, questions[i].answer, questions[i].score)
  }
  function play(question, answer, score)
  {
    var userans = readLineSync.question(questionbg(question))
    if(userans.localeCompare(answer))
    {
      console.log(chalk.green.bold("Right!!"))
      game_score = game_score + score
    }
    else
    {
      console.log(chalk.red.bold("Wrong!!"))
      console.log("The correct answer is"+" "+answer+" "+"\n")
      console.log("You missed"+" "+score+" "+"points")
      //break;
    }
    console.log("You Scored:", game_score)
  }
  if(game_score > highscore.score)
  {
    highscore.name = name,
    highscore.score = game_score,
    console.log(chalk.bgMagenta.bold("-----New High Score-----\n"))
  }
  scores.push(
  {
    name: name,
    score: game_score,
  },
  )
  function bubbleSort(arr)
{
	var i, j;
	var len = arr.length;
	var isSwapped = false;
	for(i =0; i < len; i++) //optimized bubble sort for arranging the scores in ascending order
	{
		isSwapped = false;
		for(j = 0; j < len; j++)
		{
			if(arr[j] > arr[j + 1]){
			var temp = arr[j]
			arr[j] = arr[j+1];
			arr[j+1] = temp;
			isSwapped = true;
		}
	}
	if(!isSwapped)
	{
		break;
	}
  }
} bubbleSort(scores);
  console.log("Highest Scorer is: "+highscore.name+" "+"with"+" "+highscore.score+" "+"points");
  console.log(chalk.bold.bgMagenta("---Scoreboard---\n"))
  for(var j=0;j<scores.length;j++)
  {
    console.log(chalk.bgMagenta.bold(scores[j].name+"\t"+scores[j].score));
  }
  var ans = readLineSync.question("Do you want to continue? y/n")
  if(ans.localeCompare('y'))
  {
    break;
  }
}
