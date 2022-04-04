from django.shortcuts import render
from .models import  Blogs
from .serializers import  BlogsSerializer
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend


class BlogsView(viewsets.ModelViewSet):
    queryset=Blogs.objects.all()
    serializer_class=BlogsSerializer
    filter_backends=[DjangoFilterBackend]
    filterset_fields=['category','cuisine']
      