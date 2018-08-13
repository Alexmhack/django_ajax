# django_ajax
using ajax with django to avoid refreshing the page

# Installations
1. pip install django
2. pip install django-widget-tweaks

# Configuring
1. Create a new django project
2. Create a new app
3. Create views for contact and home page
4. Include 'widget_tweaks' in INSTALLED_APPS
5. Load widget_tweaks in base template or contact template
6. Add attr:"rows: " and attr:"cols: " filter tags in textarea widget of our contact form