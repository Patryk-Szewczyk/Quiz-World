//Zmienne liczników przerzutnika stron quizu oraz funkcji wybierania odpowiedzi: info_Proper_Value
var oneTimeFuncPointScoreBlockade = 0;
var oneTimeFuncPointAnswerBlockade = 0;
var oneTimeFuncPointAnswerBackgroundColorBlockade = 0;

// Muzyka w tle podczas rozwiązywania testó testów:
const backgroundMusic = document.getElementById("audio_quizBackgroundMusic");
backgroundMusic.loop = true;
backgroundMusic.load();

// Ścieżka dźwiękowa na podsumowanie testów:
const scoreResultSound = document.getElementById("audio_scoreResult");

// Zoom 110%:
function zoom() {
	document.body.style.zoom = "110%";
}

//Całkowyty postęp całego Quiz World:completeQuizProgress
//var userPercentScoreQuizWorldProgress = 0;
//document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(1) + "%";

//alert("Aplikacja Quiz World nie jest jescze ukończona. Aktualnie jest ukończona w około 90%. Są gotowe wszystkie testy z kategorii: Geografia i pierwszy z kategorii: Historia. Pomimo tego Quiz World ma zrobione wszystkie funkcje, więc można z niego korzystać. Z lewej strony są liczniki pomocniecze (przy procesie programowania, które po ukończniu pracy zostaną zakryte).");

//Postęp osiągnięć:
var AchivAmount = 5; // Ilość osiągnięć
//var userPercentScoreAchivements = 0;
//document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(1) + "%";
var Achiv1Target = 25; //25% wymaganie do odblowkoania osiągnięcia 1
var Achiv2Target = 50; //50% wymaganie do odblowkoania osiągnięcia 2
var Achiv3Target = 70; //70% wymaganie do odblowkoania osiągnięcia 3
var Achiv4Target = 85; //85% wymaganie do odblowkoania osiągnięcia 4
var Achiv5Target = 100; //100% wymaganie do odblowkoania osiągnięcia 5
//var achiv1value = 0; //Wartość wartości zdobyćia 1 osiągniecia (maksymalnie 1)
//var achiv2value = 0; //Wartość wartości zdobyćia 2 osiągniecia (maksymalnie 1)
//var achiv3value = 0; //Wartość wartości zdobyćia 3 osiągniecia (maksymalnie 1)
//var achiv4value = 0; //Wartość wartości zdobyćia 4 osiągniecia (maksymalnie 1)
//var achiv5value = 0; //Wartość wartości zdobyćia 5 osiągniecia (maksymalnie 1)
const Achiv_1_name = "Początkujący";
const Achiv_2_name = "Przeciętny";
const Achiv_3_name = "Wyższa liga";
const Achiv_4_name = "Ekspert";
const Achiv_5_name = "Wszechwiedzący";
const Achiv_blocked = "?";
// localStorage - Jednorazowe liczniki komunikatów, informujących o odblokowaniu danego osiągnięcia:
//var Achiv_1_alert_point = 0;
//var Achiv_2_alert_point = 0;
//var Achiv_3_alert_point = 0;
//var Achiv_4_alert_point = 0;
//var Achiv_5_alert_point = 0;


//Państwa - całkowity postęp:
//var userPercentScoreQCountAllLevelsProgress = 0;
//document.getElementById("qCountAllLevelsProg").innerHTML = parseFloat(userPercentScoreQCountAllLevelsProgress).toFixed(1) + "%";

//Państwa: odblokowanie poziomów:
var CountL2Target = 50; // ilość wymaganych % do odblokowania testu: Countries - Level 2
var CountL3Target = 75; // ilość wymaganych % do odblokowania testu: Countries - Level 3

//Państwa - poziom 1:
var qCountLevOneQuesAmount = 20;   // 20
document.getElementById("CountL1Q1Number").innerHTML = "Pytanie 1/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q2Number").innerHTML = "Pytanie 2/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q3Number").innerHTML = "Pytanie 3/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q4Number").innerHTML = "Pytanie 4/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q5Number").innerHTML = "Pytanie 5/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q6Number").innerHTML = "Pytanie 6/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q7Number").innerHTML = "Pytanie 7/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q8Number").innerHTML = "Pytanie 8/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q9Number").innerHTML = "Pytanie 9/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q10Number").innerHTML = "Pytanie 10/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q11Number").innerHTML = "Pytanie 11/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q12Number").innerHTML = "Pytanie 12/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q13Number").innerHTML = "Pytanie 13/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q14Number").innerHTML = "Pytanie 14/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q15Number").innerHTML = "Pytanie 15/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q16Number").innerHTML = "Pytanie 16/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q17Number").innerHTML = "Pytanie 17/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q18Number").innerHTML = "Pytanie 18/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q19Number").innerHTML = "Pytanie 19/" + qCountLevOneQuesAmount + ":";
document.getElementById("CountL1Q20Number").innerHTML = "Pytanie 20/" + qCountLevOneQuesAmount + ":";
var userScoreQuizCountriesLevelOne = 0;
var nextQuizCountriesLevelOnePage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQCountLevOne = 0;
//var userBestScoreQCountLevOne = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQCountLevOneProgress = 0; //Postęp danego testu:
//document.getElementById("qCountLev1Prog").innerHTML = parseFloat(userPercentScoreQCountLevOneProgress).toFixed(1) + "%";

//Państwa - poziom 2:
var qCountLevTwoQuesAmount = 22;   // 22
document.getElementById("CountL2Q1Number").innerHTML = "Pytanie 1/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q2Number").innerHTML = "Pytanie 2/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q3Number").innerHTML = "Pytanie 3/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q4Number").innerHTML = "Pytanie 4/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q5Number").innerHTML = "Pytanie 5/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q6Number").innerHTML = "Pytanie 6/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q7Number").innerHTML = "Pytanie 7/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q8Number").innerHTML = "Pytanie 8/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q9Number").innerHTML = "Pytanie 9/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q10Number").innerHTML = "Pytanie 10/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q11Number").innerHTML = "Pytanie 11/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q12Number").innerHTML = "Pytanie 12/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q13Number").innerHTML = "Pytanie 13/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q14Number").innerHTML = "Pytanie 14/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q15Number").innerHTML = "Pytanie 15/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q16Number").innerHTML = "Pytanie 16/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q17Number").innerHTML = "Pytanie 17/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q18Number").innerHTML = "Pytanie 18/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q19Number").innerHTML = "Pytanie 19/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q20Number").innerHTML = "Pytanie 20/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q21Number").innerHTML = "Pytanie 21/" + qCountLevTwoQuesAmount + ":";
document.getElementById("CountL2Q22Number").innerHTML = "Pytanie 22/" + qCountLevTwoQuesAmount + ":";
var userScoreQuizCountriesLevelTwo = 0;
var nextQuizCountriesLevelTwoPage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQCountLevTwo = 0;
//var userBestScoreQCountLevTwo = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQCountLevTwoProgress = 0; //Postęp danego testu:
//document.getElementById("qCountLev2Prog").innerHTML = parseFloat(userPercentScoreQCountLevTwoProgress).toFixed(1) + "%";

//Państwa - poziom 3:
var qCountLevThreeQuesAmount = 24;   // 24
document.getElementById("CountL3Q1Number").innerHTML = "Pytanie 1/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q2Number").innerHTML = "Pytanie 2/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q3Number").innerHTML = "Pytanie 3/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q4Number").innerHTML = "Pytanie 4/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q5Number").innerHTML = "Pytanie 5/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q6Number").innerHTML = "Pytanie 6/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q7Number").innerHTML = "Pytanie 7/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q8Number").innerHTML = "Pytanie 8/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q9Number").innerHTML = "Pytanie 9/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q10Number").innerHTML = "Pytanie 10/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q11Number").innerHTML = "Pytanie 11/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q12Number").innerHTML = "Pytanie 12/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q13Number").innerHTML = "Pytanie 13/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q14Number").innerHTML = "Pytanie 14/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q15Number").innerHTML = "Pytanie 15/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q16Number").innerHTML = "Pytanie 16/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q17Number").innerHTML = "Pytanie 17/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q18Number").innerHTML = "Pytanie 18/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q19Number").innerHTML = "Pytanie 19/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q20Number").innerHTML = "Pytanie 20/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q21Number").innerHTML = "Pytanie 21/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q22Number").innerHTML = "Pytanie 22/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q23Number").innerHTML = "Pytanie 23/" + qCountLevThreeQuesAmount + ":";
document.getElementById("CountL3Q24Number").innerHTML = "Pytanie 24/" + qCountLevThreeQuesAmount + ":";
var userScoreQuizCountriesLevelThree = 0;
var nextQuizCountriesLevelThreePage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQCountLevThree = 0;
//var userBestScoreQCountLevThree = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQCountLevThreeProgress = 0; //Postęp danego testu:
//document.getElementById("qCountLev3Prog").innerHTML = parseFloat(userPercentScoreQCountLevThreeProgress).toFixed(1) + "%";



//Historia - całkowity postęp:
//var userPercentScoreQHisAllLevelsProgress = 0;
//document.getElementById("qHisAllLevelsProg").innerHTML = parseFloat(userPercentScoreQHisAllLevelsProgress).toFixed(1) + "%";

//Historia: odblokowanie poziomów:
var HisL2Target = 50; // ilość wymaganych % do odblokowania testu: History - Level 2
var HisL3Target = 75; // ilość wymaganych % do odblokowania testu: History - Level 3

//Historia - poziom 1:
var qHisLevOneQuesAmount = 18;   // 18
document.getElementById("HisL1Q1Number").innerHTML = "Pytanie 1/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q2Number").innerHTML = "Pytanie 2/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q3Number").innerHTML = "Pytanie 3/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q4Number").innerHTML = "Pytanie 4/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q5Number").innerHTML = "Pytanie 5/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q6Number").innerHTML = "Pytanie 6/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q7Number").innerHTML = "Pytanie 7/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q8Number").innerHTML = "Pytanie 8/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q9Number").innerHTML = "Pytanie 9/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q10Number").innerHTML = "Pytanie 10/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q11Number").innerHTML = "Pytanie 11/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q12Number").innerHTML = "Pytanie 12/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q13Number").innerHTML = "Pytanie 13/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q14Number").innerHTML = "Pytanie 14/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q15Number").innerHTML = "Pytanie 15/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q16Number").innerHTML = "Pytanie 16/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q17Number").innerHTML = "Pytanie 17/" + qHisLevOneQuesAmount + ":";
document.getElementById("HisL1Q18Number").innerHTML = "Pytanie 18/" + qHisLevOneQuesAmount + ":";
var userScoreQuizHistoryLevelOne = 0;
var nextQuizHistoryLevelOnePage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQHisLevOne = 0;
//var userBestScoreQHisLevOne = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQHisLevOneProgress = 0; //Postęp danego testu:
//document.getElementById("qHisLev1Prog").innerHTML = parseFloat(userPercentScoreQHisLevOneProgress).toFixed(1) + "%";

//Historia - poziom 2:
var qHisLevTwoQuesAmount = 20;   // 20
document.getElementById("HisL2Q1Number").innerHTML = "Pytanie 1/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q2Number").innerHTML = "Pytanie 2/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q3Number").innerHTML = "Pytanie 3/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q4Number").innerHTML = "Pytanie 4/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q5Number").innerHTML = "Pytanie 5/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q6Number").innerHTML = "Pytanie 6/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q7Number").innerHTML = "Pytanie 7/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q8Number").innerHTML = "Pytanie 8/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q9Number").innerHTML = "Pytanie 9/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q10Number").innerHTML = "Pytanie 10/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q11Number").innerHTML = "Pytanie 11/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q12Number").innerHTML = "Pytanie 12/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q13Number").innerHTML = "Pytanie 13/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q14Number").innerHTML = "Pytanie 14/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q15Number").innerHTML = "Pytanie 15/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q16Number").innerHTML = "Pytanie 16/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q17Number").innerHTML = "Pytanie 17/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q18Number").innerHTML = "Pytanie 18/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q19Number").innerHTML = "Pytanie 19/" + qHisLevTwoQuesAmount + ":";
document.getElementById("HisL2Q20Number").innerHTML = "Pytanie 20/" + qHisLevTwoQuesAmount + ":";
var userScoreQuizHistoryLevelTwo = 0;
var nextQuizHistoryLevelTwoPage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQHisLevTwo = 0;
//var userBestScoreQHisLevTwo = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQHisLevTwoProgress = 0; //Postęp danego testu:
//document.getElementById("qHisLev2Prog").innerHTML = parseFloat(userPercentScoreQHisLevTwoProgress).toFixed(1) + "%";

//Historia - poziom 3:
var qHisLevThreeQuesAmount = 22;   // 22
document.getElementById("HisL3Q1Number").innerHTML = "Pytanie 1/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q2Number").innerHTML = "Pytanie 2/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q3Number").innerHTML = "Pytanie 3/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q4Number").innerHTML = "Pytanie 4/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q5Number").innerHTML = "Pytanie 5/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q6Number").innerHTML = "Pytanie 6/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q7Number").innerHTML = "Pytanie 7/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q8Number").innerHTML = "Pytanie 8/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q9Number").innerHTML = "Pytanie 9/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q10Number").innerHTML = "Pytanie 10/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q11Number").innerHTML = "Pytanie 11/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q12Number").innerHTML = "Pytanie 12/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q13Number").innerHTML = "Pytanie 13/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q14Number").innerHTML = "Pytanie 14/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q15Number").innerHTML = "Pytanie 15/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q16Number").innerHTML = "Pytanie 16/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q17Number").innerHTML = "Pytanie 17/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q18Number").innerHTML = "Pytanie 18/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q19Number").innerHTML = "Pytanie 19/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q20Number").innerHTML = "Pytanie 20/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q21Number").innerHTML = "Pytanie 21/" + qHisLevThreeQuesAmount + ":";
document.getElementById("HisL3Q22Number").innerHTML = "Pytanie 22/" + qHisLevThreeQuesAmount + ":";
var userScoreQuizHistoryLevelThree = 0;
var nextQuizHistoryLevelThreePage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQHisLevThree = 0;
//var userBestScoreQHisLevThree = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQHisLevThreeProgress = 0; //Postęp danego testu:
//document.getElementById("qHisLev3Prog").innerHTML = parseFloat(userPercentScoreQHisLevThreeProgress).toFixed(1) + "%";



//Prawo jazdy - całkowity postęp:
//var userPercentScoreQTraffAllLevelsProgress = 0;
//document.getElementById("qTraffAllLevelsProg").innerHTML = parseFloat(userPercentScoreQTraffAllLevelsProgress).toFixed(1) + "%";

//Prawo jazdy: odblokowanie poziomów:
var TraffL2Target = 90; // ilość wymaganych % do odblokowania testu: History - Level 2
var TraffL3Target = 95; // ilość wymaganych % do odblokowania testu: History - Level 3

//Prawo jazdy - poziom 1:
var qTraffLevOneQuesAmount = 22;   // 22
document.getElementById("TraffL1Q1Number").innerHTML = "Pytanie 1/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q2Number").innerHTML = "Pytanie 2/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q3Number").innerHTML = "Pytanie 3/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q4Number").innerHTML = "Pytanie 4/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q5Number").innerHTML = "Pytanie 5/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q6Number").innerHTML = "Pytanie 6/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q7Number").innerHTML = "Pytanie 7/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q8Number").innerHTML = "Pytanie 8/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q9Number").innerHTML = "Pytanie 9/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q10Number").innerHTML = "Pytanie 10/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q11Number").innerHTML = "Pytanie 11/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q12Number").innerHTML = "Pytanie 12/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q13Number").innerHTML = "Pytanie 13/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q14Number").innerHTML = "Pytanie 14/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q15Number").innerHTML = "Pytanie 15/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q16Number").innerHTML = "Pytanie 16/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q17Number").innerHTML = "Pytanie 17/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q18Number").innerHTML = "Pytanie 18/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q19Number").innerHTML = "Pytanie 19/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q20Number").innerHTML = "Pytanie 20/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q21Number").innerHTML = "Pytanie 21/" + qTraffLevOneQuesAmount + ":";
document.getElementById("TraffL1Q22Number").innerHTML = "Pytanie 22/" + qTraffLevOneQuesAmount + ":";
var userScoreQuizTrafficRegulationsLevelOne = 0;
var nextQuizTrafficRegulationsLevelOnePage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQTraffLevOne = 0;
//var userBestScoreQTraffLevOne = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQTraffLevOneProgress = 0; //Postęp danego testu:
//document.getElementById("qTraffLev1Prog").innerHTML = parseFloat(userPercentScoreQTraffLevOneProgress).toFixed(1) + "%";

//Prawo jazdy - poziom 2:
var qTraffLevTwoQuesAmount = 25;   // 25
document.getElementById("TraffL2Q1Number").innerHTML = "Pytanie 1/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q2Number").innerHTML = "Pytanie 2/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q3Number").innerHTML = "Pytanie 3/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q4Number").innerHTML = "Pytanie 4/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q5Number").innerHTML = "Pytanie 5/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q6Number").innerHTML = "Pytanie 6/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q7Number").innerHTML = "Pytanie 7/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q8Number").innerHTML = "Pytanie 8/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q9Number").innerHTML = "Pytanie 9/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q10Number").innerHTML = "Pytanie 10/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q11Number").innerHTML = "Pytanie 11/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q12Number").innerHTML = "Pytanie 12/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q13Number").innerHTML = "Pytanie 13/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q14Number").innerHTML = "Pytanie 14/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q15Number").innerHTML = "Pytanie 15/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q16Number").innerHTML = "Pytanie 16/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q17Number").innerHTML = "Pytanie 17/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q18Number").innerHTML = "Pytanie 18/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q19Number").innerHTML = "Pytanie 19/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q20Number").innerHTML = "Pytanie 20/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q21Number").innerHTML = "Pytanie 21/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q22Number").innerHTML = "Pytanie 22/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q23Number").innerHTML = "Pytanie 23/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q24Number").innerHTML = "Pytanie 24/" + qTraffLevTwoQuesAmount + ":";
document.getElementById("TraffL2Q25Number").innerHTML = "Pytanie 25/" + qTraffLevTwoQuesAmount + ":";
var userScoreQuizTrafficRegulationsLevelTwo = 0;
var nextQuizTrafficRegulationsLevelTwoPage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQTraffLevTwo = 0;
//var userBestScoreQTraffLevTwo = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQTraffLevTwoProgress = 0; //Postęp danego testu:
//document.getElementById("qTraffLev2Prog").innerHTML = parseFloat(userPercentScoreQTraffLevTwoProgress).toFixed(1) + "%";

//Prawo jazdy - poziom 3:
var qTraffLevThreeQuesAmount = 28;   // 28
document.getElementById("TraffL3Q1Number").innerHTML = "Pytanie 1/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q2Number").innerHTML = "Pytanie 2/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q3Number").innerHTML = "Pytanie 3/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q4Number").innerHTML = "Pytanie 4/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q5Number").innerHTML = "Pytanie 5/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q6Number").innerHTML = "Pytanie 6/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q7Number").innerHTML = "Pytanie 7/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q8Number").innerHTML = "Pytanie 8/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q9Number").innerHTML = "Pytanie 9/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q10Number").innerHTML = "Pytanie 10/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q11Number").innerHTML = "Pytanie 11/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q12Number").innerHTML = "Pytanie 12/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q13Number").innerHTML = "Pytanie 13/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q14Number").innerHTML = "Pytanie 14/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q15Number").innerHTML = "Pytanie 15/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q16Number").innerHTML = "Pytanie 16/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q17Number").innerHTML = "Pytanie 17/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q18Number").innerHTML = "Pytanie 18/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q19Number").innerHTML = "Pytanie 19/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q20Number").innerHTML = "Pytanie 20/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q21Number").innerHTML = "Pytanie 21/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q22Number").innerHTML = "Pytanie 22/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q23Number").innerHTML = "Pytanie 23/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q24Number").innerHTML = "Pytanie 24/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q25Number").innerHTML = "Pytanie 25/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q26Number").innerHTML = "Pytanie 26/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q27Number").innerHTML = "Pytanie 27/" + qTraffLevThreeQuesAmount + ":";
document.getElementById("TraffL3Q28Number").innerHTML = "Pytanie 28/" + qTraffLevThreeQuesAmount + ":";
var userScoreQuizTrafficRegulationsLevelThree = 0;
var nextQuizTrafficRegulationsLevelThreePage = 0; //maksymalnie 20 stron pytań
var userPercentScoreQTraffLevThree = 0;
//var userBestScoreQTraffLevThree = 0; //Najlepszy wynik danego testu:
//var userPercentScoreQTraffLevThreeProgress = 0; //Postęp danego testu:
//document.getElementById("qTraffLev3Prog").innerHTML = parseFloat(userPercentScoreQTraffLevThreeProgress).toFixed(1) + "%";


//Quiz World: Introduction
const quizIntroduction = document.getElementById("QuizIntroduction");
quizIntroduction.style.display = "block";
//quizMenuCategoriesCountriecBackButton

//Quiz World: Menu
const quizMainMenu = document.getElementById("QuizMainMenu");
const quizCategories = document.getElementById("QuizCategories");
const quizProgress = document.getElementById("QuizProgress");
const quizAchievements = document.getElementById("QuizAchievements");
const quizCategoriesCountries = document.getElementById("QuizCategoriesCountries");
const quizCategoriesHistory = document.getElementById("QuizCategoriesHistory");
const quizCategoriesTrafficRegulations = document.getElementById("QuizCategoriesTrafficRegulations");
function goToQuizAplicationMainMenu() {
	document.getElementById("audio_selectSound").play();
	quizIntroduction.style.display = "none";
	quizMainMenu.style.display = "block";
	document.getElementById("quizMainMenuExtraText").style.display = "flex";
	quizCategories.style.display = "none";
	document.getElementById("quizMenuCategoriesBackButton").style.display = "none";
	quizProgress.style.display = "none";
	document.getElementById("quizProgressBackButton").style.display = "none";
	quizAchievements.style.display = "none";
	document.getElementById("quizAchievementsBackButton").style.display = "none";
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
    quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
    quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
}
function goToQuizAplicationCategories() {
	document.getElementById("audio_selectSound").play();
	quizMainMenu.style.display = "none";
	document.getElementById("quizMainMenuExtraText").style.display = "none";
	quizCategories.style.display = "block";
	document.getElementById("quizMenuCategoriesBackButton").style.display = "flex";
	quizProgress.style.display = "none";
	document.getElementById("quizProgressBackButton").style.display = "none";
	quizAchievements.style.display = "none";
	document.getElementById("quizAchievementsBackButton").style.display = "none";
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
    quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
    quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
}
function goToQuizAplicationProgress() {
	document.getElementById("audio_selectSound").play();
	quizMainMenu.style.display = "none";
	document.getElementById("quizMainMenuExtraText").style.display = "none";
	quizCategories.style.display = "none";
	document.getElementById("quizMenuCategoriesBackButton").style.display = "none";
	quizProgress.style.display = "block";
	document.getElementById("quizProgressBackButton").style.display = "flex";
	quizAchievements.style.display = "none";
	document.getElementById("quizAchievementsBackButton").style.display = "none";
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
    quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
    quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
}
function goToQuizAplicationAchievements() {
	document.getElementById("audio_selectSound").play();
	quizMainMenu.style.display = "none";
	document.getElementById("quizMainMenuExtraText").style.display = "none";
	quizCategories.style.display = "none";
	document.getElementById("quizMenuCategoriesBackButton").style.display = "none";
	quizProgress.style.display = "none";
	document.getElementById("quizProgressBackButton").style.display = "none";
	quizAchievements.style.display = "block";
	document.getElementById("quizAchievementsBackButton").style.display = "flex";
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
    quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
    quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
}
function goToQuizAplicationCountries() {
	document.getElementById("audio_selectSound").play();
	quizMainMenu.style.display = "none";
	document.getElementById("quizMainMenuExtraText").style.display = "none";
	quizCategories.style.display = "none";
	document.getElementById("quizMenuCategoriesBackButton").style.display = "none";
	quizProgress.style.display = "none";
	document.getElementById("quizProgressBackButton").style.display = "none";
	quizAchievements.style.display = "none";
	document.getElementById("quizAchievementsBackButton").style.display = "none";
	quizCategoriesCountries.style.display = "block";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "flex";
    quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
    quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
}
    function eraseUserScoreQuizCountriesLevelOne() {
		nextQuizCountriesLevelOnePage = (nextQuizCountriesLevelOnePage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelOnePage;
		document.getElementById("QuizCountriesLevelOnePageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesCountriesSummaryBackButton").style.display = "none";
		userScoreQuizCountriesLevelOne = (userScoreQuizCountriesLevelOne * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelOne;
		document.getElementById("qCount_L1_score").innerHTML = userScoreQuizCountriesLevelOne;
	}
	function eraseUserScoreQuizCountriesLevelTwo() {
		nextQuizCountriesLevelTwoPage = (nextQuizCountriesLevelTwoPage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelTwoPage;
		document.getElementById("QuizCountriesLevelTwoPageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesCountriesSummaryBackButton").style.display = "none";
		userScoreQuizCountriesLevelTwo = (userScoreQuizCountriesLevelTwo * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelTwo;
		document.getElementById("qCount_L2_score").innerHTML = userScoreQuizCountriesLevelTwo;
	}
	function eraseUserScoreQuizCountriesLevelThree() {
		nextQuizCountriesLevelThreePage = (nextQuizCountriesLevelThreePage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelThreePage;
		document.getElementById("QuizCountriesLevelThreePageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesCountriesSummaryBackButton").style.display = "none";
		userScoreQuizCountriesLevelThree = (userScoreQuizCountriesLevelThree * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelThree;
		document.getElementById("qCount_L3_score").innerHTML = userScoreQuizCountriesLevelThree;
	}
function goToQuizAplicationHistory() {
	document.getElementById("audio_selectSound").play();
	quizMainMenu.style.display = "none";
	document.getElementById("quizMainMenuExtraText").style.display = "none";
	quizCategories.style.display = "none";
	document.getElementById("quizMenuCategoriesBackButton").style.display = "none";
	quizProgress.style.display = "none";
	document.getElementById("quizProgressBackButton").style.display = "none";
	quizAchievements.style.display = "none";
	document.getElementById("quizAchievementsBackButton").style.display = "none";
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
    quizCategoriesHistory.style.display = "block";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "flex";
    quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
}
    function eraseUserScoreQuizHistoryLevelOne() {
		nextQuizHistoryLevelOnePage = (nextQuizHistoryLevelOnePage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelOnePage;
		document.getElementById("QuizHistoryLevelOnePageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesHistorySummaryBackButton").style.display = "none";
		userScoreQuizHistoryLevelOne = (userScoreQuizHistoryLevelOne * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelOne;
		document.getElementById("qHis_L1_score").innerHTML = userScoreQuizHistoryLevelOne;
	}
	function eraseUserScoreQuizHistoryLevelTwo() {   // Skasuj nawiasy jak ogarniesz ten test i funkcję back-button'u do menu kategorii tego testu
		nextQuizHistoryLevelTwoPage = (nextQuizHistoryLevelTwoPage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelTwoPage;
		document.getElementById("QuizHistoryLevelTwoPageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesHistorySummaryBackButton").style.display = "none";
		userScoreQuizHistoryLevelTwo = (userScoreQuizHistoryLevelTwo * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelTwo;
		document.getElementById("qHis_L2_score").innerHTML = userScoreQuizHistoryLevelTwo;
	}
	function eraseUserScoreQuizHistoryLevelThree() {   // Skasuj nawiasy jak ogarniesz ten test i funkcję back-button'u do menu kategorii tego testu
		nextQuizHistoryLevelThreePage = (nextQuizHistoryLevelThreePage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelThreePage;
		document.getElementById("QuizHistoryLevelThreePageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesHistorySummaryBackButton").style.display = "none";
		userScoreQuizHistoryLevelThree = (userScoreQuizHistoryLevelThree * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelThree;
		document.getElementById("qHis_L3_score").innerHTML = userScoreQuizHistoryLevelThree;
	}
function goToQuizAplicationTrafficRegulations() {
	document.getElementById("audio_selectSound").play();
	quizMainMenu.style.display = "none";
	document.getElementById("quizMainMenuExtraText").style.display = "none";
	quizCategories.style.display = "none";
	document.getElementById("quizMenuCategoriesBackButton").style.display = "none";
	quizProgress.style.display = "none";
	document.getElementById("quizProgressBackButton").style.display = "none";
	quizAchievements.style.display = "none";
	document.getElementById("quizAchievementsBackButton").style.display = "none";
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
    quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
    quizCategoriesTrafficRegulations.style.display = "block";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "flex";
}
    function eraseUserScoreQuizTrafficRegulationsLevelOne() {   // Skasuj nawiasy jak ogarniesz ten test i funkcję back-button'u do menu kategorii tego testu
		nextQuizTrafficRegulationsLevelOnePage = (nextQuizTrafficRegulationsLevelOnePage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelOnePage;
		document.getElementById("QuizTrafficRegulationsLevelOnePageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesTrafficRegulationsSummaryBackButton").style.display = "none";
		userScoreQuizHistoryLevelOne = (userScoreQuizHistoryLevelOne * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelOne;
		document.getElementById("qTraff_L1_score").innerHTML = userScoreQuizTrafficRegulationsLevelOne;
	}
	function eraseUserScoreQuizTrafficRegulationsLevelTwo() {   // Skasuj nawiasy jak ogarniesz ten test i funkcję back-button'u do menu kategorii tego testu
		nextQuizTrafficRegulationsLevelTwoPage = (nextQuizTrafficRegulationsLevelTwoPage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelTwoPage;
		document.getElementById("QuizTrafficRegulationsLevelTwoPageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesTrafficRegulationsSummaryBackButton").style.display = "none";
		userScoreQuizHistoryLevelTwo = (userScoreQuizHistoryLevelTwo * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelTwo;
		document.getElementById("qTraff_L2_score").innerHTML = userScoreQuizTrafficRegulationsLevelTwo;
	}
	function eraseUserScoreQuizTrafficRegulationsLevelThree() {   // Skasuj nawiasy jak ogarniesz ten test i funkcję back-button'u do menu kategorii tego testu
		nextQuizTrafficRegulationsLevelThreePage = (nextQuizTrafficRegulationsLevelThreePage * 0);
		document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelThreePage;
		document.getElementById("QuizTrafficRegulationsLevelThreePageSummaryQaA").style.display = "none";
		document.getElementById("quizMenuCategoriesTrafficRegulationsSummaryBackButton").style.display = "none";
		userScoreQuizHistoryLevelThree = (userScoreQuizHistoryLevelThree * 0);
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelThree;
		document.getElementById("qTraff_L3_score").innerHTML = userScoreQuizTrafficRegulationsLevelThree;
	}
    


/*Start testów:*/
// Countries - level 1:
function quizCategoryCountriesLevelOneStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizCountriesLevelOnePage = nextQuizCountriesLevelOnePage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelOnePage; // Pomocniczy licznik
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
	if (nextQuizCountriesLevelOnePage == 1) {
		document.getElementById("QuizCountriesLevelOnePage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelCountriesLevelOne").style.display = "flex";
		const nextAnswButtTitle_NP1 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP1.length; i++) {
			nextAnswButtTitle_NP1[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}
// Countries - level 2:
function quizCategoryCountriesLevelTwoStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizCountriesLevelTwoPage = nextQuizCountriesLevelTwoPage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelTwoPage; // Pomocniczy licznik
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
	if (nextQuizCountriesLevelTwoPage == 1) {
		document.getElementById("QuizCountriesLevelTwoPage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelCountriesLevelTwo").style.display = "flex";
		const nextAnswButtTitle_NP2 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP2.length; i++) {
			nextAnswButtTitle_NP2[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}
// Countries - level 3:
function quizCategoryCountriesLevelThreeStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizCountriesLevelThreePage = nextQuizCountriesLevelThreePage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelThreePage; // Pomocniczy licznik
	quizCategoriesCountries.style.display = "none";
	document.getElementById("quizMenuCategoriesCountriesBackButton").style.display = "none";
	if (nextQuizCountriesLevelThreePage == 1) {
		document.getElementById("QuizCountriesLevelThreePage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelCountriesLevelThree").style.display = "flex";
		const nextAnswButtTitle_NP3 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP3.length; i++) {
			nextAnswButtTitle_NP3[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}
// History - level 1:
function quizCategoryHistoryLevelOneStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizHistoryLevelOnePage = nextQuizHistoryLevelOnePage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelOnePage; // Pomocniczy licznik
	quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
	if (nextQuizHistoryLevelOnePage == 1) {
		document.getElementById("QuizHistoryLevelOnePage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelHistoryLevelOne").style.display = "flex";
		const nextAnswButtTitle_NP4 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP4.length; i++) {
			nextAnswButtTitle_NP4[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}
// History - level 2:
function quizCategoryHistoryLevelTwoStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizHistoryLevelTwoPage = nextQuizHistoryLevelTwoPage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelTwoPage; // Pomocniczy licznik
	quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
	if (nextQuizHistoryLevelTwoPage == 1) {
		document.getElementById("QuizHistoryLevelTwoPage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelHistoryLevelTwo").style.display = "flex";
		const nextAnswButtTitle_NP5 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP5.length; i++) {
			nextAnswButtTitle_NP5[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}
// History - level 3:
function quizCategoryHistoryLevelThreeStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizHistoryLevelThreePage = nextQuizHistoryLevelThreePage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelThreePage; // Pomocniczy licznik
	quizCategoriesHistory.style.display = "none";
	document.getElementById("quizMenuCategoriesHistoryBackButton").style.display = "none";
	if (nextQuizHistoryLevelThreePage == 1) {
		document.getElementById("QuizHistoryLevelThreePage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelHistoryLevelThree").style.display = "flex";
		const nextAnswButtTitle_NP6 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP6.length; i++) {
			nextAnswButtTitle_NP6[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}
// Traffic Regulations - level 1:
function quizCategoryTrafficRegulationsLevelOneStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizTrafficRegulationsLevelOnePage = nextQuizTrafficRegulationsLevelOnePage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelOnePage; // Pomocniczy licznik
	quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
	if (nextQuizTrafficRegulationsLevelOnePage == 1) {
		document.getElementById("QuizTrafficRegulationsLevelOnePage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelTrafficRegulationsLevelOne").style.display = "flex";
		const nextAnswButtTitle_NP7 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP7.length; i++) {
			nextAnswButtTitle_NP7[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}
// Traffic Regulations - level 2:
function quizCategoryTrafficRegulationsLevelTwoStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizTrafficRegulationsLevelTwoPage = nextQuizTrafficRegulationsLevelTwoPage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelTwoPage; // Pomocniczy licznik
	quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
	if (nextQuizTrafficRegulationsLevelTwoPage == 1) {
		document.getElementById("QuizTrafficRegulationsLevelTwoPage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelTrafficRegulationsLevelTwo").style.display = "flex";
		const nextAnswButtTitle_NP8 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP8.length; i++) {
			nextAnswButtTitle_NP8[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}
// Traffic Regulations - level 3:
function quizCategoryTrafficRegulationsLevelThreeStart() {
	backgroundMusic.currentTime = 0;   // Odtwarzanie ścieżki dżwiękowej / filmu od nowa
	backgroundMusic.play();
	backgroundMusic.volume = 0.4;
	nextQuizTrafficRegulationsLevelThreePage = nextQuizTrafficRegulationsLevelThreePage + 1;
	document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelThreePage; // Pomocniczy licznik
	quizCategoriesTrafficRegulations.style.display = "none";
	document.getElementById("quizMenuCategoriesTrafficRegulationsBackButton").style.display = "none";
	if (nextQuizTrafficRegulationsLevelThreePage == 1) {
		document.getElementById("QuizTrafficRegulationsLevelThreePage1QaA").style.display = "block";
		document.getElementById("quizBottomPanelTrafficRegulationsLevelThree").style.display = "flex";
		const nextAnswButtTitle_NP9 = document.getElementsByClassName("next_question_button_text");
		for (let i = 0; i < nextAnswButtTitle_NP9.length; i++) {
			nextAnswButtTitle_NP9[i].innerHTML = "Nastepne Pytanie";
		}
	}
	else {
		
	}
}



//Prawidłowe i dobre odpowiedzi, względem zmiennych wartości wyniku quizu i jego progress'u:

//trzeba tutaj zrobić osobne funkcje do osobnych zmiennych wyników danego testu danej kategorii

//Państwa - poziom 1:
//Prawidłowa odpowieź: //QCatCountL1
function oneTimeActiveQCatCountL1True() {
	document.getElementById("nextQuizCountriesLevelOnePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik
		userScoreQuizCountriesLevelOne = userScoreQuizCountriesLevelOne + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelOne;
		document.getElementById("info_Proper_Block_C_L1").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_C_L1").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_1").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatCountL1
function oneTimeActiveQCatCountL1False() {
	document.getElementById("nextQuizCountriesLevelOnePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizCountriesLevelOne = userScoreQuizCountriesLevelOne + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelOne;   // Pomocniczy licznik & Nie zmieniaj nazw!!!
		document.getElementById("info_Proper_Block_C_L1").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_C_L1").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_1").play();
    }
	else {
		
	}
}

//Państwa - poziom 2:
//Prawidłowa odpowieź: //QCatCountL2
function oneTimeActiveQCatCountL2True() {
	document.getElementById("nextQuizCountriesLevelTwoPageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizCountriesLevelTwo = userScoreQuizCountriesLevelTwo + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelTwo;   // Pomocniczy licznik
		document.getElementById("info_Proper_Block_C_L2").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_C_L2").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_2").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatCountL2
function oneTimeActiveQCatCountL2False() {
	document.getElementById("nextQuizCountriesLevelTwoPageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizCountriesLevelTwo = userScoreQuizCountriesLevelTwo + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelTwo;   // Pomocniczy licznik
		document.getElementById("info_Proper_Block_C_L2").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_C_L2").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_2").play();
    }
	else {
		
	}
}

//Państwa - poziom 3:
//Prawidłowa odpowieź: //QCatCountL3
function oneTimeActiveQCatCountL3True() {
	document.getElementById("nextQuizCountriesLevelThreePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizCountriesLevelThree = userScoreQuizCountriesLevelThree + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelThree;   // Pomocniczy licznik
		document.getElementById("info_Proper_Block_C_L3").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_C_L3").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_3").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatCountL3
function oneTimeActiveQCatCountL3False() {
	document.getElementById("nextQuizCountriesLevelThreePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizCountriesLevelThree = userScoreQuizCountriesLevelThree + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizCountriesLevelThree;   // Pomocniczy licznik
		document.getElementById("info_Proper_Block_C_L3").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_C_L3").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_3").play();
    }
	else {
		
	}
}

//Historia - poziom 1:
//Prawidłowa odpowieź: //QCatHisL1
function oneTimeActiveQCatHisL1True() {
	document.getElementById("nextQuizHistoryLevelOnePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik
		userScoreQuizHistoryLevelOne = userScoreQuizHistoryLevelOne + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelOne;
		document.getElementById("info_Proper_Block_H_L1").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_H_L1").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_4").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatHisL1
function oneTimeActiveQCatHisL1False() {
	document.getElementById("nextQuizHistoryLevelOnePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizHistoryLevelOne = userScoreQuizHistoryLevelOne + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelOne;   // Pomocniczy licznik & Nie zmieniaj nazw!!!
		document.getElementById("info_Proper_Block_H_L1").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_H_L1").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_4").play();
    }
	else {
		
	}
}

//Historia - poziom 2:
//Prawidłowa odpowieź: //QCatHisL2
function oneTimeActiveQCatHisL2True() {
	document.getElementById("nextQuizHistoryLevelTwoPageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik
		userScoreQuizHistoryLevelTwo = userScoreQuizHistoryLevelTwo + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelTwo;
		document.getElementById("info_Proper_Block_H_L2").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_H_L2").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_5").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatHisL2
function oneTimeActiveQCatHisL2False() {
	document.getElementById("nextQuizHistoryLevelTwoPageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizHistoryLevelTwo = userScoreQuizHistoryLevelTwo + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelTwo;   // Pomocniczy licznik & Nie zmieniaj nazw!!!
		document.getElementById("info_Proper_Block_H_L2").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_H_L2").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_5").play();
    }
	else {
		
	}
}

//Historia - poziom 3:
//Prawidłowa odpowieź: //QCatHisL3
function oneTimeActiveQCatHisL3True() {
	document.getElementById("nextQuizHistoryLevelThreePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik
		userScoreQuizHistoryLevelThree = userScoreQuizHistoryLevelThree + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelThree;
		document.getElementById("info_Proper_Block_H_L3").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_H_L3").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_6").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatHisL3
function oneTimeActiveQCatHisL3False() {
	document.getElementById("nextQuizHistoryLevelThreePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizHistoryLevelThree = userScoreQuizHistoryLevelThree + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizHistoryLevelThree;   // Pomocniczy licznik & Nie zmieniaj nazw!!!
		document.getElementById("info_Proper_Block_H_L3").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_H_L3").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_6").play();
    }
	else {
		
	}
}

//Prawo jazdy - poziom 1:
//Prawidłowa odpowieź: //QCatTraffL1
function oneTimeActiveQCatTraffL1True() {
	document.getElementById("nextQuizTrafficRegulationsLevelOnePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik
		userScoreQuizTrafficRegulationsLevelOne = userScoreQuizTrafficRegulationsLevelOne + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelOne;
		document.getElementById("info_Proper_Block_T_L1").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_T_L1").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_7").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatTraffL1
function oneTimeActiveQCatTraffL1False() {
	document.getElementById("nextQuizTrafficRegulationsLevelOnePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizTrafficRegulationsLevelOne = userScoreQuizTrafficRegulationsLevelOne + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelOne;   // Pomocniczy licznik & Nie zmieniaj nazw!!!
		document.getElementById("info_Proper_Block_T_L1").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_T_L1").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_7").play();
    }
	else {
		
	}
}

//Prawo jazdy - poziom 2:
//Prawidłowa odpowieź: //QCatTraffL2
function oneTimeActiveQCatTraffL2True() {
	document.getElementById("nextQuizTrafficRegulationsLevelTwoPageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik
		userScoreQuizTrafficRegulationsLevelTwo = userScoreQuizTrafficRegulationsLevelTwo + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelTwo;
		document.getElementById("info_Proper_Block_T_L2").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_T_L2").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_8").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatTraffL2
function oneTimeActiveQCatTraffL2False() {
	document.getElementById("nextQuizTrafficRegulationsLevelTwoPageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizTrafficRegulationsLevelTwo = userScoreQuizTrafficRegulationsLevelTwo + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelTwo;   // Pomocniczy licznik & Nie zmieniaj nazw!!!
		document.getElementById("info_Proper_Block_T_L2").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_T_L2").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_8").play();
		document.getElementById("audio_Laugh_8").volume = 0.5;
    }
	else {
		
	}
}

//Prawo jazdy - poziom 3:
//Prawidłowa odpowieź: //QCatTraffL3
function oneTimeActiveQCatTraffL3True() {
	document.getElementById("nextQuizTrafficRegulationsLevelThreePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik
		userScoreQuizTrafficRegulationsLevelThree = userScoreQuizTrafficRegulationsLevelThree + 1;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelThree;
		document.getElementById("info_Proper_Block_T_L3").style.backgroundColor = "rgba(112,192,80,1.0)";
		document.getElementById("info_Proper_Value_T_L3").innerHTML = "Poprawna odpowiedź!";
		document.getElementById("audio_Yay_9").play();
    }
	else {
		
	}
}
//Fałszywa odpowiedź: //QCatTraffL3
function oneTimeActiveQCatTraffL3False() {
	document.getElementById("nextQuizTrafficRegulationsLevelThreePageBlock").style.display = "flex";
	if (oneTimeFuncPointScoreBlockade == 0) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade + 1;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;   // Pomocniczy licznik & Nie zmieniaj nazw
		userScoreQuizTrafficRegulationsLevelThree = userScoreQuizTrafficRegulationsLevelThree + 0;
		document.getElementById("userScoreValue").innerHTML = userScoreQuizTrafficRegulationsLevelThree;   // Pomocniczy licznik & Nie zmieniaj nazw!!!
		document.getElementById("info_Proper_Block_T_L3").style.backgroundColor = "rgba(236,65,65,1.0)";
		document.getElementById("info_Proper_Value_T_L3").innerHTML = "Błędna odpowiedź!";
		document.getElementById("audio_Laugh_9").play();
    }
	else {
		
	}
}



// Następna strona (reset wartości [oneTimeFuncPointScoreBlockade]):

// Countries - Level 1:
function nextQuizCountLevelOnePage() {
	document.getElementById("nextQuizCountriesLevelOnePageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_C_L1").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_C_L1").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizCountriesLevelOnePage <= 20) {
			nextQuizCountriesLevelOnePage = nextQuizCountriesLevelOnePage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelOnePage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizCountriesLevelOnePage == 2) {
				document.getElementById("QuizCountriesLevelOnePage1QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage2QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 3) {
				document.getElementById("QuizCountriesLevelOnePage2QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage3QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 4) {
				document.getElementById("QuizCountriesLevelOnePage3QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage4QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 5) {
				document.getElementById("QuizCountriesLevelOnePage4QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage5QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 6) {
				document.getElementById("QuizCountriesLevelOnePage5QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage6QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 7) {
				document.getElementById("QuizCountriesLevelOnePage6QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage7QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 8) {
				document.getElementById("QuizCountriesLevelOnePage7QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage8QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 9) {
				document.getElementById("QuizCountriesLevelOnePage8QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage9QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 10) {
				document.getElementById("QuizCountriesLevelOnePage9QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage10QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 11) {
				document.getElementById("QuizCountriesLevelOnePage10QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage11QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 12) {
				document.getElementById("QuizCountriesLevelOnePage11QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage12QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 13) {
				document.getElementById("QuizCountriesLevelOnePage12QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage13QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 14) {
				document.getElementById("QuizCountriesLevelOnePage13QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage14QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 15) {
				document.getElementById("QuizCountriesLevelOnePage14QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage15QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 16) {
				document.getElementById("QuizCountriesLevelOnePage15QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage16QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 17) {
				document.getElementById("QuizCountriesLevelOnePage16QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage17QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 18) {
				document.getElementById("QuizCountriesLevelOnePage17QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage18QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 19) {
				document.getElementById("QuizCountriesLevelOnePage18QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage19QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelOnePage == 20) {
				document.getElementById("QuizCountriesLevelOnePage19QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePage20QaA").style.display = "block";
				const nextAnswButtTitle_P1 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P1.length; i++) {
					nextAnswButtTitle_P1[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizCountriesLevelOnePage == 21) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizCountriesLevelOnePage20QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelOnePageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesCountriesSummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelCountriesLevelOne").style.display = "none";
				document.getElementById("qCount_L1_score").innerHTML = userScoreQuizCountriesLevelOne;
				userPercentScoreQCountLevOne = ((100/qCountLevOneQuesAmount) * userScoreQuizCountriesLevelOne);
				document.getElementById("qCount_L1_percentScore").innerHTML = parseFloat(userPercentScoreQCountLevOne).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizCountriesLevelOne > Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevOne"))) {
					// Najlepszy wynik 1 poziomu, kategorii - Państwa:
					var userBestScoreQCountLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevOne"));
					userBestScoreQCountLevOne = ((userBestScoreQCountLevOne * 0) + userScoreQuizCountriesLevelOne);
					window.localStorage.setItem("localstorage_userBestScoreQCountLevOne", userBestScoreQCountLevOne);
					document.getElementById("qCountLev1BestScore").innerHTML = userBestScoreQCountLevOne;
					// Postęp 1 poziomu, kategorii - Państwa://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQCountLevOneProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevOneProgress")); //Postęp danego testu:
					userPercentScoreQCountLevOneProgress = ((100/qCountLevOneQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevOne")));
					window.localStorage.setItem("localStorage_userPercentScoreQCountLevOneProgress", userPercentScoreQCountLevOneProgress);
					document.getElementById("qCountLev1Prog").innerHTML = parseFloat(userPercentScoreQCountLevOneProgress).toFixed(0) + "%";
		            // Całkowity postęp kategorii - Państwa:
					var userPercentScoreQCountAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress"));
	                userPercentScoreQCountAllLevelsProgress = ((userPercentScoreQCountAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQCountAllLevelsProgress", userPercentScoreQCountAllLevelsProgress);
                    document.getElementById("qCountAllLevelsProg").innerHTML = parseFloat(userPercentScoreQCountAllLevelsProgress).toFixed(0) + "%";
					// Całkowity postęp całego Quiz World:
                    var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizCountriesLevelOne == Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevOne"))) {
					var userBestScoreQCountLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevOne"));
					userBestScoreQCountLevOne = ((userBestScoreQCountLevOne * 0) + userScoreQuizCountriesLevelOne);
					window.localStorage.setItem("localstorage_userBestScoreQCountLevOne", userBestScoreQCountLevOne);
					document.getElementById("qCountLev1BestScore").innerHTML = userBestScoreQCountLevOne;
				}
				else {
				}
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevOneProgress")) >= CountL2Target) {
					document.getElementById("catCountL2Block").style.display = "none";
					document.getElementById("catCountL2Unblock").style.display = "flex";
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
							var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
								var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
									var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            //Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
										var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                //Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}

// Countries - Level 2:
function nextQuizCountLevelTwoPage() {
	document.getElementById("nextQuizCountriesLevelTwoPageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_C_L2").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_C_L2").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizCountriesLevelTwoPage <= 22) {
			nextQuizCountriesLevelTwoPage = nextQuizCountriesLevelTwoPage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelTwoPage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizCountriesLevelTwoPage == 2) {
				document.getElementById("QuizCountriesLevelTwoPage1QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage2QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 3) {
				document.getElementById("QuizCountriesLevelTwoPage2QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage3QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 4) {
				document.getElementById("QuizCountriesLevelTwoPage3QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage4QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 5) {
				document.getElementById("QuizCountriesLevelTwoPage4QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage5QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 6) {
				document.getElementById("QuizCountriesLevelTwoPage5QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage6QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 7) {
				document.getElementById("QuizCountriesLevelTwoPage6QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage7QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 8) {
				document.getElementById("QuizCountriesLevelTwoPage7QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage8QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 9) {
				document.getElementById("QuizCountriesLevelTwoPage8QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage9QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 10) {
				document.getElementById("QuizCountriesLevelTwoPage9QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage10QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 11) {
				document.getElementById("QuizCountriesLevelTwoPage10QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage11QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 12) {
				document.getElementById("QuizCountriesLevelTwoPage11QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage12QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 13) {
				document.getElementById("QuizCountriesLevelTwoPage12QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage13QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 14) {
				document.getElementById("QuizCountriesLevelTwoPage13QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage14QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 15) {
				document.getElementById("QuizCountriesLevelTwoPage14QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage15QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 16) {
				document.getElementById("QuizCountriesLevelTwoPage15QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage16QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 17) {
				document.getElementById("QuizCountriesLevelTwoPage16QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage17QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 18) {
				document.getElementById("QuizCountriesLevelTwoPage17QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage18QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 19) {
				document.getElementById("QuizCountriesLevelTwoPage18QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage19QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 20) {
				document.getElementById("QuizCountriesLevelTwoPage19QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage20QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 21) {
				document.getElementById("QuizCountriesLevelTwoPage20QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage21QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelTwoPage == 22) {
				document.getElementById("QuizCountriesLevelTwoPage21QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPage22QaA").style.display = "block";
				const nextAnswButtTitle_P2 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P2.length; i++) {
					nextAnswButtTitle_P2[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizCountriesLevelTwoPage == 23) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizCountriesLevelTwoPage22QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelTwoPageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesCountriesSummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelCountriesLevelTwo").style.display = "none";
				document.getElementById("qCount_L2_score").innerHTML = userScoreQuizCountriesLevelTwo;
				userPercentScoreQCountLevTwo = ((100/qCountLevTwoQuesAmount) * userScoreQuizCountriesLevelTwo);
				document.getElementById("qCount_L2_percentScore").innerHTML = parseFloat(userPercentScoreQCountLevTwo).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizCountriesLevelTwo > Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevTwo"))) {
					//Najlepszy wynik 2 poziomu, kategorii - Państwa:
					var userBestScoreQCountLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevTwo"));
					userBestScoreQCountLevTwo = ((userBestScoreQCountLevTwo * 0) + userScoreQuizCountriesLevelTwo);
					window.localStorage.setItem("localstorage_userBestScoreQCountLevTwo", userBestScoreQCountLevTwo);
					document.getElementById("qCountLev2BestScore").innerHTML = userBestScoreQCountLevTwo;
					// Postęp 2 poziomu, kategorii - Państwa://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQCountLevTwoProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevTwoProgress"));
					userPercentScoreQCountLevTwoProgress = ((100/qCountLevTwoQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevTwo")));
					window.localStorage.setItem("localStorage_userPercentScoreQCountLevTwoProgress", userPercentScoreQCountLevTwoProgress);
					document.getElementById("qCountLev2Prog").innerHTML = parseFloat(userPercentScoreQCountLevTwoProgress).toFixed(0) + "%";
					// Całkowity postęp kategorii - Państwa:
					var userPercentScoreQCountAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress"));
	                userPercentScoreQCountAllLevelsProgress = ((userPercentScoreQCountAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQCountAllLevelsProgress", userPercentScoreQCountAllLevelsProgress);
                    document.getElementById("qCountAllLevelsProg").innerHTML = parseFloat(userPercentScoreQCountAllLevelsProgress).toFixed(0) + "%";
                    // Całkowity postęp całego Quiz World:
					var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizCountriesLevelTwo == Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevTwo"))) {
					var userBestScoreQCountLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevTwo"));
					userBestScoreQCountLevTwo = ((userBestScoreQCountLevTwo * 0) + userScoreQuizCountriesLevelTwo);
					window.localStorage.setItem("localstorage_userBestScoreQCountLevTwo", userBestScoreQCountLevTwo);
					document.getElementById("qCountLev2BestScore").innerHTML = userBestScoreQCountLevTwo;
				}
				else {
				}
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevTwoProgress")) >= CountL3Target) {
					document.getElementById("catCountL3Block").style.display = "none";
					document.getElementById("catCountL3Unblock").style.display = "flex";
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
							var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
								var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
									var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            // Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
										var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                // Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}

// Countries - Level 3:
function nextQuizCountLevelThreePage() {
	document.getElementById("nextQuizCountriesLevelThreePageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_C_L3").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_C_L3").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizCountriesLevelThreePage <= 24) {
			nextQuizCountriesLevelThreePage = nextQuizCountriesLevelThreePage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizCountriesLevelThreePage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizCountriesLevelThreePage == 2) {
				document.getElementById("QuizCountriesLevelThreePage1QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage2QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 3) {
				document.getElementById("QuizCountriesLevelThreePage2QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage3QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 4) {
				document.getElementById("QuizCountriesLevelThreePage3QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage4QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 5) {
				document.getElementById("QuizCountriesLevelThreePage4QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage5QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 6) {
				document.getElementById("QuizCountriesLevelThreePage5QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage6QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 7) {
				document.getElementById("QuizCountriesLevelThreePage6QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage7QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 8) {
				document.getElementById("QuizCountriesLevelThreePage7QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage8QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 9) {
				document.getElementById("QuizCountriesLevelThreePage8QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage9QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 10) {
				document.getElementById("QuizCountriesLevelThreePage9QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage10QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 11) {
				document.getElementById("QuizCountriesLevelThreePage10QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage11QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 12) {
				document.getElementById("QuizCountriesLevelThreePage11QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage12QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 13) {
				document.getElementById("QuizCountriesLevelThreePage12QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage13QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 14) {
				document.getElementById("QuizCountriesLevelThreePage13QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage14QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 15) {
				document.getElementById("QuizCountriesLevelThreePage14QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage15QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 16) {
				document.getElementById("QuizCountriesLevelThreePage15QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage16QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 17) {
				document.getElementById("QuizCountriesLevelThreePage16QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage17QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 18) {
				document.getElementById("QuizCountriesLevelThreePage17QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage18QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 19) {
				document.getElementById("QuizCountriesLevelThreePage18QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage19QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 20) {
				document.getElementById("QuizCountriesLevelThreePage19QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage20QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 21) {
				document.getElementById("QuizCountriesLevelThreePage20QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage21QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 22) {
				document.getElementById("QuizCountriesLevelThreePage21QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage22QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 23) {
				document.getElementById("QuizCountriesLevelThreePage22QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage23QaA").style.display = "block";
			}
			else if (nextQuizCountriesLevelThreePage == 24) {
				document.getElementById("QuizCountriesLevelThreePage23QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePage24QaA").style.display = "block";
				const nextAnswButtTitle_P3 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P3.length; i++) {
					nextAnswButtTitle_P3[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizCountriesLevelThreePage == 25) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizCountriesLevelThreePage24QaA").style.display = "none";
				document.getElementById("QuizCountriesLevelThreePageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesCountriesSummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelCountriesLevelThree").style.display = "none";
				document.getElementById("qCount_L3_score").innerHTML = userScoreQuizCountriesLevelThree;
				userPercentScoreQCountLevThree = ((100/qCountLevThreeQuesAmount) * userScoreQuizCountriesLevelThree);
				document.getElementById("qCount_L3_percentScore").innerHTML = parseFloat(userPercentScoreQCountLevThree).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizCountriesLevelThree > Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevThree"))) {
					//Najlepszy wynik 3 poziomu, kategorii - Państwa:
					var userBestScoreQCountLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevThree"));
					userBestScoreQCountLevThree = ((userBestScoreQCountLevThree * 0) + userScoreQuizCountriesLevelThree);
					window.localStorage.setItem("localstorage_userBestScoreQCountLevThree", userBestScoreQCountLevThree);
					document.getElementById("qCountLev3BestScore").innerHTML = userBestScoreQCountLevThree;
					// Postęp 3 poziomu, kategorii - Państwa://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQCountLevThreeProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevThreeProgress"));
					userPercentScoreQCountLevThreeProgress = ((100/qCountLevThreeQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevThree")));
					window.localStorage.setItem("localStorage_userPercentScoreQCountLevThreeProgress", userPercentScoreQCountLevThreeProgress);
					document.getElementById("qCountLev3Prog").innerHTML = parseFloat(userPercentScoreQCountLevThreeProgress).toFixed(0) + "%";
					// Całkowity postęp kategorii - Państwa:
					var userPercentScoreQCountAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress"));
	                userPercentScoreQCountAllLevelsProgress = ((userPercentScoreQCountAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQCountAllLevelsProgress", userPercentScoreQCountAllLevelsProgress);
                    document.getElementById("qCountAllLevelsProg").innerHTML = parseFloat(userPercentScoreQCountAllLevelsProgress).toFixed(0) + "%";
                    // Całkowity postęp całego Quiz World:
					var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizCountriesLevelThree == Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevThree"))) {
					var userBestScoreQCountLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevThree"));
					userBestScoreQCountLevThree = ((userBestScoreQCountLevThree * 0) + userScoreQuizCountriesLevelThree);
					window.localStorage.setItem("localstorage_userBestScoreQCountLevThree", userBestScoreQCountLevThree);
					document.getElementById("qCountLev3BestScore").innerHTML = userBestScoreQCountLevThree;
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
							var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
						        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
						            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            // Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
						                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                // Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}

// History - Level 1:
function nextQuizHisLevelOnePage() {
	document.getElementById("nextQuizHistoryLevelOnePageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_H_L1").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_H_L1").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizHistoryLevelOnePage <= 18) {
			nextQuizHistoryLevelOnePage = nextQuizHistoryLevelOnePage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelOnePage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizHistoryLevelOnePage == 2) {
				document.getElementById("QuizHistoryLevelOnePage1QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage2QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 3) {
				document.getElementById("QuizHistoryLevelOnePage2QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage3QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 4) {
				document.getElementById("QuizHistoryLevelOnePage3QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage4QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 5) {
				document.getElementById("QuizHistoryLevelOnePage4QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage5QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 6) {
				document.getElementById("QuizHistoryLevelOnePage5QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage6QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 7) {
				document.getElementById("QuizHistoryLevelOnePage6QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage7QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 8) {
				document.getElementById("QuizHistoryLevelOnePage7QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage8QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 9) {
				document.getElementById("QuizHistoryLevelOnePage8QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage9QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 10) {
				document.getElementById("QuizHistoryLevelOnePage9QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage10QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 11) {
				document.getElementById("QuizHistoryLevelOnePage10QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage11QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 12) {
				document.getElementById("QuizHistoryLevelOnePage11QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage12QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 13) {
				document.getElementById("QuizHistoryLevelOnePage12QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage13QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 14) {
				document.getElementById("QuizHistoryLevelOnePage13QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage14QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 15) {
				document.getElementById("QuizHistoryLevelOnePage14QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage15QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 16) {
				document.getElementById("QuizHistoryLevelOnePage15QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage16QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 17) {
				document.getElementById("QuizHistoryLevelOnePage16QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage17QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelOnePage == 18) {
				document.getElementById("QuizHistoryLevelOnePage17QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePage18QaA").style.display = "block";
				const nextAnswButtTitle_P4 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P4.length; i++) {
					nextAnswButtTitle_P4[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizHistoryLevelOnePage == 19) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizHistoryLevelOnePage18QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelOnePageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesHistorySummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelHistoryLevelOne").style.display = "none";
				document.getElementById("qHis_L1_score").innerHTML = userScoreQuizHistoryLevelOne;
				userPercentScoreQHisLevOne = ((100/qHisLevOneQuesAmount) * userScoreQuizHistoryLevelOne);
				document.getElementById("qHis_L1_percentScore").innerHTML = parseFloat(userPercentScoreQHisLevOne).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizHistoryLevelOne > Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevOne"))) {
					// Najlepszy wynik 1 poziomu, kategorii - Historia:
					var userBestScoreQHisLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevOne"));
					userBestScoreQHisLevOne = ((userBestScoreQHisLevOne * 0) + userScoreQuizHistoryLevelOne);
					window.localStorage.setItem("localstorage_userBestScoreQHisLevOne", userBestScoreQHisLevOne);
					document.getElementById("qHisLev1BestScore").innerHTML = userBestScoreQHisLevOne;
					// Postęp 1 poziomu, kategorii - Historia://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQHisLevOneProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevOneProgress")); //Postęp danego testu:
					userPercentScoreQHisLevOneProgress = ((100/qHisLevOneQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevOne")));
					window.localStorage.setItem("localStorage_userPercentScoreQHisLevOneProgress", userPercentScoreQHisLevOneProgress);
					document.getElementById("qHisLev1Prog").innerHTML = parseFloat(userPercentScoreQHisLevOneProgress).toFixed(0) + "%";
		            // Całkowity postęp kategorii - Historia:
					var userPercentScoreQHisAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress"));
	                userPercentScoreQHisAllLevelsProgress = ((userPercentScoreQHisAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQHisAllLevelsProgress", userPercentScoreQHisAllLevelsProgress);
                    document.getElementById("qHisAllLevelsProg").innerHTML = parseFloat(userPercentScoreQHisAllLevelsProgress).toFixed(0) + "%";
					// Całkowity postęp całego Quiz World:
                    var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizHistoryLevelOne == Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevOne"))) {
					var userBestScoreQHisLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevOne"));
					userBestScoreQHisLevOne = ((userBestScoreQHisLevOne * 0) + userScoreQuizHistoryLevelOne);
					window.localStorage.setItem("localstorage_userBestScoreQHisLevOne", userBestScoreQHisLevOne);
					document.getElementById("qHisLev1BestScore").innerHTML = userBestScoreQHisLevOne;
				}
				else {
					
				}
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevOneProgress")) >= HisL2Target) {
					document.getElementById("catHisL2Block").style.display = "none";
					document.getElementById("catHisL2Unblock").style.display = "flex";
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
						    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
						        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
						            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            //Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
						                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                //Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}

// History - Level 2:
function nextQuizHisLevelTwoPage() {
	document.getElementById("nextQuizHistoryLevelTwoPageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_H_L2").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_H_L2").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizHistoryLevelTwoPage <= 20) {
			nextQuizHistoryLevelTwoPage = nextQuizHistoryLevelTwoPage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelTwoPage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizHistoryLevelTwoPage == 2) {
				document.getElementById("QuizHistoryLevelTwoPage1QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage2QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 3) {
				document.getElementById("QuizHistoryLevelTwoPage2QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage3QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 4) {
				document.getElementById("QuizHistoryLevelTwoPage3QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage4QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 5) {
				document.getElementById("QuizHistoryLevelTwoPage4QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage5QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 6) {
				document.getElementById("QuizHistoryLevelTwoPage5QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage6QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 7) {
				document.getElementById("QuizHistoryLevelTwoPage6QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage7QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 8) {
				document.getElementById("QuizHistoryLevelTwoPage7QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage8QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 9) {
				document.getElementById("QuizHistoryLevelTwoPage8QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage9QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 10) {
				document.getElementById("QuizHistoryLevelTwoPage9QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage10QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 11) {
				document.getElementById("QuizHistoryLevelTwoPage10QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage11QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 12) {
				document.getElementById("QuizHistoryLevelTwoPage11QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage12QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 13) {
				document.getElementById("QuizHistoryLevelTwoPage12QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage13QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 14) {
				document.getElementById("QuizHistoryLevelTwoPage13QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage14QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 15) {
				document.getElementById("QuizHistoryLevelTwoPage14QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage15QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 16) {
				document.getElementById("QuizHistoryLevelTwoPage15QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage16QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 17) {
				document.getElementById("QuizHistoryLevelTwoPage16QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage17QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 18) {
				document.getElementById("QuizHistoryLevelTwoPage17QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage18QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 19) {
				document.getElementById("QuizHistoryLevelTwoPage18QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage19QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelTwoPage == 20) {
				document.getElementById("QuizHistoryLevelTwoPage19QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPage20QaA").style.display = "block";
				const nextAnswButtTitle_P5 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P5.length; i++) {
					nextAnswButtTitle_P5[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizHistoryLevelTwoPage == 21) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizHistoryLevelTwoPage20QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelTwoPageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesHistorySummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelHistoryLevelTwo").style.display = "none";
				document.getElementById("qHis_L2_score").innerHTML = userScoreQuizHistoryLevelTwo;
				userPercentScoreQHisLevTwo = ((100/qHisLevTwoQuesAmount) * userScoreQuizHistoryLevelTwo);
				document.getElementById("qHis_L2_percentScore").innerHTML = parseFloat(userPercentScoreQHisLevTwo).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizHistoryLevelTwo > Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevTwo"))) {
					// Najlepszy wynik 2 poziomu, kategorii - Historia:
					var userBestScoreQHisLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevTwo"));
					userBestScoreQHisLevTwo = ((userBestScoreQHisLevTwo * 0) + userScoreQuizHistoryLevelTwo);
					window.localStorage.setItem("localstorage_userBestScoreQHisLevTwo", userBestScoreQHisLevTwo);
					document.getElementById("qHisLev2BestScore").innerHTML = userBestScoreQHisLevTwo;
					// Postęp 2 poziomu, kategorii - Historia://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQHisLevTwoProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevTwoProgress")); //Postęp danego testu:
					userPercentScoreQHisLevTwoProgress = ((100/qHisLevTwoQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevTwo")));
					window.localStorage.setItem("localStorage_userPercentScoreQHisLevTwoProgress", userPercentScoreQHisLevTwoProgress);
					document.getElementById("qHisLev2Prog").innerHTML = parseFloat(userPercentScoreQHisLevTwoProgress).toFixed(0) + "%";
		            // Całkowity postęp kategorii - Historia:
					var userPercentScoreQHisAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress"));
	                userPercentScoreQHisAllLevelsProgress = ((userPercentScoreQHisAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQHisAllLevelsProgress", userPercentScoreQHisAllLevelsProgress);
                    document.getElementById("qHisAllLevelsProg").innerHTML = parseFloat(userPercentScoreQHisAllLevelsProgress).toFixed(0) + "%";
					// Całkowity postęp całego Quiz World:
                    var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizHistoryLevelTwo == Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevTwo"))) {
					var userBestScoreQHisLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevTwo"));
					userBestScoreQHisLevTwo = ((userBestScoreQHisLevTwo * 0) + userScoreQuizHistoryLevelTwo);
					window.localStorage.setItem("localstorage_userBestScoreQHisLevTwo", userBestScoreQHisLevTwo);
					document.getElementById("qHisLev2BestScore").innerHTML = userBestScoreQHisLevTwo;
				}
				else {
					
				}
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevTwoProgress")) >= HisL3Target) {
					document.getElementById("catHisL3Block").style.display = "none";
					document.getElementById("catHisL3Unblock").style.display = "flex";
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
						    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
						        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
						            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            //Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
						                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                //Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}

// History - Level 3:
function nextQuizHisLevelThreePage() {
	document.getElementById("nextQuizHistoryLevelThreePageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_H_L3").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_H_L3").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizHistoryLevelThreePage <= 22) {
			nextQuizHistoryLevelThreePage = nextQuizHistoryLevelThreePage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizHistoryLevelThreePage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizHistoryLevelThreePage == 2) {
				document.getElementById("QuizHistoryLevelThreePage1QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage2QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 3) {
				document.getElementById("QuizHistoryLevelThreePage2QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage3QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 4) {
				document.getElementById("QuizHistoryLevelThreePage3QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage4QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 5) {
				document.getElementById("QuizHistoryLevelThreePage4QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage5QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 6) {
				document.getElementById("QuizHistoryLevelThreePage5QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage6QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 7) {
				document.getElementById("QuizHistoryLevelThreePage6QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage7QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 8) {
				document.getElementById("QuizHistoryLevelThreePage7QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage8QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 9) {
				document.getElementById("QuizHistoryLevelThreePage8QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage9QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 10) {
				document.getElementById("QuizHistoryLevelThreePage9QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage10QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 11) {
				document.getElementById("QuizHistoryLevelThreePage10QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage11QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 12) {
				document.getElementById("QuizHistoryLevelThreePage11QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage12QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 13) {
				document.getElementById("QuizHistoryLevelThreePage12QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage13QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 14) {
				document.getElementById("QuizHistoryLevelThreePage13QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage14QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 15) {
				document.getElementById("QuizHistoryLevelThreePage14QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage15QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 16) {
				document.getElementById("QuizHistoryLevelThreePage15QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage16QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 17) {
				document.getElementById("QuizHistoryLevelThreePage16QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage17QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 18) {
				document.getElementById("QuizHistoryLevelThreePage17QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage18QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 19) {
				document.getElementById("QuizHistoryLevelThreePage18QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage19QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 20) {
				document.getElementById("QuizHistoryLevelThreePage19QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage20QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 21) {
				document.getElementById("QuizHistoryLevelThreePage20QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage21QaA").style.display = "block";
			}
			else if (nextQuizHistoryLevelThreePage == 22) {
				document.getElementById("QuizHistoryLevelThreePage21QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePage22QaA").style.display = "block";
				const nextAnswButtTitle_P6 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P6.length; i++) {
					nextAnswButtTitle_P6[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizHistoryLevelThreePage == 23) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizHistoryLevelThreePage22QaA").style.display = "none";
				document.getElementById("QuizHistoryLevelThreePageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesHistorySummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelHistoryLevelThree").style.display = "none";
				document.getElementById("qHis_L3_score").innerHTML = userScoreQuizHistoryLevelThree;
				userPercentScoreQHisLevThree = ((100/qHisLevThreeQuesAmount) * userScoreQuizHistoryLevelThree);
				document.getElementById("qHis_L3_percentScore").innerHTML = parseFloat(userPercentScoreQHisLevThree).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizHistoryLevelThree > Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevThree"))) {
					// Najlepszy wynik 3 poziomu, kategorii - Historia:
					var userBestScoreQHisLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevThree"));
					userBestScoreQHisLevThree = ((userBestScoreQHisLevThree * 0) + userScoreQuizHistoryLevelThree);
					window.localStorage.setItem("localstorage_userBestScoreQHisLevThree", userBestScoreQHisLevThree);
					document.getElementById("qHisLev3BestScore").innerHTML = userBestScoreQHisLevThree;
					// Postęp 3 poziomu, kategorii - Historia://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQHisLevThreeProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevThreeProgress")); //Postęp danego testu:
					userPercentScoreQHisLevThreeProgress = ((100/qHisLevThreeQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevThree")));
					window.localStorage.setItem("localStorage_userPercentScoreQHisLevThreeProgress", userPercentScoreQHisLevThreeProgress);
					document.getElementById("qHisLev3Prog").innerHTML = parseFloat(userPercentScoreQHisLevThreeProgress).toFixed(0) + "%";
		            // Całkowity postęp kategorii - Historia:
					var userPercentScoreQHisAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress"));
	                userPercentScoreQHisAllLevelsProgress = ((userPercentScoreQHisAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQHisAllLevelsProgress", userPercentScoreQHisAllLevelsProgress);
                    document.getElementById("qHisAllLevelsProg").innerHTML = parseFloat(userPercentScoreQHisAllLevelsProgress).toFixed(0) + "%";
					// Całkowity postęp całego Quiz World:
                    var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizHistoryLevelThree == Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevThree"))) {
					var userBestScoreQHisLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevThree"));
					userBestScoreQHisLevThree = ((userBestScoreQHisLevThree * 0) + userScoreQuizHistoryLevelThree);
					window.localStorage.setItem("localstorage_userBestScoreQHisLevThree", userBestScoreQHisLevThree);
					document.getElementById("qHisLev3BestScore").innerHTML = userBestScoreQHisLevThree;
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
						    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
						        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
						            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            //Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
						                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                //Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}

// Traffic Regulations - Level 1:
function nextQuizTraffLevelOnePage() {
	document.getElementById("nextQuizTrafficRegulationsLevelOnePageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_T_L1").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_T_L1").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizTrafficRegulationsLevelOnePage <= 22) {
			nextQuizTrafficRegulationsLevelOnePage = nextQuizTrafficRegulationsLevelOnePage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelOnePage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizTrafficRegulationsLevelOnePage == 2) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage1QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage2QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 3) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage2QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage3QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 4) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage3QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage4QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 5) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage4QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage5QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 6) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage5QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage6QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 7) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage6QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage7QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 8) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage7QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage8QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 9) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage8QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage9QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 10) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage9QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage10QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 11) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage10QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage11QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 12) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage11QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage12QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 13) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage12QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage13QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 14) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage13QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage14QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 15) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage14QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage15QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 16) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage15QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage16QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 17) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage16QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage17QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 18) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage17QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage18QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 19) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage18QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage19QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 20) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage19QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage20QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 21) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage20QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage21QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 22) {
				document.getElementById("QuizTrafficRegulationsLevelOnePage21QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePage22QaA").style.display = "block";
				const nextAnswButtTitle_P7 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P7.length; i++) {
					nextAnswButtTitle_P7[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizTrafficRegulationsLevelOnePage == 23) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizTrafficRegulationsLevelOnePage22QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelOnePageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesTrafficRegulationsSummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelTrafficRegulationsLevelOne").style.display = "none";
				document.getElementById("qTraff_L1_score").innerHTML = userScoreQuizTrafficRegulationsLevelOne;
				userPercentScoreQTraffLevOne = ((100/qTraffLevOneQuesAmount) * userScoreQuizTrafficRegulationsLevelOne);
				document.getElementById("qTraff_L1_percentScore").innerHTML = parseFloat(userPercentScoreQTraffLevOne).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizTrafficRegulationsLevelOne > Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevOne"))) {
					// Najlepszy wynik 1 poziomu, kategorii - Prawo jazdy:
					var userBestScoreQTraffLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevOne"));
					userBestScoreQTraffLevOne = ((userBestScoreQTraffLevOne * 0) + userScoreQuizTrafficRegulationsLevelOne);
					window.localStorage.setItem("localstorage_userBestScoreQTraffLevOne", userBestScoreQTraffLevOne);
					document.getElementById("qTraffLev1BestScore").innerHTML = userBestScoreQTraffLevOne;
					// Postęp 1 poziomu, kategorii - Prawo jazdy://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQTraffLevOneProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevOneProgress")); //Postęp danego testu:
					userPercentScoreQTraffLevOneProgress = ((100/qTraffLevOneQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevOne")));
					window.localStorage.setItem("localStorage_userPercentScoreQTraffLevOneProgress", userPercentScoreQTraffLevOneProgress);
					document.getElementById("qTraffLev1Prog").innerHTML = parseFloat(userPercentScoreQTraffLevOneProgress).toFixed(0) + "%";
		            // Całkowity postęp kategorii - Prawo jazdy:
					var userPercentScoreQTraffAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"));
	                userPercentScoreQTraffAllLevelsProgress = ((userPercentScoreQTraffAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQTraffAllLevelsProgress", userPercentScoreQTraffAllLevelsProgress);
                    document.getElementById("qTraffAllLevelsProg").innerHTML = parseFloat(userPercentScoreQTraffAllLevelsProgress).toFixed(0) + "%";
					// Całkowity postęp całego Quiz World:
                    var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizTrafficRegulationsLevelOne == Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevOne"))) {
					var userBestScoreQTraffLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevOne"));
					userBestScoreQTraffLevOne = ((userBestScoreQTraffLevOne * 0) + userScoreQuizTrafficRegulationsLevelOne);
					window.localStorage.setItem("localstorage_userBestScoreQTraffLevOne", userBestScoreQTraffLevOne);
					document.getElementById("qTraffLev1BestScore").innerHTML = userBestScoreQTraffLevOne;
				}
				else {
					
				}
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevOneProgress")) >= TraffL2Target) {
					document.getElementById("catTraffL2Block").style.display = "none";
					document.getElementById("catTraffL2Unblock").style.display = "flex";
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
						    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
						        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
						            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            //Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
						                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                //Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}

// Traffic Regulations - Level 2:
function nextQuizTraffLevelTwoPage() {
	document.getElementById("nextQuizTrafficRegulationsLevelTwoPageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_T_L2").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_T_L2").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizTrafficRegulationsLevelTwoPage <= 25) {
			nextQuizTrafficRegulationsLevelTwoPage = nextQuizTrafficRegulationsLevelTwoPage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelTwoPage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizTrafficRegulationsLevelTwoPage == 2) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage1QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage2QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 3) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage2QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage3QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 4) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage3QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage4QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 5) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage4QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage5QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 6) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage5QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage6QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 7) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage6QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage7QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 8) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage7QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage8QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 9) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage8QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage9QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 10) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage9QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage10QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 11) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage10QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage11QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 12) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage11QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage12QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 13) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage12QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage13QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 14) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage13QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage14QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 15) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage14QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage15QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 16) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage15QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage16QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 17) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage16QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage17QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 18) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage17QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage18QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 19) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage18QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage19QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 20) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage19QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage20QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 21) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage20QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage21QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 22) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage21QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage22QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 23) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage22QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage23QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 24) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage23QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage24QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 25) {
				document.getElementById("QuizTrafficRegulationsLevelTwoPage24QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPage25QaA").style.display = "block";
				const nextAnswButtTitle_P8 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P8.length; i++) {
					nextAnswButtTitle_P8[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizTrafficRegulationsLevelTwoPage == 26) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizTrafficRegulationsLevelTwoPage25QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelTwoPageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesTrafficRegulationsSummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelTrafficRegulationsLevelTwo").style.display = "none";
				document.getElementById("qTraff_L2_score").innerHTML = userScoreQuizTrafficRegulationsLevelTwo;
				userPercentScoreQTraffLevTwo = ((100/qTraffLevTwoQuesAmount) * userScoreQuizTrafficRegulationsLevelTwo);
				document.getElementById("qTraff_L2_percentScore").innerHTML = parseFloat(userPercentScoreQTraffLevTwo).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizTrafficRegulationsLevelTwo > Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevTwo"))) {
					// Najlepszy wynik 2 poziomu, kategorii - Prawo jazdy:
					var userBestScoreQTraffLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevTwo"));
					userBestScoreQTraffLevTwo = ((userBestScoreQTraffLevTwo * 0) + userScoreQuizTrafficRegulationsLevelTwo);
					window.localStorage.setItem("localstorage_userBestScoreQTraffLevTwo", userBestScoreQTraffLevTwo);
					document.getElementById("qTraffLev2BestScore").innerHTML = userBestScoreQTraffLevTwo;
					// Postęp 2 poziomu, kategorii - Prawo jazdy://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQTraffLevTwoProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevTwoProgress")); //Postęp danego testu:
					userPercentScoreQTraffLevTwoProgress = ((100/qTraffLevTwoQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevTwo")));
					window.localStorage.setItem("localStorage_userPercentScoreQTraffLevTwoProgress", userPercentScoreQTraffLevTwoProgress);
					document.getElementById("qTraffLev2Prog").innerHTML = parseFloat(userPercentScoreQTraffLevTwoProgress).toFixed(0) + "%";
		            // Całkowity postęp kategorii - Prawo jazdy:
					var userPercentScoreQTraffAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"));
	                userPercentScoreQTraffAllLevelsProgress = ((userPercentScoreQTraffAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQTraffAllLevelsProgress", userPercentScoreQTraffAllLevelsProgress);
                    document.getElementById("qTraffAllLevelsProg").innerHTML = parseFloat(userPercentScoreQTraffAllLevelsProgress).toFixed(0) + "%";
					// Całkowity postęp całego Quiz World:
                    var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizTrafficRegulationsLevelTwo == Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevTwo"))) {
					var userBestScoreQTraffLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevTwo"));
					userBestScoreQTraffLevTwo = ((userBestScoreQTraffLevTwo * 0) + userScoreQuizTrafficRegulationsLevelTwo);
					window.localStorage.setItem("localstorage_userBestScoreQTraffLevTwo", userBestScoreQTraffLevTwo);
					document.getElementById("qTraffLev2BestScore").innerHTML = userBestScoreQTraffLevTwo;
				}
				else {
					
				}
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevTwoProgress")) >= TraffL3Target) {
					document.getElementById("catTraffL3Block").style.display = "none";
					document.getElementById("catTraffL3Unblock").style.display = "flex";
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
						    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
						        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
						            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            //Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
						                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                //Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}

// Traffic Regulations - Level 3:
function nextQuizTraffLevelThreePage() {
	document.getElementById("nextQuizTrafficRegulationsLevelThreePageBlock").style.display = "none";
	if (oneTimeFuncPointScoreBlockade == 1 && oneTimeFuncPointAnswerBlockade == 1) {
		oneTimeFuncPointScoreBlockade = oneTimeFuncPointScoreBlockade * 0;
		document.getElementById("helpValueOneTimeFPScoreBlockade").innerHTML = oneTimeFuncPointScoreBlockade;
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade * 0;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const collectionAnswerContentProperResetBgColor = document.getElementsByClassName("answer-content-proper");
		for (let i = 0; i < collectionAnswerContentProperResetBgColor.length; i++) {
			collectionAnswerContentProperResetBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
		}
		document.getElementById("info_Proper_Block_T_L3").style.backgroundColor = "rgba(236,148,65,1.0)";
		document.getElementById("info_Proper_Value_T_L3").innerHTML = "Wybierz poprawną odpowiedź!";
		if (nextQuizTrafficRegulationsLevelThreePage <= 28) {
			nextQuizTrafficRegulationsLevelThreePage = nextQuizTrafficRegulationsLevelThreePage + 1;
		    document.getElementById("helpValuenextQuizCategoryLevelOnePageBlockade").innerHTML = nextQuizTrafficRegulationsLevelThreePage;
			// Instrukcja warunkowa, pokazująca kolejne strony i ukrywająca poprzednie, z wybraną odpowiedzią {if (ZMIENNA = 1) [ukryj to, pokaż tamto]}.
			if (nextQuizTrafficRegulationsLevelThreePage == 2) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage1QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage2QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 3) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage2QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage3QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 4) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage3QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage4QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 5) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage4QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage5QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 6) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage5QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage6QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 7) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage6QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage7QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 8) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage7QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage8QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 9) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage8QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage9QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 10) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage9QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage10QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 11) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage10QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage11QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 12) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage11QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage12QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 13) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage12QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage13QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 14) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage13QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage14QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 15) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage14QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage15QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 16) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage15QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage16QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 17) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage16QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage17QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 18) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage17QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage18QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 19) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage18QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage19QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 20) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage19QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage20QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 21) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage20QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage21QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 22) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage21QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage22QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 23) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage22QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage23QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 24) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage23QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage24QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 25) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage24QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage25QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 26) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage25QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage26QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 27) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage26QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage27QaA").style.display = "block";
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 28) {
				document.getElementById("QuizTrafficRegulationsLevelThreePage27QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePage28QaA").style.display = "block";
				const nextAnswButtTitle_P9 = document.getElementsByClassName("next_question_button_text");
				for (let i = 0; i < nextAnswButtTitle_P9.length; i++) {
					nextAnswButtTitle_P9[i].innerHTML = "Podsumowanie";
				}
			}
			else if (nextQuizTrafficRegulationsLevelThreePage == 29) {
				backgroundMusic.pause();
				scoreResultSound.play();
				document.getElementById("QuizTrafficRegulationsLevelThreePage28QaA").style.display = "none";
				document.getElementById("QuizTrafficRegulationsLevelThreePageSummaryQaA").style.display = "block";
				document.getElementById("quizMenuCategoriesTrafficRegulationsSummaryBackButton").style.display ="flex";
				document.getElementById("quizBottomPanelTrafficRegulationsLevelThree").style.display = "none";
				document.getElementById("qTraff_L3_score").innerHTML = userScoreQuizTrafficRegulationsLevelThree;
				userPercentScoreQTraffLevThree = ((100/qTraffLevThreeQuesAmount) * userScoreQuizTrafficRegulationsLevelThree);
				document.getElementById("qTraff_L3_percentScore").innerHTML = parseFloat(userPercentScoreQTraffLevThree).toFixed(0);
				// Najwyższy wynik danego testu - localStorage:
				// Zachowanie najwyższych wartości:
				if (userScoreQuizTrafficRegulationsLevelThree > Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevThree"))) {
					// Najlepszy wynik 3 poziomu, kategorii - Prawo jazdy:
					var userBestScoreQTraffLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevThree"));
					userBestScoreQTraffLevThree = ((userBestScoreQTraffLevThree * 0) + userScoreQuizTrafficRegulationsLevelThree);
					window.localStorage.setItem("localstorage_userBestScoreQTraffLevThree", userBestScoreQTraffLevThree);
					document.getElementById("qTraffLev3BestScore").innerHTML = userBestScoreQTraffLevThree;
					// Postęp 3 poziomu, kategorii - Prawo jazdy://    parseFloat(ZMIENNA).toFixed(0)
					var userPercentScoreQTraffLevThreeProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevThreeProgress")); //Postęp danego testu:
					userPercentScoreQTraffLevThreeProgress = ((100/qTraffLevThreeQuesAmount) * Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevThree")));
					window.localStorage.setItem("localStorage_userPercentScoreQTraffLevThreeProgress", userPercentScoreQTraffLevThreeProgress);
					document.getElementById("qTraffLev3Prog").innerHTML = parseFloat(userPercentScoreQTraffLevThreeProgress).toFixed(0) + "%";
		            // Całkowity postęp kategorii - Prawo jazdy:
					var userPercentScoreQTraffAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"));
	                userPercentScoreQTraffAllLevelsProgress = ((userPercentScoreQTraffAllLevelsProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevOneProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevTwoProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevThreeProgress"))) / 3));
					window.localStorage.setItem("localStorage_userPercentScoreQTraffAllLevelsProgress", userPercentScoreQTraffAllLevelsProgress);
                    document.getElementById("qTraffAllLevelsProg").innerHTML = parseFloat(userPercentScoreQTraffAllLevelsProgress).toFixed(0) + "%";
					// Całkowity postęp całego Quiz World:
                    var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
					userPercentScoreQuizWorldProgress = ((userPercentScoreQuizWorldProgress * 0) + ((Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress")) + Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"))) / 3));
                    window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
					document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
				}
				else if (userScoreQuizTrafficRegulationsLevelThree == Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevThree"))) {
					var userBestScoreQTraffLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevThree"));
					userBestScoreQTraffLevThree = ((userBestScoreQTraffLevThree * 0) + userScoreQuizTrafficRegulationsLevelThree);
					window.localStorage.setItem("localstorage_userBestScoreQTraffLevThree", userBestScoreQTraffLevThree);
					document.getElementById("qTraffLev3BestScore").innerHTML = userBestScoreQTraffLevThree;
				}
				else {
					
				}
				// +TUTAJ+ // userPercentScoreQuizWorldProgress
				// Nie trzeba dalej nic zmieniać, przy kopiowaniu tej funkcji i zmienianiu nazw zmiennych do nowego testu.
				if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv1Target) {
					// localStorege - zapis - string; osiągnięcie - 1:
					var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	                Achiv_1_name_srtValue = Achiv_1_name;
					window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
					document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
					// Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
					Achiv_1_alert_point = Achiv_1_alert_point + 1;
					window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 1) {
						alert('Zdobyłeś osiągnięcie: "Początkujący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 25% całkowitego postępu Quiz World.');
					}
					else if (Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point")) == 3) {
						var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
						Achiv_1_alert_point = Achiv_1_alert_point - 1;
						window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
					}
					else {
						
					}
					// Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
					achiv1value = ((achiv1value * 0) + 1);
					window.localStorage.setItem("localStorege_achiv1value", achiv1value);
					// Wzór na obliczenie postępu osiągnięć:
					var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					// MEGA ULTRA KURCZE MAĆ WAŻNA RZECZ!!! Jeżeli chcesz, zrobić licznik localStorage, kótry sumuje inne wartośći liczników, muisz dodawać wartości z magazyny localStorage, a nie ze zmennych w skrypcie, w tym calu zamiast, np: zmeinna_1, piszesz: Number(window.localStorage.getItem("localStorage_zmienna_1")) <--pamiętajk, że na wartość w nawiasie to klucz localStorage!
					userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
					document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
					if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv2Target) {
						// localStorege - zapis - string; osiągnięcie - 2:
					    var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	                    Achiv_2_name_srtValue = Achiv_2_name;
					    window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
					    document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
					    // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
					    Achiv_2_alert_point = Achiv_2_alert_point + 1;
					    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 1) {
						    alert('Zdobyłeś osiągnięcie: "Przeciętny". Do odblokowania tego osiągnięcia było wymagane uzyskanie 50% całkowitego postępu Quiz World.');
					    }
					    else if (Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point")) == 3) {
						    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
						    Achiv_2_alert_point = Achiv_2_alert_point - 1;
							window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
					    }
					    else {
						    
					    }
					    // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					    var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
					    achiv2value = ((achiv2value * 0) + 1);
					    window.localStorage.setItem("localStorege_achiv2value", achiv2value);
					    // Wzór na obliczenie postępu osiągnięć:
						var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
					    userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					    window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
						document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
						if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv3Target) {
							// localStorege - zapis - string; osiągnięcie - 3:
					        var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	                        Achiv_3_name_srtValue = Achiv_3_name;
					        window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
					        document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
					        // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
					        Achiv_3_alert_point = Achiv_3_alert_point + 1;
					        window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 1) {
						        alert('Zdobyłeś osiągnięcie: "Wyższa liga". Do odblokowania tego osiągnięcia było wymagane uzyskanie 75% całkowitego postępu Quiz World.');
					        }
					        else if (Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point")) == 3) {
						        var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
						        Achiv_3_alert_point = Achiv_3_alert_point - 1;
								window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
					        }
					        else {
						        
					        }
					        // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					        var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
					        achiv3value = ((achiv3value * 0) + 1);
					        window.localStorage.setItem("localStorege_achiv3value", achiv3value);
					        // Wzór na obliczenie postępu osiągnięć:
					        var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
							userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					        window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
							document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
							if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv4Target) {
								// localStorege - zapis - string; osiągnięcie - 4:
					            var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	                            Achiv_4_name_srtValue = Achiv_4_name;
					            window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
					            document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
					            // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
					            Achiv_4_alert_point = Achiv_4_alert_point + 1;
					            window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 1) {
						            alert('Zdobyłeś osiągnięcie: "Ekspert". Do odblokowania tego osiągnięcia było wymagane uzyskanie 90% całkowitego postępu Quiz World.');
					            }
					            else if (Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point")) == 3) {
						            var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
						            Achiv_4_alert_point = Achiv_4_alert_point - 1;
									window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
					            }
					            else {
						            
					            }
					            // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					            var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
					            achiv4value = ((achiv4value * 0) + 1);
					            window.localStorage.setItem("localStorege_achiv4value", achiv4value); 
					            //Wzór na obliczenie postępu osiągnięć:
					            var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
								userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					            window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
								document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								if (Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress")) >= Achiv5Target) {
									// localStorege - zapis - string; osiągnięcie - 5:
					                var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	                                Achiv_5_name_srtValue = Achiv_5_name;
					                window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
					                document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
					                // Jednorazowy komunikat informujący o odblokowaniu osiągnięcia:
					                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
					                Achiv_5_alert_point = Achiv_5_alert_point + 1;
					                window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 1) {
						                alert('Zdobyłeś osiągnięcie: "Wszechwiedzący". Do odblokowania tego osiągnięcia było wymagane uzyskanie 100% całkowitego postępu Quiz World.');
					                }
					                else if (Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point")) == 3) {
						                var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
						                Achiv_5_alert_point = Achiv_5_alert_point - 1;
										window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
					                }
					                else {
						                
					                }
					                // Po zdobyciu/przekroczeniu wymaganych %, następuje przypisanie wartości (1) do ZMIENNEJ osiągnięcia, z ktorej będzie liczony % postępu osiągnięć.
					                var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
					                achiv5value = ((achiv5value * 0) + 1);
					                window.localStorage.setItem("localStorege_achiv5value", achiv5value);
					                //Wzór na obliczenie postępu osiągnięć:
					                var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
									userPercentScoreAchivements = ((100/AchivAmount) * (Number(window.localStorage.getItem("localStorege_achiv1value")) + Number(window.localStorage.getItem("localStorege_achiv2value")) + Number(window.localStorage.getItem("localStorege_achiv3value")) + Number(window.localStorage.getItem("localStorege_achiv4value")) + Number(window.localStorage.getItem("localStorege_achiv5value"))));
					                window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
									document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
								}
								else {
									
								}
							}
							else {
								
							}
						}
						else {
							
						}
					}
					else {
						
					}
				}
				else {
					
				}
			}
			else {
				
			}
		}
		else {
			
		}
	}
	else {
		
	}
}



//Bloki odpowiedzi - blokady:
//Answer A:
function FirstAnswerBlockadeFunction() {
    if (oneTimeFuncPointAnswerBlockade == 0) {
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
	}
	else {
		
	}
}
//Answer B:
function SecondAnswerBlockadeFunction() {
    if (oneTimeFuncPointAnswerBlockade == 0) {
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
	}
	else {
		
	}
}
//Answer C:
function ThirdAnswerBlockadeFunction() {
    if (oneTimeFuncPointAnswerBlockade == 0) {
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
		//document.getElementById("CountriesL1Q1A3Block").style.backgroundColor = "rgba(112,192,80,1.0)";
	}
	else {
		
	}
}
//Answer D:
function FourthAnswerBlockadeFunction() {
    if (oneTimeFuncPointAnswerBlockade == 0) {
		oneTimeFuncPointAnswerBlockade = oneTimeFuncPointAnswerBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBlockade").innerHTML = oneTimeFuncPointAnswerBlockade;
	}
	else {
		
	}
}


//onmouseover & onmouseout:
const FAOverBgColor = document.getElementsByClassName("answer-content-proper-first");
const FAOutBgColor = document.getElementsByClassName("answer-content-proper-first");
const SAOverBgColor = document.getElementsByClassName("answer-content-proper-second");
const SAOutBgColor = document.getElementsByClassName("answer-content-proper-second");
const TAOverBgColor = document.getElementsByClassName("answer-content-proper-third");
const TAOutBgColor = document.getElementsByClassName("answer-content-proper-third");
const FtAOverBgColor = document.getElementsByClassName("answer-content-proper-fourth");
const FtAOutBgColor = document.getElementsByClassName("answer-content-proper-fourth");
//Answer A - kolor odpowiedzi i typ kursora:
function FirstAnswerOnmouseover() {
	if (oneTimeFuncPointAnswerBlockade == 0) {
		for (let i = 0; i < FAOverBgColor.length; i++) {
			FAOverBgColor[i].style.backgroundColor = "hsl(227,100%,75%)";
			FAOverBgColor[i].style.cursor = "pointer";
		}
	}
	else {
		for (let i = 0; i < FAOverBgColor.length; i++) {
			FAOverBgColor[i].style.cursor = "default";
		}
	}
}
function FirstAnswerOnmouseout() {
	if (oneTimeFuncPointAnswerBlockade == 0) {
		for (let i = 0; i < FAOutBgColor.length; i++) {
			FAOutBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
			FAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		for (let i = 0; i < FAOutBgColor.length; i++) {
			FAOutBgColor[i].style.cursor = "default";
		}
	}
}
//Answer B - kolor odpowiedzi i typ kursora:
function SecondAnswerOnmouseover() {
	if (oneTimeFuncPointAnswerBlockade == 0) {
		for (let i = 0; i < SAOverBgColor.length; i++) {
			SAOverBgColor[i].style.backgroundColor = "hsl(227,100%,75%)";
			SAOverBgColor[i].style.cursor = "pointer";
		}
	}
	else {
		for (let i = 0; i < SAOverBgColor.length; i++) {
			SAOverBgColor[i].style.cursor = "default";
		}
	}
}
function SecondAnswerOnmouseout() {
	if (oneTimeFuncPointAnswerBlockade == 0) {
		for (let i = 0; i < SAOutBgColor.length; i++) {
			SAOutBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
			SAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		for (let i = 0; i < SAOutBgColor.length; i++) {
			SAOutBgColor[i].style.cursor = "default";
		}
	}
}
//Answer C - kolor odpowiedzi i typ kursora:
function ThirdAnswerOnmouseover() {
	if (oneTimeFuncPointAnswerBlockade == 0) {
		for (let i = 0; i < TAOverBgColor.length; i++) {
			TAOverBgColor[i].style.backgroundColor = "hsl(227,100%,75%)";
			TAOverBgColor[i].style.cursor = "pointer";
		}
	}
	else {
		for (let i = 0; i < TAOverBgColor.length; i++) {
			TAOverBgColor[i].style.cursor = "default";
		}
	}
}
function ThirdAnswerOnmouseout() {
	if (oneTimeFuncPointAnswerBlockade == 0) {
		for (let i = 0; i < TAOutBgColor.length; i++) {
			TAOutBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
			TAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		for (let i = 0; i < TAOutBgColor.length; i++) {
			TAOutBgColor[i].style.cursor = "default";
		}
	}
}
//Answer D - kolor odpowiedzi i typ kursora:
function FourthAnswerOnmouseover() {
	if (oneTimeFuncPointAnswerBlockade == 0) {
		for (let i = 0; i < FtAOverBgColor.length; i++) {
			FtAOverBgColor[i].style.backgroundColor = "hsl(227,100%,75%)";
			FtAOverBgColor[i].style.cursor = "pointer";
		}
	}
	else {
		for (let i = 0; i < FtAOverBgColor.length; i++) {
			FtAOverBgColor[i].style.cursor = "default";
		}
	}
}
function FoutrhAnswerOnmouseout() {
	if (oneTimeFuncPointAnswerBlockade == 0) {
		for (let i = 0; i < FtAOutBgColor.length; i++) {
			FtAOutBgColor[i].style.backgroundColor = "hsl(227,100%,71%)";
			FtAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		for (let i = 0; i < FtAOutBgColor.length; i++) {
			FtAOutBgColor[i].style.cursor = "default";
		}
	}
}



//Bloki odpowiedzi - true/false: (kolory)
//Answer A - true:
function FirstAnswerTrueFunction() {
	if (oneTimeFuncPointAnswerBackgroundColorBlockade == 0) {
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const FABTBgColor = document.getElementsByClassName("first-true-answer");/*UWAGA!!! w JS można wielokrotnie deklarować tą samą klasę,
		                                                                           np: klasa (.blok_1) jest zadeklarowana jako (const [NAZWA])*/
		for (let i = 0; i < FABTBgColor.length; i++) {
			FABTBgColor[i].style.backgroundColor = "rgba(112,192,80,1.0)";
			FAOverBgColor[i].style.cursor = "default";
			FAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		
	}
}
//Answer A - false:
function FirstAnswerFalseFunction() {
	if (oneTimeFuncPointAnswerBackgroundColorBlockade == 0) {
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const FABFBgColor = document.getElementsByClassName("first-false-answer");
		for (let i = 0; i < FABFBgColor.length; i++) {
			FABFBgColor[i].style.backgroundColor = "rgba(236,65,65,1.0)";
			FAOverBgColor[i].style.cursor = "default";
			FAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		
	}
}
//Answer B - true:
function SecondAnswerTrueFunction() {
	if (oneTimeFuncPointAnswerBackgroundColorBlockade == 0) {
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const SABTBgColor = document.getElementsByClassName("second-true-answer");
		for (let i = 0; i < SABTBgColor.length; i++) {
			SABTBgColor[i].style.backgroundColor = "rgba(112,192,80,1.0)";
			SAOverBgColor[i].style.cursor = "default";
			SAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		
	}
}
//Answer B - false:
function SecondAnswerFalseFunction() {
	if (oneTimeFuncPointAnswerBackgroundColorBlockade == 0) {
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const SABFBgColor = document.getElementsByClassName("second-false-answer");
		for (let i = 0; i < SABFBgColor.length; i++) {
			SABFBgColor[i].style.backgroundColor = "rgba(236,65,65,1.0)";
			SAOverBgColor[i].style.cursor = "default";
			SAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		
	}
}
//Answer C - true:
function ThirdAnswerTrueFunction() {
	if (oneTimeFuncPointAnswerBackgroundColorBlockade == 0) {
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const TABTBgColor = document.getElementsByClassName("third-true-answer");
		for (let i = 0; i < TABTBgColor.length; i++) {
			TABTBgColor[i].style.backgroundColor = "rgba(112,192,80,1.0)";
			TAOverBgColor[i].style.cursor = "default";
			TAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		
	}
}
//Answer C - false:
function ThirdAnswerFalseFunction() {
	if (oneTimeFuncPointAnswerBackgroundColorBlockade == 0) {
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const TABFBgColor = document.getElementsByClassName("third-false-answer");
		for (let i = 0; i < TABFBgColor.length; i++) {
			TABFBgColor[i].style.backgroundColor = "rgba(236,65,65,1.0)";
			TAOverBgColor[i].style.cursor = "default";
			TAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		
	}
}
//Answer D - true:
function FourthAnswerTrueFunction() {
	if (oneTimeFuncPointAnswerBackgroundColorBlockade == 0) {
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const FtABTBgColor = document.getElementsByClassName("fourth-true-answer");
		for (let i = 0; i < FtABTBgColor.length; i++) {
			FtABTBgColor[i].style.backgroundColor = "rgba(112,192,80,1.0)";
			FtAOverBgColor[i].style.cursor = "default";
			FtAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		
	}
}
//Answer D - false:
function FourthAnswerFalseFunction() {
	if (oneTimeFuncPointAnswerBackgroundColorBlockade == 0) {
		oneTimeFuncPointAnswerBackgroundColorBlockade = oneTimeFuncPointAnswerBackgroundColorBlockade + 1;
		document.getElementById("helpValueOneTimeFPAnswerBackgroundColorBlockade").innerHTML = oneTimeFuncPointAnswerBackgroundColorBlockade;
		const FtABFBgColor = document.getElementsByClassName("fourth-false-answer");
		for (let i = 0; i < FtABFBgColor.length; i++) {
			FtABFBgColor[i].style.backgroundColor = "rgba(236,65,65,1.0)";
			FtAOverBgColor[i].style.cursor = "default";
			FtAOutBgColor[i].style.cursor = "default";
		}
	}
	else {
		
	}
}



// localStorage:

// localStorage - wczytanie danych po ponownym otwarciu strony:
function showSavedQuizData() {
	
	// Całkowity postęp Quiz World:
	var userPercentScoreQuizWorldProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQuizWorldProgress"));
	window.localStorage.setItem("localStorage_userPercentScoreQuizWorldProgress", userPercentScoreQuizWorldProgress);
	document.getElementById("completeQuizProgress").innerHTML = parseFloat(userPercentScoreQuizWorldProgress).toFixed(0) + "%";
	
	// Wartości odblokowanych osiągnięć:
	var achiv1value = Number(window.localStorage.getItem("localStorege_achiv1value"));
	window.localStorage.setItem("localStorege_achiv1value", achiv1value);
	var achiv2value = Number(window.localStorage.getItem("localStorege_achiv2value"));
	window.localStorage.setItem("localStorege_achiv2value", achiv2value);
	var achiv3value = Number(window.localStorage.getItem("localStorege_achiv3value"));
	window.localStorage.setItem("localStorege_achiv3value", achiv3value);
	var achiv4value = Number(window.localStorage.getItem("localStorege_achiv4value"));
	window.localStorage.setItem("localStorege_achiv4value", achiv4value);
	var achiv5value = Number(window.localStorage.getItem("localStorege_achiv5value"));
	window.localStorage.setItem("localStorege_achiv5value", achiv5value);
	
	// Całkowity postęp osiągnięć:
	var userPercentScoreAchivements = Number(window.localStorage.getItem("localStorage_userPercentScoreAchivements"));
	window.localStorage.setItem("localStorage_userPercentScoreAchivements", userPercentScoreAchivements);
	document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(userPercentScoreAchivements).toFixed(0) + "%";
	
	// Całkowity postęp - Państwa:
	var userPercentScoreQCountAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress"));
	window.localStorage.setItem("localStorage_userPercentScoreQCountAllLevelsProgress", userPercentScoreQCountAllLevelsProgress);
    document.getElementById("qCountAllLevelsProg").innerHTML = parseFloat(userPercentScoreQCountAllLevelsProgress).toFixed(0) + "%";
	// Postęp - Państwa - poziom 1:
	var userPercentScoreQCountLevOneProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevOneProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQCountLevOneProgress", userPercentScoreQCountLevOneProgress);
	document.getElementById("qCountLev1Prog").innerHTML = parseFloat(userPercentScoreQCountLevOneProgress).toFixed(0) + "%";
	//Najlepszy wynik 1 poziomu, kategorii - Państwa:
	var userBestScoreQCountLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevOne"));
	window.localStorage.setItem("localstorage_userBestScoreQCountLevOne", userBestScoreQCountLevOne);
	document.getElementById("qCountLev1BestScore").innerHTML = userBestScoreQCountLevOne;
	// Postęp - Państwa - poziom 2:
	var userPercentScoreQCountLevTwoProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevTwoProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQCountLevTwoProgress", userPercentScoreQCountLevTwoProgress);
	document.getElementById("qCountLev2Prog").innerHTML = parseFloat(userPercentScoreQCountLevTwoProgress).toFixed(0) + "%";
	//Najlepszy wynik 2 poziomu, kategorii - Państwa:
	var userBestScoreQCountLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevTwo"));
	window.localStorage.setItem("localstorage_userBestScoreQCountLevTwo", userBestScoreQCountLevTwo);
	document.getElementById("qCountLev2BestScore").innerHTML = userBestScoreQCountLevTwo;   // Skasuj to jak zrobisz ten test
	// Postęp - Państwa - poziom 3:
	var userPercentScoreQCountLevThreeProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevThreeProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQCountLevThreeProgress", userPercentScoreQCountLevThreeProgress);
	document.getElementById("qCountLev3Prog").innerHTML = parseFloat(userPercentScoreQCountLevThreeProgress).toFixed(0) + "%";
	//Najlepszy wynik 3 poziomu, kategorii - Państwa:
	var userBestScoreQCountLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQCountLevThree"));
	window.localStorage.setItem("localstorage_userBestScoreQCountLevThree", userBestScoreQCountLevThree);
	document.getElementById("qCountLev3BestScore").innerHTML = userBestScoreQCountLevThree;   // Skasuj to jak zrobisz ten test
	
	// Całkowity postęp - Historia:
	var userPercentScoreQHisAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisAllLevelsProgress"));
	window.localStorage.setItem("localStorage_userPercentScoreQHisAllLevelsProgress", userPercentScoreQHisAllLevelsProgress);
    document.getElementById("qHisAllLevelsProg").innerHTML = parseFloat(userPercentScoreQHisAllLevelsProgress).toFixed(0) + "%";
	// Postęp - Historia - poziom 1:
	var userPercentScoreQHisLevOneProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevOneProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQHisLevOneProgress", userPercentScoreQHisLevOneProgress);
	document.getElementById("qHisLev1Prog").innerHTML = parseFloat(userPercentScoreQHisLevOneProgress).toFixed(0) + "%";
	//Najlepszy wynik 1 poziomu, kategorii - Historia:
	var userBestScoreQHisLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevOne"));
	window.localStorage.setItem("localstorage_userBestScoreQHisLevOne", userBestScoreQHisLevOne);
	document.getElementById("qHisLev1BestScore").innerHTML = userBestScoreQHisLevOne;   // Skasuj to jak zrobisz ten test
	// Postęp - Historia - poziom 2:
	var userPercentScoreQHisLevTwoProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevTwoProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQHisLevTwoProgress", userPercentScoreQHisLevTwoProgress);
	document.getElementById("qHisLev2Prog").innerHTML = parseFloat(userPercentScoreQHisLevTwoProgress).toFixed(0) + "%";
	//Najlepszy wynik 2 poziomu, kategorii - Historia:
	var userBestScoreQHisLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevTwo"));
	window.localStorage.setItem("localstorage_userBestScoreQHisLevTwo", userBestScoreQHisLevTwo);
	document.getElementById("qHisLev2BestScore").innerHTML = userBestScoreQHisLevTwo;   // Skasuj to jak zrobisz ten test
	// Postęp - Historia - poziom 3:
	var userPercentScoreQHisLevThreeProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevThreeProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQHisLevThreeProgress", userPercentScoreQHisLevThreeProgress);
	document.getElementById("qHisLev3Prog").innerHTML = parseFloat(userPercentScoreQHisLevThreeProgress).toFixed(0) + "%";
	//Najlepszy wynik 3 poziomu, kategorii - Historia:
	var userBestScoreQHisLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQHisLevThree"));
	window.localStorage.setItem("localstorage_userBestScoreQHisLevThree", userBestScoreQHisLevThree);
	document.getElementById("qHisLev3BestScore").innerHTML = userBestScoreQHisLevThree;   // Skasuj to jak zrobisz ten test
	
	// Całkowity postęp - Prawo jazdy:
	var userPercentScoreQTraffAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffAllLevelsProgress"));
	window.localStorage.setItem("localStorage_userPercentScoreQTraffAllLevelsProgress", userPercentScoreQTraffAllLevelsProgress);
    document.getElementById("qTraffAllLevelsProg").innerHTML = parseFloat(userPercentScoreQTraffAllLevelsProgress).toFixed(0) + "%";
	// Postęp - Prawo jazdy - poziom 1:
	var userPercentScoreQTraffLevOneProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevOneProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQTraffLevOneProgress", userPercentScoreQTraffLevOneProgress);
	document.getElementById("qTraffLev1Prog").innerHTML = parseFloat(userPercentScoreQTraffLevOneProgress).toFixed(0) + "%";
	//Najlepszy wynik 1 poziomu, kategorii - Prawo jazdy:
	var userBestScoreQTraffLevOne = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevOne"));
	window.localStorage.setItem("localstorage_userBestScoreQTraffLevOne", userBestScoreQTraffLevOne);
	document.getElementById("qTraffLev1BestScore").innerHTML = userBestScoreQTraffLevOne;   // Skasuj to jak zrobisz ten test
	// Postęp - Prawo jazdy - poziom 2:
	var userPercentScoreQTraffLevTwoProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevTwoProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQTraffLevTwoProgress", userPercentScoreQTraffLevTwoProgress);
	document.getElementById("qTraffLev2Prog").innerHTML = parseFloat(userPercentScoreQTraffLevTwoProgress).toFixed(0) + "%";
	//Najlepszy wynik 2 poziomu, kategorii - Prawo jazdy:
	var userBestScoreQTraffLevTwo = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevTwo"));
	window.localStorage.setItem("localstorage_userBestScoreQTraffLevTwo", userBestScoreQTraffLevTwo);
	document.getElementById("qTraffLev2BestScore").innerHTML = userBestScoreQTraffLevTwo;   // Skasuj to jak zrobisz ten test
	// Postęp - Prawo jazdy - poziom 3:
	var userPercentScoreQTraffLevThreeProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevThreeProgress")); //Postęp danego testu:
	window.localStorage.setItem("localStorage_userPercentScoreQTraffLevThreeProgress", userPercentScoreQTraffLevThreeProgress);
	document.getElementById("qTraffLev3Prog").innerHTML = parseFloat(userPercentScoreQTraffLevThreeProgress).toFixed(0) + "%";
	//Najlepszy wynik 3 poziomu, kategorii - Prawo jazdy:
	var userBestScoreQTraffLevThree = Number(window.localStorage.getItem("localstorage_userBestScoreQTraffLevThree"));
	window.localStorage.setItem("localstorage_userBestScoreQTraffLevThree", userBestScoreQTraffLevThree);
	document.getElementById("qTraffLev3BestScore").innerHTML = userBestScoreQTraffLevThree;   // Skasuj to jak zrobisz ten test
	
	// Poszczególne osiągnięcia:
	// localStorege - odczyt <body onload=""> - string; osiągnięcie - 1:
	var Achiv_1_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue"));
	window.localStorage.setItem("localStorage_Achiv_1_name_srtValue", JSON.stringify(Achiv_1_name_srtValue));
	document.getElementById("qAchiv1").innerHTML = JSON.stringify(Achiv_1_name_srtValue);
	if (JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue")) == null || JSON.parse(window.localStorage.getItem("localStorage_Achiv_1_name_srtValue")) == "null") {
		document.getElementById("qAchiv1").innerHTML = Achiv_blocked;
	}
	else {
		
	}
	// localStorege - odczyt <body onload=""> - string; osiągnięcie - 2:
	var Achiv_2_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue"));
	window.localStorage.setItem("localStorage_Achiv_2_name_srtValue", JSON.stringify(Achiv_2_name_srtValue));
	document.getElementById("qAchiv2").innerHTML = JSON.stringify(Achiv_2_name_srtValue);
	if (JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue")) == null || JSON.parse(window.localStorage.getItem("localStorage_Achiv_2_name_srtValue")) == "null") {
		document.getElementById("qAchiv2").innerHTML = Achiv_blocked;
	}
	else {
		
	}
	// localStorege - odczyt <body onload=""> - string; osiągnięcie - 3:
	var Achiv_3_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue"));
	window.localStorage.setItem("localStorage_Achiv_3_name_srtValue", JSON.stringify(Achiv_3_name_srtValue));
	document.getElementById("qAchiv3").innerHTML = JSON.stringify(Achiv_3_name_srtValue);
	if (JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue")) == null || JSON.parse(window.localStorage.getItem("localStorage_Achiv_3_name_srtValue")) == "null") {
		document.getElementById("qAchiv3").innerHTML = Achiv_blocked;
	}
	else {
		
	}
	// localStorege - odczyt <body onload=""> - string; osiągnięcie - 4:
	var Achiv_4_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue"));
	window.localStorage.setItem("localStorage_Achiv_4_name_srtValue", JSON.stringify(Achiv_4_name_srtValue));
	document.getElementById("qAchiv4").innerHTML = JSON.stringify(Achiv_4_name_srtValue);
	if (JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue")) == null || JSON.parse(window.localStorage.getItem("localStorage_Achiv_4_name_srtValue")) == "null") {
		document.getElementById("qAchiv4").innerHTML = Achiv_blocked;
	}
	else {
		
	}
	// localStorege - odczyt <body onload=""> - string; osiągnięcie - 5:
	var Achiv_5_name_srtValue = JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue"));
	window.localStorage.setItem("localStorage_Achiv_5_name_srtValue", JSON.stringify(Achiv_5_name_srtValue));
	document.getElementById("qAchiv5").innerHTML = JSON.stringify(Achiv_5_name_srtValue);
	if (JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue")) == null || JSON.parse(window.localStorage.getItem("localStorage_Achiv_5_name_srtValue")) == "null") {
		document.getElementById("qAchiv5").innerHTML = Achiv_blocked;
	}
	else {
		
	}
	
	// localStorage.getItem - odblokowywanie poziomów - Countries - poziom 2:
	if (Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevOneProgress")) >= CountL2Target) {
		document.getElementById("catCountL2Block").style.display = "none";
		document.getElementById("catCountL2Unblock").style.display = "flex";
	}
	else {
			
	}
	// localStorage.getItem - odblokowywanie poziomów - Countries - poziom 3:
	if (Number(window.localStorage.getItem("localStorage_userPercentScoreQCountLevTwoProgress")) >= CountL3Target) {
		document.getElementById("catCountL3Block").style.display = "none";
		document.getElementById("catCountL3Unblock").style.display = "flex";
	}
	else {
			
	}
	// localStorage.getItem - odblokowywanie poziomów - History - poziom 2:
	if (Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevOneProgress")) >= HisL2Target) {
		document.getElementById("catHisL2Block").style.display = "none";
		document.getElementById("catHisL2Unblock").style.display = "flex";
	}
	else {
			
	}
	// localStorage.getItem - odblokowywanie poziomów - History - poziom 3:
	if (Number(window.localStorage.getItem("localStorage_userPercentScoreQHisLevTwoProgress")) >= HisL3Target) {
		document.getElementById("catHisL3Block").style.display = "none";
		document.getElementById("catHisL3Unblock").style.display = "flex";
	}
	else {
			
	}
	// localStorage.getItem - odblokowywanie poziomów - Traffic Regulations - poziom 2:
	if (Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevOneProgress")) >= TraffL2Target) {
		document.getElementById("catTraffL2Block").style.display = "none";
		document.getElementById("catTraffL2Unblock").style.display = "flex";
	}
	else {
			
	}
	// localStorage.getItem - odblokowywanie poziomów - Traffic Regulations - poziom 3:
	if (Number(window.localStorage.getItem("localStorage_userPercentScoreQTraffLevTwoProgress")) >= TraffL3Target) {
		document.getElementById("catTraffL3Block").style.display = "none";
		document.getElementById("catTraffL3Unblock").style.display = "flex";
	}
	else {
			
	}
	
	// localStorage - punkty komunikatów odblokowania osiągnięć:
    // 1. "Początkujący":
    var Achiv_1_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_1_alert_point"));
    window.localStorage.setItem("localStorage_Achiv_1_alert_point", Achiv_1_alert_point);
    // 2. "Przeciętny":
    var Achiv_2_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_2_alert_point"));
    window.localStorage.setItem("localStorage_Achiv_2_alert_point", Achiv_2_alert_point);
    // 3. "Wyższa liga":
    var Achiv_3_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_3_alert_point"));
    window.localStorage.setItem("localStorage_Achiv_3_alert_point", Achiv_3_alert_point);
    // 4. "Ekspert":
    var Achiv_4_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_4_alert_point"));
    window.localStorage.setItem("localStorage_Achiv_4_alert_point", Achiv_4_alert_point);
    // 5. "Wszechwiedzący":
    var Achiv_5_alert_point = Number(window.localStorage.getItem("localStorage_Achiv_5_alert_point"));
    window.localStorage.setItem("localStorage_Achiv_5_alert_point", Achiv_5_alert_point);
}



// localStroage - .clear:
function deleteQuizMemory() {
	
	window.localStorage.clear();
	
	document.getElementById("audio_selectSound").play();
	
	//Zrób obliczenia sprowadzające się do zera, a na końcu zrób łącze do id'ków
	//Prawdopodobnie działa to dobrze, tylko trzeba, ogarnąć oblicznia, równe 0.
	
	// Całkowity postęp Quiz World
	document.getElementById("completeQuizProgress").innerHTML = parseFloat(0).toFixed(0) + "%";
	
	// Całkowity postęp osiągnięć:
	document.getElementById("qAchivProg").innerHTML = "Postęp osiągnięć: " + parseFloat(0).toFixed(0) + "%";
	
	// localStorage - string
	//var Achiv_1_name = Number(window.localStorage.getItem("localStorage_Achiv_1_name"));
	//window.localStorage.setItem("localStorage_Achiv_1_name", Achiv_1_name);
	document.getElementById("qAchiv1").innerHTML = "?";
	document.getElementById("qAchiv2").innerHTML = "?";
	document.getElementById("qAchiv3").innerHTML = "?";
	document.getElementById("qAchiv4").innerHTML = "?";
	document.getElementById("qAchiv5").innerHTML = "?";
	
	//var achiv1value = Number(window.localStorage.getItem("localStorage_achiv1value"));
	//achiv1value = (achiv1value * 0);
	//window.localStorage.setItem("localStorage_achiv1value", achiv1value);
	//var achiv2value = Number(window.localStorage.getItem("localStorage_achiv2value"));
	//achiv2value = (achiv2value * 0);
	//window.localStorage.setItem("localStorage_achiv2value", achiv2value);
	//var achiv3value = Number(window.localStorage.getItem("localStorage_achiv3value"));
	//achiv3value = (achiv3value * 0);
	//window.localStorage.setItem("localStorage_achiv3value", achiv3value);
	//var achiv4value = Number(window.localStorage.getItem("localStorage_achiv4value"));
	//achiv4value = (achiv4value * 0);
	//window.localStorage.setItem("localStorage_achiv4value", achiv4value);
	//var achiv5value = Number(window.localStorage.getItem("localStorage_achiv5value"));
	//achiv5value = (achiv5value * 0);
	//window.localStorage.setItem("localStorage_achiv5value", achiv5value);
	
	//var userPercentScoreQCountAllLevelsProgress = Number(window.localStorage.getItem("localStorage_userPercentScoreQCountAllLevelsProgress"));
	//userPercentScoreQCountAllLevelsProgress = (userPercentScoreQCountAllLevelsProgress * 0);
    document.getElementById("qCountAllLevelsProg").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQCountLevOne = (userBestScoreQCountLevOne * 0);
	document.getElementById("qCountLev1BestScore").innerHTML = 0;
	//userPercentScoreQCountLevOneProgress = (userPercentScoreQCountLevOneProgress * 0);
	document.getElementById("qCountLev1Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQCountLevTwo = (userBestScoreQCountLevTwo * 0);
	document.getElementById("qCountLev2BestScore").innerHTML = 0;   // Usuń znacznik komentarza, jak skończysz tworzenie tego poziomu testu.
	//userPercentScoreQCountLevTwoProgress = (userPercentScoreQCountLevTwoProgress * 0);
    document.getElementById("qCountLev2Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQCountLevThree = (userBestScoreQCountLevThree * 0);
	document.getElementById("qCountLev3BestScore").innerHTML = 0;   // Usuń znacznik komentarza, jak skończysz tworzenie tego poziomu testu.
	//userPercentScoreQCountLevThreeProgress = (userPercentScoreQCountLevThreeProgress * 0);
    document.getElementById("qCountLev3Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
	
    //userPercentScoreQHisAllLevelsProgress = (userPercentScoreQHisAllLevelsProgress * 0);
	document.getElementById("qHisAllLevelsProg").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQHisLevOne = (userBestScoreQHisLevOne * 0);
	document.getElementById("qHisLev1BestScore").innerHTML = 0;   // Usuń znacznik komentarza, jak skończysz tworzenie tego poziomu testu.
    //userPercentScoreQHisLevOneProgress = (userPercentScoreQHisLevOneProgress * 0);
	document.getElementById("qHisLev1Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQHisLevTwo = (userBestScoreQHisLevTwo * 0);
	document.getElementById("qHisLev2BestScore").innerHTML = 0;   // Usuń znacznik komentarza, jak skończysz tworzenie tego poziomu testu.
	//userPercentScoreQHisLevTwoProgress = (userPercentScoreQHisLevTwoProgress * 0);
    document.getElementById("qHisLev2Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQHisLevThree = (userBestScoreQHisLevThree * 0);
	document.getElementById("qHisLev3BestScore").innerHTML = 0;   // Usuń znacznik komentarza, jak skończysz tworzenie tego poziomu testu.
	//userPercentScoreQHisLevThreeProgress = (userPercentScoreQHisLevThreeProgress * 0);
    document.getElementById("qHisLev3Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
    
	//userPercentScoreQTraffAllLevelsProgress = (userPercentScoreQTraffAllLevelsProgress * 0);
    document.getElementById("qTraffAllLevelsProg").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQTraffLevOne = (userBestScoreQTraffLevOne * 0);
	document.getElementById("qTraffLev1BestScore").innerHTML = 0;   // Usuń znacznik komentarza, jak skończysz tworzenie tego poziomu testu.
	//userPercentScoreQTraffLevOneProgress = (userPercentScoreQTraffLevOneProgress * 0);
    document.getElementById("qTraffLev1Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQTraffLevTwo = (userBestScoreQTraffLevTwo * 0);
	document.getElementById("qTraffLev2BestScore").innerHTML = 0;   // Usuń znacznik komentarza, jak skończysz tworzenie tego poziomu testu.
	//userPercentScoreQTraffLevTwoProgress = (userPercentScoreQTraffLevTwoProgress * 0);
    document.getElementById("qTraffLev2Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
	//userBestScoreQTraffLevThree = (userBestScoreQTraffLevThree * 0);
	document.getElementById("qTraffLev3BestScore").innerHTML = 0;   // Usuń znacznik komentarza, jak skończysz tworzenie tego poziomu testu.
	//userPercentScoreQTraffLevThreeProgress = (userPercentScoreQTraffLevThreeProgress * 0);
    document.getElementById("qTraffLev3Prog").innerHTML = parseFloat(0).toFixed(0) + "%";
	
	// localStorage - string:
	document.getElementById("catCountL2Block").style.display = "flex";
	document.getElementById("catCountL2Unblock").style.display = "none";
	document.getElementById("catCountL3Block").style.display = "flex";
	document.getElementById("catCountL3Unblock").style.display = "none";
	
	document.getElementById("catHisL2Block").style.display = "flex";
	document.getElementById("catHisL2Unblock").style.display = "none";
	document.getElementById("catHisL3Block").style.display = "flex";
	document.getElementById("catHisL3Unblock").style.display = "none";
	
	document.getElementById("catTraffL2Block").style.display = "flex";
	document.getElementById("catTraffL2Unblock").style.display = "none";
	document.getElementById("catTraffL3Block").style.display = "flex";
	document.getElementById("catTraffL3Unblock").style.display = "none";
	
}
