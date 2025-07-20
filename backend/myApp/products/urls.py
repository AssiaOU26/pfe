from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.product_list, name='product_list'),
    path('products/<int:product_id>/', views.product_detail, name='product_detail'),
    path('products/create/', views.create_product, name='create_product'),
    # Keep the API endpoints for backward compatibility
    path('api/products/', views.product_list, name='api_product_list'),
    path('api/products/<int:product_id>/', views.product_detail, name='api_product_detail'),
    path('api/products/create/', views.create_product, name='api_create_product'),
] 