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
	if request.method == "POST":
		form = contact_form(data=request.POST)
		if form.is_valid():
			contact_name = request.POST.get("name", "")
			contact_email = request.POST.get("email", "")
			contact_message = request.POST.get("message", "")

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
		else:
			return JsonResposne(data['invalid_email'])
	return render(request, "contact/contact_form.html", {'form': contact_form})


def index(request):
	return render(request, "contact/index.html")