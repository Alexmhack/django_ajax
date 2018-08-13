from django.urls import path

from .views import (
	contact_view,
	index,
)

urlpatterns = [
	path('contact/', contact_view, name='contact-form'),
	path('', index, name='home-page'),
]