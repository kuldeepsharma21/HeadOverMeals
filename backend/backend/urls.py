from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from headovermeals.views import  BlogsView
from rest_framework import routers

from rest_framework.authtoken.views import obtain_auth_token


route=routers.DefaultRouter()

route.register('blogs',BlogsView, basename='Blogsview')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(route.urls)),
    path('authent/',include('authentication.urls')),
    path('auth/',obtain_auth_token),
    
    
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)