// HANGMAN GAME 	

// Player guesses a letter in a random that the computer chooses
// Check if their guess matches and if it does reveal the right guess
// Otherwise they lose a guess
// Player loses if they are out of guesses/
// player wins if they reveeal the ransom word.



let randomWord = '';
const arrayOfWords = ['cats', 'llamas', 'pandas', 'dogs']
// Start the game
	// We get a random word
		// Generate a random number 
		// We need a set of words to puck from
		// Store this word in a variable to be used
	function getRandomWord() {
		let randomNum = Math.floor(Math.random() * arrayOfWords.length);
		randomWord = arrayOfWords[randomNum];
	}
	//Set user guesses
		// We need a integer variable to keep track of the user guesses
		// We need a string variable to store the users guess
		// We need a variable to store the guessed letter
	// Display they word hidden by underscores
		// we need a variable to store the hidden word
		 	// We can use CSS to hide the letters.
		 	// '_,_,_,_,'
		 	// We can store this in an array
	//Setup the player inputs
		// Player can press a key on the keyboard
			// They should only be able to press A-Z a-z
			// Give the User some feedback when they press an invalid key
			// Make sure player isnt punished for picking a invalid key 
			// NOTE(good case for a f(x) ) IF they press a valid key, compare it to the random word string.
				// If the key has already been guessed then we want to give them some feedback
					// Let the play know they have already guessed this letter
				// Else we can check and see if its in the word
					// If it is in the word
						// show the correct letter
						// keep track of the letter guessed
						// Check and see if the entire word is revealed
					// Else if its not in the word
						// The user loses a guess
						// Keep track of the letter the user guesses
						// Check and see if the user has any more guesses
							// If they have guesses left
								// take next input
							// Else if they do not 
								// User has lost the game, USER LOSES GAME
								// Do you want to play again?
// Setup the ability to reset the game
	// Reset lifes back to full
	// Pick a new word
	// Set all other game variables
	
					