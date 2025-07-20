from django.core.management.base import BaseCommand
from products.models import Product

class Command(BaseCommand):
    help = 'Seed the database with sample products'

    def handle(self, *args, **options):
        # Sample products data
        products_data = [
            {
                'name': 'Pack Black',
                'price': 399.99,
                'currency': 'MAD',
                'image': 'image1',
                'description': 'A comfortable Sandal and stylish bag.'
            },
            {
                'name': 'Summer Collection',
                'price': 299.99,
                'currency': 'MAD',
                'image': 'image2',
                'description': 'Perfect summer outfit with breathable fabric.'
            },
            {
                'name': 'Winter Essentials',
                'price': 599.99,
                'currency': 'MAD',
                'image': 'image3',
                'description': 'Warm and cozy winter collection for cold days.'
            },
            {
                'name': 'Casual Wear',
                'price': 199.99,
                'currency': 'MAD',
                'image': 'image4',
                'description': 'Comfortable casual wear for everyday use.'
            },
            {
                'name': 'Formal Attire',
                'price': 799.99,
                'currency': 'MAD',
                'image': 'image5',
                'description': 'Elegant formal wear for professional occasions.'
            },
            {
                'name': 'Sport Collection',
                'price': 349.99,
                'currency': 'MAD',
                'image': 'image6',
                'description': 'High-performance sportswear for active lifestyle.'
            },
            {
                'name': 'Evening Dress',
                'price': 899.99,
                'currency': 'MAD',
                'image': 'image7',
                'description': 'Stunning evening dress for special occasions.'
            },
            {
                'name': 'Accessories Pack',
                'price': 149.99,
                'currency': 'MAD',
                'image': 'image8',
                'description': 'Complete accessories pack to complement any outfit.'
            },
            {
                'name': 'Beach Collection',
                'price': 249.99,
                'currency': 'MAD',
                'image': 'image9',
                'description': 'Perfect beach collection for sunny days.'
            },
            {
                'name': 'Party Wear',
                'price': 449.99,
                'currency': 'MAD',
                'image': 'image10',
                'description': 'Trendy party wear for celebrations and events.'
            }
        ]

        # Clear existing products
        Product.objects.all().delete()
        self.stdout.write('Cleared existing products...')

        # Create new products
        created_products = []
        for product_data in products_data:
            product = Product.objects.create(**product_data)
            created_products.append(product)
            self.stdout.write(f'Created product: {product.name}')

        self.stdout.write(
            self.style.SUCCESS(f'Successfully created {len(created_products)} products!')
        ) 