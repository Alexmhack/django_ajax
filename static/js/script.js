// form submission
$("#contact-form").on("submit", function(event) {
	event.preventDefault();
	console.log("Form Submitted");
	send_contact_form();
});

// AJAX for contact submission
function send_contact_form() {
	console.log("Contact form is working!");
	console.log($("#id_name").val());
}