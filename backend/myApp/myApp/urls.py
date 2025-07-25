# backend/myApp/myApp/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
# Remove the redirect import if it's no longer used elsewhere
# from django.shortcuts import redirect 
from rest_framework_simplejwt.views import TokenObtainPairView
from products import views as product_views # Import views from your products app

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # CHANGE THIS:
    # path('', lambda request: redirect('/products/')),

    # TO THIS:
    path('', product_views.home, name='home'), # Points the root to your home view

    path('', include('products.urls')),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/register/', product_views.register, name='register'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
