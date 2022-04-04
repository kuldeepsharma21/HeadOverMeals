from django.db import models


class Blogs(models.Model):
    title=models.CharField(max_length=100,null=False, blank=False)
    description=models.TextField()
    image=models.ImageField(upload_to='uploads/images' ,null=True, blank=True)
    date=models.DateField(auto_now_add=True)
    category=models.CharField(max_length=50,null=True,blank=True)
    incredients=models.TextField()
    directions=models.TextField()
    servings=models.CharField(max_length=100,null=False, blank=False)
    cuisine=models.CharField(max_length=100,null=False, blank=False)

    def __str__(self):
        return self.title


