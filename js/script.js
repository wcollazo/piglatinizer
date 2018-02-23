// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	$("#button").click(function() {
		$("#result").html("");
  		var userInput= $("#input").val();
  		userInput = userInput.split(" ");
  		var WAH = "";
  		for(var count = 0; count < userInput.length; count= count + 1) {
  			var word = userInput[count];
  			console.log(userInput[count]); 
  			var first = word.slice(0,1);
  			var rest = word.slice(1,userInput[count].length);
  			var WAHLatin = rest + first + "ay";
  			$("#result").append(WAHLatin + " ");
  		}
  		console.log(rest);
		console.log(WAHLatin);
		
	});
	

});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


