from django.contrib import admin
from django.urls import path,include
from .views import  UserViewSet
from rest_framework import routers
from headovermeals.views import BlogsView


route=routers.DefaultRouter()

route.register('users',UserViewSet)
route.register('blogs',BlogsView)


urlpatterns = [
    
    path('',include(route.urls)),
    
]