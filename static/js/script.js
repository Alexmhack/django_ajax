$name = $("#name").val();
$email = $("#email").val();
$message = $("#message").val();

// form submission
$("#contact-form").on("submit", function(event) {
	event.preventDefault();
	console.log("Form Submitted");
	send_contact_form();
	console.log($name, $email, $message);
});

console.log("Script is running");

formData = {
	'contact_name': $("input[name=name]").val(),
	'contact_email': $email,
	'contact_message': $message
}

// AJAX for contact submission
function send_contact_form() {
	console.log("Contact form is working!");
	console.log($("#id_name").val());
	console.log($("#id_email").val());
	console.log($("#contact_message").val());

	$("#status").html("Sending...");

	$name = $("#id_name").val();
	$email = $("#id_email").val();
	$message = $("#contact_message").val();

	console.log($name);
	console.log($email);
	console.log($message);

	$.ajax({
		url: "/send-email/",
		data: {
			'contact_name': $name,
			'contact_email': $email,
			'contact_message': $message
		},
		dataType: 'json',
		success: function(data) {
			$('#contact-form').closest('form').find("input[type=text], textarea").val("");
			console.log(data);
			console.log("success");
			$("#status").html(data.valid_data);
			console.log(data.valid_data);
			return data
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