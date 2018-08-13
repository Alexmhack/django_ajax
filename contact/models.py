from django.db import models

class UserContactInfo(models.Model):
	name = models.CharField(max_length=30)
	email = models.EmailField()
	message = models.TextField()

	def __str__(self):
		return f"{self.name}: {self.email}"