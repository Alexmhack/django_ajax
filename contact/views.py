from django.shortcuts import render
from django.template.loader import get_template
from django.core.mail import EmailMessage
from django.http import JsonResponse

from .forms import ContactForm
from .models import UserContactInfo

data = {
	'valid_data': 'Thanks for contacting with us!',
	'invalid_name': 'Please enter a valid name',
	'invalid_email': 'Please enter a valid email',
	'invalid_message': 'Please enter a valid message',
}

def contact_view(request):
	contact_form = ContactForm
	return render(request, "contact/contact_form.html", {'form': contact_form})


def send_email(request):
	contact_name = request.GET.get("contact_name", "")
	contact_email = request.GET.get("contact_email", "")
	contact_message = request.GET.get("contact_message", "")

	template = get_template("contact_email.txt")
	context = {
		'contact_name': contact_name,
		'contact_email': contact_email,
		'contact_message': contact_message
	}
	content = template.render(context)
	email = EmailMessage(
		"New Contact Form Submission",
		content,
		"Django AJAX WebApp",
		['primaryeaddress@gmail.com'],
	)
	email.send()
	data['contact_name'] = contact_name
	UserContactInfo.objects.create(
		name=contact_name,
		email=contact_email,
		message=contact_message
	)
	return JsonResponse(data)


def index(request):
	return render(request, "contact/index.html")