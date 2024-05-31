from rest_framework import generics,permissions
from django.contrib.auth.models import User
from . import serializers
from . import models
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .models import Customer,Brand,Shoe,Size
from .serializers import UserSerializer
from django.contrib.auth import authenticate, login, logout

class Admin(generics.ListCreateAPIView):
    queryset=models.Admin.objects.all()
    serializer_class=serializers.AdminSerializer
    

class AdminDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Admin.objects.all()
    serializer_class=serializers.AdminDetailSerializer
   
class RegisterView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(
                username=serializer.validated_data['username'],
                email=serializer.validated_data['email'],
                password=serializer.validated_data['password']
            )
            Customer.objects.create(
                user=user,
                first_name=request.data['customer']['first_name'],
                last_name=request.data['customer']['last_name'],
                phone_number=request.data['customer']['phone_number']
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
        
        user = authenticate(username=user.username, password=password)
        if user is not None:
            login(request, user)
            return Response({"is_superuser": user.is_superuser}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
        
class LogoutView(APIView):
    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
    
    
class BrandListCreateView(generics.ListCreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = serializers.BrandSerializer

class SizeListCreateView(generics.ListCreateAPIView):
    queryset = Size.objects.all()
    serializer_class = serializers.SizeSerializer

class ShoeListCreateView(generics.ListCreateAPIView):
    queryset = Shoe.objects.all()
    serializer_class = serializers.ShoeSerializer

class ShoeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shoe.objects.all()
    serializer_class = serializers.ShoeSerializer