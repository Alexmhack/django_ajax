from django import form

class ContactForm(form.Form):
	name = form.CharField(max_length=30, required=True, label="Your name: ")
	email = form.EmailField(required=True, label="Your email: ")
	message = form.CharField(widgets=forms.Textarea, required=True, label="Your message: ")