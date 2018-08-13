from django.contrib import admin

from .models import UserContactInfo

@admin.register(UserContactInfo)
class UserInfo(admin.ModelAdmin):
	model = UserContactInfo
	list_display = ('name', 'email')