$("#contact-form").on("submit", function(event) {
	event.preventDefault();
	console.log("Form Submitted");
	send_contact_form();
})