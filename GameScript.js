var GameTime = 0;
var StartCount = 0;
var GameStarted = false;
var GameOver = false;
var Turn = "Player";
var Player1 = "";
var Player2 = "";
var CurrentPlayer = "";
var PCGame = false;
var TurnNumber = 1;
var TurnPicker = 0;
var WhichTurn = null;
var WhichTurnSwapper = 0;
var SpotEmpty = "";
var element = document.getElementById("WhichTurn");
var RandomNumber = 0;
var TheTime = setInterval(0);
var ClaimedSpots = [];
var TurnLog = [];
var CountOut = 0;
var CountTheArray = 1;
var OldNumber = null;

//Start Game
function StartGame()
{
	GameStarted = true;
	console.log("Game Started: " + GameStarted + "");
	GameTime = 0;
	let DetermineXOrO = Math.floor(Math.random() * 2);
	
	//Timer
	if(StartCount == 0)
	{
	TheTime = setInterval(myTimer, 1000);
	
		function myTimer() 
		{
			GameTime = GameTime + 1;
			document.getElementById("Timer").innerHTML = "Elapsed Time: " + GameTime + "";
		}
	}
	StartCount++;
	
	//Is It 1 Or 2 Players
	if(document.getElementById('OnePlayers').checked) 
	{
	 console.log("One Players Is Checked");
	 PCGame = true;
	 if(DetermineXOrO == 0)
	{
		Player1 = "O";
		Player2 = "X";
		document.getElementById("P1").innerHTML = "Player 1: " + Player1 + "";
		document.getElementById("P2").innerHTML = "Player 2: " + Player2 + " CPU";
	}
	 if(DetermineXOrO == 1)
	{
		Player1 = "X";
		Player2 = "O";
		//console.log(DetermineXOrO);
		document.getElementById("P1").innerHTML = "Player 1: " + Player1 + "";
		document.getElementById("P2").innerHTML = "Player 2: " + Player2 + " CPU";
	}

	 
	}else if(document.getElementById('TwoPlayers').checked) 
	{
		PCGame = false;
		if(DetermineXOrO == 0)
		{
			Player1 = "O";
			Player2 = "X";
			//console.log(DetermineXOrO);
			document.getElementById("P1").innerHTML = "Player 1: " + Player1 + "";
			document.getElementById("P2").innerHTML = "Player 2: " + Player2 + "";
		}
		if(DetermineXOrO == 1)
		{
			Player1 = "X";
			Player2 = "O";
			//console.log(DetermineXOrO);
			document.getElementById("P1").innerHTML = "Player 1: " + Player1 + "";
			document.getElementById("P2").innerHTML = "Player 2: " + Player2 + "";
		}
	console.log("Two Players Is Checked");
	}
	console.log("Player Chosen To Go First: " + DetermineXOrO + ": 0 Means Player 1 Is O & 2 Is X. 1 Means Player 2 Is O & 1 Is X");
	InitialTurnPicker()
}
//Restart Game (I need to add to this as I add more game functions)
function Restart()
{
	TurnPicker = 0;
	WhichTurn = 0;
	WhichTurnSwapper = 0;
	GameStarted = false;
	GameOver = false;
	GameTime = -1;
	TurnNumber = 1;
	clearInterval(TheTime);
	document.getElementById("Timer").innerHTML = "Game Not Started Yet";
	StartCount = 0
	Player1 = "";
	Player2 = "";
	document.getElementById("P1").innerHTML = "Player 1:";
	document.getElementById("P2").innerHTML = "Player 2:";
	document.getElementById("WhichTurn").innerHTML = "No Turn Yet";
	element = document.getElementById("WhichTurn");
	element.classList.remove("TurnCounter");
	element.classList.remove("TurnCounter1");
	document.getElementById("Spot1").innerHTML = "";
	document.getElementById("Spot2").innerHTML = "";
	document.getElementById("Spot3").innerHTML = "";
	document.getElementById("Spot4").innerHTML = "";
	document.getElementById("Spot5").innerHTML = "";
	document.getElementById("Spot6").innerHTML = "";
	document.getElementById("Spot7").innerHTML = "";
	document.getElementById("Spot8").innerHTML = "";
	document.getElementById("Spot9").innerHTML = "";
	
	Turn = "Player";
	Player1 = "";
	Player2 = "";
	CurrentPlayer = "";
	PCGame = false;
	TurnPicker = 0;
	WhichTurn = null;
	WhichTurnSwapper = 0;
	SpotEmpty = "";
	element = document.getElementById("WhichTurn");
	RandomNumber = 0;
	TheTime = setInterval(0);
	ClaimedSpots = [];
	TurnLog = [];
	
	CountTheArray = 1;
	OldNumber = null;
	
	while(CountOut != 10)
	{
	ClaimedSpots[CountOut] = null;
	TurnLog[CountOut] = null;
	CountOut++;
	}
	
	CountOut = 0;
}

function MarkSpot1()
{
	console.log("Clicked on MarkSpot1");
	SpotEmpty = document.getElementById('Spot1').value;
	
	if(ClaimedSpots[1] == null)
	{
		//console.log("Clicked on MarkSpot1 part 2");
		if(GameStarted == true && GameOver == false)
		{
			document.getElementById("Spot1").innerHTML = CurrentPlayer;
			ClaimedSpots[1] = CurrentPlayer;
			TurnLog[TurnNumber] = CurrentPlayer;
			console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + "");
			TurnSystem();
			PCTurn();
			//console.log("Clicked on MarkSpot1 part 3");
		}
	}
}
function MarkSpot2()
{
	console.log("Clicked on MarkSpot2");
	SpotEmpty = document.getElementById('Spot2');
	if(ClaimedSpots[2] == null)
	{
		if(GameStarted == true && GameOver == false)
		{
		document.getElementById("Spot2").innerHTML = CurrentPlayer;
		ClaimedSpots[2] = CurrentPlayer;
		TurnLog[TurnNumber] = CurrentPlayer;
		console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + " ");
		TurnSystem();	
		PCTurn();
		}
	}
}
function MarkSpot3()
{
	console.log("Clicked on MarkSpot3");
	SpotEmpty = document.getElementById('Spot3');
	if(ClaimedSpots[3] == null)
	{
		if(GameStarted == true && GameOver == false)
		{
		document.getElementById("Spot3").innerHTML = CurrentPlayer;
		ClaimedSpots[3] = CurrentPlayer;
		TurnLog[TurnNumber] = CurrentPlayer;
		console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + " ");
		TurnSystem();
		PCTurn();
		}
	}
}
function MarkSpot4()
{
	console.log("Clicked on MarkSpot4");
	SpotEmpty = document.getElementById('Spot4');
	if(ClaimedSpots[4] == null)
	{
	if(GameStarted == true && GameOver == false)
		{
			document.getElementById("Spot4").innerHTML = CurrentPlayer;
			ClaimedSpots[4] = CurrentPlayer;
			TurnLog[TurnNumber] = CurrentPlayer;
			console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + " ");
			TurnSystem();
			PCTurn();
		}
	}
}
function MarkSpot5()
{
	console.log("Clicked on MarkSpot5");
	SpotEmpty = document.getElementById('Spot5');
	if(ClaimedSpots[5] == null)
	{
		if(GameStarted == true && GameOver == false)
		{
		document.getElementById("Spot5").innerHTML = CurrentPlayer;
		ClaimedSpots[5] = CurrentPlayer;
		TurnLog[TurnNumber] = CurrentPlayer;
		console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + " ");
		TurnSystem();
		PCTurn();
		}
	}
}
function MarkSpot6()
{
	console.log("Clicked on MarkSpot6");
	SpotEmpty = document.getElementById('Spot6');
	if(ClaimedSpots[6] == null)
	{
		if(GameStarted == true && GameOver == false)
		{
		document.getElementById("Spot6").innerHTML = CurrentPlayer;
		ClaimedSpots[6] = CurrentPlayer;
		TurnLog[TurnNumber] = CurrentPlayer;
		console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + " ");
		TurnSystem();
		PCTurn();
		}
	}
}
function MarkSpot7()
{
	console.log("Clicked on MarkSpot7");
	SpotEmpty = document.getElementById('Spot7');
	if(ClaimedSpots[7] == null)
	{
		if(GameStarted == true && GameOver == false)
		{
		document.getElementById("Spot7").innerHTML = CurrentPlayer;
		ClaimedSpots[7] = CurrentPlayer;
		TurnLog[TurnNumber] = CurrentPlayer;
		console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + " ");
		TurnSystem();
		PCTurn();
		}
	}
}
function MarkSpot8()
{
	console.log("Clicked on MarkSpot8");
	SpotEmpty = document.getElementById('Spot8');
	if(ClaimedSpots[8] == null)
	{
		if(GameStarted == true && GameOver == false)
		{
		document.getElementById("Spot8").innerHTML = CurrentPlayer;
		ClaimedSpots[8] = CurrentPlayer;
		TurnLog[TurnNumber] = CurrentPlayer;
		console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + " ");
		TurnSystem();
		PCTurn();
		}
	}
}
function MarkSpot9()
{
	console.log("Clicked on MarkSpot9");
	SpotEmpty = document.getElementById('Spot9');
	if(ClaimedSpots[9] == null)
	{
		if(GameStarted == true && GameOver == false)
		{
		document.getElementById("Spot9").innerHTML = CurrentPlayer;
		ClaimedSpots[9] = CurrentPlayer;
		TurnLog[TurnNumber] = CurrentPlayer;
		console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + " ");
		TurnSystem();
		PCTurn();
		}
	}
}

function TurnSystem()
{
	if(GameOver == false)
		{
			CheckWinConditions();
		if(GameOver == false)
		{
			console.log("Player: " + CurrentPlayer + " Moved");
			console.log("Turn System");	
			
			WhichTurn = WhichTurnSwapper;
			WhichTurnSwapper = WhichTurn;
			console.log("Going Into Swapper- Which Turn: " + WhichTurn +" Which Turn Swapper: " + WhichTurnSwapper + "");	
			
			if(WhichTurn == 0)
			{
				CurrentPlayer = Player1;
				document.getElementById("WhichTurn").innerHTML = "Player 1: " + Player1 + "'s Turn";
				element = document.getElementById("WhichTurn");
				element.classList.remove("TurnCounter2");
				element.classList.add("TurnCounter");
				WhichTurnSwapper = 1;
				console.log("Player " +CurrentPlayer+"'s Turn ");
			}
			if(WhichTurn == 1)
			{
				CurrentPlayer = Player2;
				document.getElementById("WhichTurn").innerHTML = "Player 2: " + Player2 +"'s Turn";
				element = document.getElementById("WhichTurn");
				element.classList.remove("TurnCounter");
				element.classList.add("TurnCounter2");
				WhichTurnSwapper = 0;
				console.log("Player " + CurrentPlayer+"'s Turn ");
			}

			WhichTurn = WhichTurnSwapper;
			console.log("Coming Out Of Swapper - Which Turn: " + WhichTurn +" Which Turn Swapper: " + WhichTurnSwapper + "");	
			TurnNumber++;	
			
			while(CountTheArray != 10)
			{
			console.log("Taken Spots: " + CountTheArray + " " + ClaimedSpots[CountTheArray] + "")
			CountTheArray++;
			}
			CountTheArray = 1;		
		}
		}
}

function InitialTurnPicker()
{
	//
	//Initial Turn Picker
	//

	TurnPicker = Math.floor(Math.random() * 2);
	console.log("Initial Turn Picker: " + TurnPicker + ": 0 Means Player 1 Is First. 1 Means Player 2 Goes First");
	
	if(TurnPicker == 0)
	{
	document.getElementById("WhichTurn").innerHTML = "Player 1: " + Player1 + "'s Turn";
	element = document.getElementById("WhichTurn");
	element.classList.remove("TurnCounter2");
	element.classList.add("TurnCounter");
	CurrentPlayer = Player1;
	//Which Turn And Which Turn Swapper Need To Be The Opposite Of What They Are
	//This Changes The Next Turn In The TurnChanger Function
	WhichTurn = 1;
	WhichTurnSwapper = 1;
	console.log("Player " +CurrentPlayer+"'s Turn ");
	}
	if(TurnPicker == 1)
	{
	document.getElementById("WhichTurn").innerHTML = "Player 2: " + Player2 +"'s Turn";
	element = document.getElementById("WhichTurn");
	element.classList.remove("TurnCounter");
	element.classList.add("TurnCounter2");
	CurrentPlayer = Player2;
	//Which Turn And Which Turn Swapper Need To Be The Opposite Of What They Are
	//This Changes The Next Turn In The TurnChanger Function
	WhichTurn = 0;
	WhichTurnSwapper = 0;
	console.log("Player " +CurrentPlayer+"'s Turn ");
	}

	if(PCGame == true)
	{
		//Which Turn Is The Opposite Of Normal for The Inital Turn
		if(WhichTurn == 0)
		{
			console.log("PC TURN");
			RandomNumber = Math.floor(Math.random() * 9);
			if(RandomNumber == 0)
			{
			RandomNumber = 1;
			}
			switch(RandomNumber) 
			{
				case 1:
				document.getElementById("Spot1").innerHTML = CurrentPlayer;
				ClaimedSpots[1] = CurrentPlayer;
				TurnLog[TurnNumber] = CurrentPlayer;
				break;
				case 2:
				document.getElementById("Spot2").innerHTML = CurrentPlayer;
				ClaimedSpots[2] = CurrentPlayer;
				TurnLog[TurnNumber] = CurrentPlayer;
				break;
				case 3:
				document.getElementById("Spot3").innerHTML = CurrentPlayer;
				ClaimedSpots[3] = CurrentPlayer;
				TurnLog[TurnNumber] = CurrentPlayer;
				break;
				case 4:
				document.getElementById("Spot4").innerHTML = CurrentPlayer;
				ClaimedSpots[4] = CurrentPlayer;
				TurnLog[TurnNumber] = CurrentPlayer;
				break;
				case 5:
				document.getElementById("Spot5").innerHTML = CurrentPlayer;
				ClaimedSpots[5] = CurrentPlayer;
				TurnLog[TurnNumber] = CurrentPlayer;
				break;
				case 6:
				document.getElementById("Spot6").innerHTML = CurrentPlayer;
				ClaimedSpots[6] = CurrentPlayer;
				TurnLog[TurnNumber] = CurrentPlayer;
				break;
				case 7:
				document.getElementById("Spot7").innerHTML = CurrentPlayer;
				ClaimedSpots[7] = CurrentPlayer;
				TurnLog[TurnNumber] = CurrentPlayer;
				break;
				case 8:
				document.getElementById("Spot8").innerHTML = CurrentPlayer;
				ClaimedSpots[8] = CurrentPlayer;
				TurnLog[TurnNumber] = CurrentPlayer;
				break;
				case 9:
				document.getElementById("Spot9").innerHTML = CurrentPlayer;		
				ClaimedSpots[9] = CurrentPlayer;	
				TurnLog[TurnNumber] = CurrentPlayer;
			}
				//Which Turn And Which Turn Swapper Need To Be The Opposite Of What They Are
			//This Changes The Next Turn In The TurnChanger Function
			WhichTurn = 0;
			WhichTurnSwapper = 0;
			TurnSystem();
		}		
	}
}

function PCTurn()
{
		if(PCGame == true && GameOver == false)
		{
			if(TurnNumber < 10)
			{
				if(WhichTurn == 0)
				{
					RandomNumber = Math.floor(Math.random() * 9);
					if(RandomNumber == 0)
					{
					RandomNumber = 1;
					}
					
					console.log("PC TURN");
					console.log("PC Has Chosen Spot: " + RandomNumber);
					
					while(CountOut != 1)
					{
					console.log("PC Is Making Sure Spot " + RandomNumber + " is free.");
					console.log("Checking Against: " + ClaimedSpots[RandomNumber] + "");
					
						if(ClaimedSpots[RandomNumber] != null)
						{
						OldNumber = RandomNumber;
						RandomNumber = Math.floor(Math.random() * 9);
							if(RandomNumber == 0)
								{
								RandomNumber = 1;
								}
						console.log("The PC Determined That The Spot "+ OldNumber + " Was Taken And Is Choosing " + RandomNumber + " instead.");
						CountOut = 0;
						}
						if(ClaimedSpots[RandomNumber] == null)
						{
						CountOut++;
						console.log("The PC Has Determined That This Spot Isn't Taken");
						}
					}
					CountOut = 0;
					
					switch(RandomNumber) 
					{
					case 1:
					document.getElementById("Spot1").innerHTML = CurrentPlayer;
					ClaimedSpots[1] = CurrentPlayer;
					TurnLog[TurnNumber] = CurrentPlayer;
					break;
					case 2:
					document.getElementById("Spot2").innerHTML = CurrentPlayer;
					ClaimedSpots[2] = CurrentPlayer;
					TurnLog[TurnNumber] = CurrentPlayer;
					break;
					case 3:
					document.getElementById("Spot3").innerHTML = CurrentPlayer;
					ClaimedSpots[3] = CurrentPlayer;
					TurnLog[TurnNumber] = CurrentPlayer;
					break;
					case 4:
					document.getElementById("Spot4").innerHTML = CurrentPlayer;
					ClaimedSpots[4] = CurrentPlayer;
					TurnLog[TurnNumber] = CurrentPlayer;
					break;
					case 5:
					document.getElementById("Spot5").innerHTML = CurrentPlayer;
					ClaimedSpots[5] = CurrentPlayer;
					TurnLog[TurnNumber] = CurrentPlayer;
					break;
					case 6:
					document.getElementById("Spot6").innerHTML = CurrentPlayer;
					ClaimedSpots[6] = CurrentPlayer;
					TurnLog[TurnNumber] = CurrentPlayer;
					break;
					case 7:
					document.getElementById("Spot7").innerHTML = CurrentPlayer;
					ClaimedSpots[7] = CurrentPlayer;
					TurnLog[TurnNumber] = CurrentPlayer;
					break;
					case 8:
					document.getElementById("Spot8").innerHTML = CurrentPlayer;
					ClaimedSpots[8] = CurrentPlayer;
					TurnLog[TurnNumber] = CurrentPlayer;
					break;
					case 9:
					document.getElementById("Spot9").innerHTML = CurrentPlayer;		
					ClaimedSpots[9] = CurrentPlayer;	
					TurnLog[TurnNumber] = CurrentPlayer;
					}
					console.log("Current Player: " + CurrentPlayer + " Turn Number: " + TurnNumber + "");
					TurnSystem();
				}
			}				
		}
}

function CheckWinConditions()
{
	console.log("Checking If Anyone Won");
	Player1WinCheck();
	Player2WinCheck();
	CatGameCheck();
}

function Player1WinCheck()
{
		console.log("Checking If Player 1 Won");
		CountTheArray = 1;
		while(CountTheArray != 10)
		{
			if(ClaimedSpots[1] == Player1 && ClaimedSpots[2] == Player1 && ClaimedSpots[3] == Player1)
			{
				Player1Wins();
			}
			if(ClaimedSpots[4] == Player1 && ClaimedSpots[5] == Player1 && ClaimedSpots[6] == Player1)
			{
				Player1Wins();
			}
			if(ClaimedSpots[7] == Player1 && ClaimedSpots[8] == Player1 && ClaimedSpots[9] == Player1)
			{
				Player1Wins();
			}
			if(ClaimedSpots[1] == Player1 && ClaimedSpots[4] == Player1 && ClaimedSpots[7] == Player1)
			{
				Player1Wins();
			}
			if(ClaimedSpots[2] == Player1 && ClaimedSpots[5] == Player1 && ClaimedSpots[8] == Player1)
			{
				Player1Wins();
			}
			if(ClaimedSpots[3] == Player1 && ClaimedSpots[6] == Player1 && ClaimedSpots[9] == Player1)
			{
				Player1Wins();
			}
			if(ClaimedSpots[1] == Player1 && ClaimedSpots[5] == Player1 && ClaimedSpots[9] == Player1)
			{
				Player1Wins();
			}
			if(ClaimedSpots[3] == Player1 && ClaimedSpots[5] == Player1 && ClaimedSpots[7] == Player1)
			{
				Player1Wins();
			}
		CountTheArray++;
		}
		CountTheArray = 1;
		
}

function Player2WinCheck()
{
		console.log("Checking If Player 2 Won");
		CountTheArray = 1;
		while(CountTheArray != 10)
		{
			if(ClaimedSpots[1] == Player2 && ClaimedSpots[2] == Player2 && ClaimedSpots[3] == Player2)
			{
				Player2Wins();
			}
			if(ClaimedSpots[4] == Player2 && ClaimedSpots[5] == Player2 && ClaimedSpots[6] == Player2)
			{
				Player2Wins();
			}
			if(ClaimedSpots[7] == Player2 && ClaimedSpots[8] == Player2 && ClaimedSpots[9] == Player2)
			{
				Player2Wins();
			}
			if(ClaimedSpots[1] == Player2 && ClaimedSpots[4] == Player2 && ClaimedSpots[7] == Player2)
			{
				Player2Wins();
			}
			if(ClaimedSpots[2] == Player2 && ClaimedSpots[5] == Player2 && ClaimedSpots[8] == Player2)
			{
				Player2Wins();
			}
			if(ClaimedSpots[3] == Player2 && ClaimedSpots[6] == Player2 && ClaimedSpots[9] == Player2)
			{
				Player2Wins();
			}
			if(ClaimedSpots[1] == Player2 && ClaimedSpots[5] == Player2 && ClaimedSpots[9] == Player2)
			{
				Player2Wins();
			}
			if(ClaimedSpots[3] == Player2 && ClaimedSpots[5] == Player2 && ClaimedSpots[7] == Player2)
			{
				Player2Wins();
			}
		CountTheArray++;
		}
		CountTheArray = 1;	
}
function CatGameCheck()
{
	if(TurnNumber == 9)
	{
		CatGame();
	}
	console.log("Checking For A Cat's Game");
}

function Player1Wins()
{
	console.log("Player 1 Wins");
	GameOver = true;
	document.getElementById("WhichTurn").innerHTML = "Player 1 Wins";
	element = document.getElementById("WhichTurn");
	element.classList.remove("TurnCounter2");
	element.classList.add("TurnCounter");
	GameTime = -1;
	TurnNumber = 1;
	clearInterval(TheTime);
	document.getElementById("Timer").innerHTML = "Game Over";
	element = document.getElementById("PlayAgainButton");
	element.classList.remove("HideMe");
	element.classList.add("ShowMe");
}

function Player2Wins()
{
	console.log("Player 2 Wins");
	GameOver = true;
	document.getElementById("WhichTurn").innerHTML = "Player 2 Wins";
	element = document.getElementById("WhichTurn");
	element.classList.remove("TurnCounter");
	element.classList.add("TurnCounter2");
	GameTime = -1;
	TurnNumber = 1;
	clearInterval(TheTime);
	document.getElementById("Timer").innerHTML = "Game Over";
	element = document.getElementById("PlayAgainButton");
	element.classList.remove("HideMe");
	element.classList.add("ShowMe");
}

function CatGame()
{
	console.log("Cat's Game");
	GameOver = true;
	document.getElementById("WhichTurn").innerHTML = "Cat's Game";
	GameTime = -1;
	TurnNumber = 1;
	clearInterval(TheTime);
	document.getElementById("Timer").innerHTML = "Game Over";
	element = document.getElementById("PlayAgainButton");
	element.classList.remove("HideMe");
	element.classList.add("ShowMe");
}

function PlayAgain()
{
	Restart();
	StartGame();
	element = document.getElementById("PlayAgainButton");
	element.classList.remove("ShowMe");
	element.classList.add("HideMe");
}