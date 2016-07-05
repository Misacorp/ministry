var etusivu_q_01_eng = "Non profit organization- love, lead and lift people to live life fully the way God planned it.";
var etusivu_q_02_eng = "Our mission is to reach the nations- meet inviduals.";

var etusivu_p_01_eng = "English paragraph 01 here.";
var etusivu_p_02_eng = "English paragraph 02 here.";


var avustustyo_q_01_eng = "And now abide faith. hope. love, these three; but the greatest of these is LOVE ( 1. Kor.13:13)";
var avustustyo_q_02_eng = "Therefore be imitators of God as dear children. And walk in love, as Christ also has loved us and given himself for us, an offering and a sacrifice to God for a sweet- smelling aroma Ef.5.1-2";

var avustustyo_p_01_eng = "English avustustyö text here.";











	// TRANSLATION ENGINE	


var flag = "eng";

$(document).ready(function () {
	getFinnishTranslations();
	loadLanguage();
	});

$(".flag-container").on("click", function() {
	changeLanguage();
	saveLanguage();
});

function changeLanguage() {
	if(flag == "eng") {
		translateTo("eng");
		swapFlag("fin");
	}
	else if (flag == "fin") {
		translateTo("fin");
		swapFlag("eng");
	}
}

function swapFlag(toLanguage) {
	if (toLanguage == "fin") {
		$(".flag-container").html("<img src=\"img/logo/flag-fin.png\" id=\"flag-finnish\"/>");
		flag = "fin";
		return;
	};
	
	if (toLanguage == "eng") {
		$(".flag-container").html("<img src=\"img/logo/flag-eng.png\" id=\"flag-english\"/>");
		flag = "eng";
		return;
	};
}

function translateTo(lang) {
	var translateable = $(".translateable");
	for(var i = 0; i < translateable.length; i++) {
		if(window[translateable[i].id + "_" + lang] === undefined) {
			console.log("No (" + lang + ") translation found for (" + translateable[i].id + ")");
			$("#" + translateable[i].id).html("");
			}
		else {
			$("#" + translateable[i].id).html("<p>" + window[translateable[i].id + "_" + lang] + "</p>");
		}
	}
}

function saveLanguage() {
	if(typeof(Storage) !== "undefined") {
		if(flag == "eng") {
			localStorage.setItem("language", "fin");
		}
		else if (flag == "fin") {
			localStorage.setItem("language", "eng");
		}
	}
	else {
		console.log("Your browser does not support local storage.");
	}
}

function loadLanguage() {
	if(typeof(Storage) !== "undefined") {
		if(localStorage.flag !== "undefined") {
			window["flag"] = localStorage.language;
			changeLanguage();
		}
	}
	else {
		console.log("Your browser does not support local storage.");
	}
}

function getFinnishTranslations() {
	var translateable = $(".translateable");
	for(var i = 0; i < translateable.length; i++) {
		window["" + translateable[i].id + "_fin"] = $("#" + translateable[i].id).text();
		}
}