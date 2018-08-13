"use strict";

formData = {
	'contact_name': $("input[name=name]").val(),
	'contact_email': $("input[name=email]").val(),
	'contact_message': $("input[name=message]").val()
}

function send_contact_form(data) {
	$("#status").html("Sending...");

	$.ajax({
		url: {% url 'contact-form' %},
		type: "POST",
		data: formData,
		success: function(data, textStatus, jqXHR) {
			$("#status").text(data.valid_data),
			if (data.valid_data) {
				$('#contact-form').closest('form').find("input[type=text], textarea").val("");
			}
			$("#status").html(data.valid_data);
		},
		error: function(jqXHR, textStatus, errorThrown) {
			$("#status").text(jqXHR);
		}
	})
}