from django.db import models
from django.contrib.auth.models import User

#admin models
class Admin(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    address=models.TextField(null=True)
    
    def __str__(self):
        return self.user.username

    
class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.user.username
    
    
class Brand(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Size(models.Model):
    size = models.CharField(max_length=10000)

    def __str__(self):
        return self.size

class Shoe(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('U', 'Unisex'),
    ]
    
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    model_name = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='shoes/')
    details = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    color = models.CharField(max_length=1000)
    sizes = models.ManyToManyField(Size)

    def __str__(self):
        return self.model_name