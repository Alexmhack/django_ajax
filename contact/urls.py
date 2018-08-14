from django.urls import path

from .views import (
	contact_view,
	send_email,
	index,
)

urlpatterns = [
	path('contact/', contact_view, name='contact-form'),
	path('send-email/', send_email, name='send-email'),
	path('', index, name='home-page'),
]