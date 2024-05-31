from rest_framework import serializers
from . import models
from django.contrib.auth.models import User
from .models import Customer,Brand,Size,Shoe

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Admin
        fields=['id','user','address']
        
    def __init__(self, *args, **kwargs):
        super(AdminSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
class AdminDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Admin
        fields=['id','user','address']
        
    def __init__(self, *args, **kwargs):
        super(AdminDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
             
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['first_name', 'last_name', 'phone_number']
        
        
class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name']

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['id', 'size']

class ShoeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = ['id', 'brand', 'gender', 'model_name', 'image', 'details', 'price', 'color', 'sizes']

    sizes = serializers.PrimaryKeyRelatedField(queryset=Size.objects.all(), many=True)