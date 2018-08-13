from django import forms

from .models import UserContactInfo

class ContactForm(forms.ModelForm):
	class Meta:
		model = UserContactInfo
		fields = "__all__"
		widgets = {
			'message': forms.Textarea(attrs={
				'id': 'contact_message',
				'required': True,
				'placeholder': 'Your message'
			}),
		}