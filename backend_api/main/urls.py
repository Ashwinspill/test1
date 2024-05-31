from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/',views.Admin.as_view()),
    path('admins/<int:pk>/',views.AdminDetail.as_view()),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'), 
    path('brands/', views.BrandListCreateView.as_view(), name='brand-list-create'),
    path('sizes/', views.SizeListCreateView.as_view(), name='size-list-create'),
    path('shoes/', views.ShoeListCreateView.as_view(), name='shoe-list-create'),
    path('shoes/<int:pk>/', views.ShoeDetailView.as_view(), name='shoe-detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
