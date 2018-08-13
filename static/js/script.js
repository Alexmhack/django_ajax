// form submission
$("#contact-form").on("submit", function(event) {
	event.preventDefault();
	console.log("Form Submitted");
	send_contact_form();
});

formData = {
	'contact_name': $("input[name=name]").val(),
	'contact_email': $("input[name=email]").val(),
	'contact_message': $("input[name=message]").val()
}

// AJAX for contact submission
function send_contact_form() {
	console.log("Contact form is working!");
	console.log($("#id_name").val());
	console.log($("#id_email").val());
	console.log($("#contact_message").val());

	$("#status").html("Sending...")

	$.ajax({
		url: {% contact-form %},
		type: "POST",
		data: formData
		success: function(data) {
			$('#contact-form').closest('form').find("input[type=text], textarea").val("");
			console.log(data);
			console.log("success");
			$("#status").html(data.valid_data);
		},
		error : function(xhr,errmsg,err) {
            $('#status').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
	})
}