from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'currency', 'created_at')
    list_filter = ('currency', 'created_at')
    search_fields = ('name', 'description')
    ordering = ('-created_at',)
