from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import Product
import json
from django.http import HttpResponse

def product_list(request):
    """API endpoint to return all products as JSON"""
    products = Product.objects.all()
    products_data = []
    
    for product in products:
        products_data.append({
            'id': product.id,
            'name': product.name,
            'price': float(product.price),
            'currency': product.currency,
            'image': product.image,
            'description': product.description
        })
    
    return JsonResponse(products_data, safe=False)

def product_detail(request, product_id):
    """API endpoint to return a single product by ID as JSON"""
    try:
        product = Product.objects.get(id=product_id)
        product_data = {
            'id': product.id,
            'name': product.name,
            'price': float(product.price),
            'currency': product.currency,
            'image': product.image,
            'description': product.description
        }
        return JsonResponse(product_data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

@csrf_exempt
@require_http_methods(["POST"])
def create_product(request):
    """API endpoint to create a new product"""
    try:
        data = json.loads(request.body)
        product = Product.objects.create(
            name=data.get('name'),
            price=data.get('price'),
            currency=data.get('currency', 'MAD'),
            image=data.get('image', ''),
            description=data.get('description', '')
        )
        
        product_data = {
            'id': product.id,
            'name': product.name,
            'price': float(product.price),
            'currency': product.currency,
            'image': product.image,
            'description': product.description
        }
        return JsonResponse(product_data, status=201)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

def home(request):
    return HttpResponse("Welcome to the homepage! Go to /products/ to see the product list.")
