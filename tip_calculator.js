var modes = {
	"background-nm": "#030303",
	"textColor-nm": "#cfd3d5",
	"calcBorder-nm": "#1a1a1a",
	"titleColor-nm": "#1f1f1f",
	"btnBorder-nm": "#d6dadd",
	"btnBackground-nm": "#1a1a1a",

	"background": "white",
	"textColor": "black",
	"calcBorder": "black",
	"titleColor": "#e1e1e1",
	"btnBorder": "black",
	"btnBackground": "white"
};

function calculate(){
	var total = Number($("#total").val());
	var numPeople = $("#people").val();
	if(total == 0 || isNaN(total)) {
		alert("Bill total must be a number");
	} else if(numPeople == 0 || isNaN(numPeople)) {
		alert("Number of people must be a number");
	} else {
		var percent = $('input[name=percentage]:checked', 'form').val();
		var tip = (total/numPeople) * (percent/100);
		tip = tip.toPrecision(4);
		alert("Tip per Person: $" + tip);
	}
}

$("#night-mode").change(function() {
	var mode;
	(this.checked) ? mode = "-nm" : mode = "";
	$("body").css("background-color", modes["background" + mode]);
	$("body").css("color", modes["textColor" + mode]);

	$("#calculator-wrapper").css("background-color", modes["background" + mode]);
	$("#calculator-container").css("border-color",modes["calcBorder" + mode]);

	$("#title-container").css("border-bottom-color", modes["calcBorder" + mode]);
	$("#title-container").css("background-color", modes["titleColor" + mode]);

	$("input[type=text]").css("background-color", modes["btnBackground" + mode]);
	$("input[type=text]").css("color", modes["textColor" + mode]);

	$("input[type=submit]").css("border-color", modes["btnBorder" + mode]);
});
