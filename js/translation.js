var etusivu_q_01_eng = "Non profit organization- love, lead and lift people to live life fully the way God planned it. Our missions is to reach the nations- meet the ​​inviduals​​.";
var etusivu_q_02_eng = "English quote 02 here.";

var etusivu_p_01_eng = "English paragraph 01 here.";
var etusivu_p_02_eng = "English paragraph 02 here.";


var avustustyo_q_01_eng = "English quote 01 here.";
var avustustyo_q_02_eng = "English quote 02 here.";

var avustustyo_p_01_eng = "English avustustyö text here.";

var flag = "eng";

$(document).ready(getFinnishTranslations());

$(".flag-container").on("click", function() {
	if(flag == "eng") {
		translateTo("eng");
		swapFlag("fin");
	}
	else if (flag == "fin") {
		translateTo("fin");
		swapFlag("eng");
	}
});

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
		$("#" + translateable[i].id).text(window[translateable[i].id + "_" + lang]);
	}
}

function getFinnishTranslations() {
	var translateable = $(".translateable");
	for(var i = 0; i < translateable.length; i++) {
		window["" + translateable[i].id + "_fin"] = $("#" + translateable[i].id).text();
		}
}