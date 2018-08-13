from django import forms

class ContactForm(forms.Form):
	name = forms.CharField(max_length=30, required=True, label="Your name: ")
	email = forms.EmailField(required=True, label="Your email: ")
	message = forms.CharField(
		widget=forms.Textarea,
		required=True,
		label="Your message: ",
	)