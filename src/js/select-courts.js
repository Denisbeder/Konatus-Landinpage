import "magnific-popup/dist/jquery.magnific-popup.js";
import "magnific-popup/dist/magnific-popup.css";

function modal(src) {
	$.magnificPopup.open(
		{
			items: {
				src:
					'<div class="courts-box-container">' +
					src +
					"</div>",
				type: "inline",
			},
			type: "inline",
            fixedContentPos: true,
            fixedBgPos: true,
		},
		0
	);
}

export default function selectCourts() {
	$(document).on("change", "#select-courts", function(e) {
		var courtsValue = e.target.value;

		if (courtsValue == "") {
			$.magnificPopup.close();
		} else {
			var courstUrl =
				"https://apipub.projud.com.br/api/v1/list/abrangencias/" +
				courtsValue;
			var courstResult = "";
			modal("<div class='py-5'>Buscando, por favor aguarde...</div>");
			$.get(courstUrl, function(data) {
				$.each(data, function(i, elem) {
					courstResult += '<div class="courts-box shadow">';
					courstResult +=
						"<strong>" + elem.DescricaoTribunal + "</strong>";
					courstResult += "Sigla: " + elem.Sigla;
					courstResult += "<br> Tribunal: " + elem.Tribunal;
					courstResult += "</div>";
				});
				$.magnificPopup.close();
				modal(courstResult);
			}).fail(function() {
				modal(
					"<div class='py-5'>Sistema indisponíel. Tente novamente mais tarde.</div>"
				);
			});
		}
	});
}
