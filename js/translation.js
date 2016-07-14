var etusivu_q_01_eng = "A nondenominational organization focused on evangelism, lifting up and supporting the local church.";
var etusivu_q_02_eng = "Our mission is to reach the nations- meet inviduals.";

var etusivu_p_01_eng = "The purpose of the Keys of the Kingdom organization is to awaken this generation to find its true identity in Christ. It encourages people to use their own gifts and dreams to concretely love and help others. The organization not only serves in Finland, but also overseas.";
var etusivu_p_02_eng = "We visit different churches, schools, organizations, and events, and we also organize events in cooperation with others. We seek to build unity between individuals and churches, guiding young people in finding a deeper meaning to life along with a connection to church.";


var avustustyo_q_01_eng = "And now abide faith. hope. love, these three; but the greatest of these is LOVE ( 1. Kor.13:13)";
var avustustyo_q_02_eng = "Therefore be imitators of God as dear children. And walk in love, as Christ also has loved us and given himself for us... Ef.5.1-2";

var avustustyo_p_01_eng = "Keys of the Kingdom also provides financial support, concretely helping in situations of need. We support orphans, the poor and those in need. If need be, we will build and support orphanages, schools and more.";
var avustustyo_p_02_eng = "Keys of the Kingdom also offers food and clothing aid to young people and families.";



var tue_q_01_eng = "Join us to rice up a fearless Kingdom generation - We are called to make a change.";
var tue_q_02_eng = ".. See if I will not throw open the floodgates of heaven and pour out so much blessing that you will not have room enough for it (Mal.3:10)";

var tue_p_01_eng = "We challenge you to partner with us, to support our work for reaching the nations with Gods love!";
var tue_p_02_eng = "You can support us with single donations, becoming a long-term donor, or by purchasing our products.";
var tue_p_03_eng = "Products to come.";
var tue_p_04_eng = "We want to thank everyone for your support and prayers!";











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
		if(typeof(localStorage.language) !== "undefined") {
			// console.log("Found a stored language: " + localStorage.language);
			window["flag"] = localStorage.language;
			changeLanguage();
		}
		else {
			// console.log("No stored language found");
			window["flag"] = "eng";
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