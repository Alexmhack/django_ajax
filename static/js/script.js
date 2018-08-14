// form submission
$("#contact-form").on("submit", function(event) {
	event.preventDefault();
	console.log("Form Submitted");
	send_contact_form();
});

console.log("Script is running")

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
			$("#status").html(data.valid_data + data.contact_name);
			console.log(data.valid_data + data.contact_name);
		},
		error : function(xhr,errmsg,err) {
            $('#status').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
	})
}

// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

$.ajaxPrefilter(function(options, originalOptions, jqXHR){
    if (options['type'].toLowerCase() === "post") {
        jqXHR.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
    }
});