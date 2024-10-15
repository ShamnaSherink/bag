from django.db import models
from django.utils import timezone
from datetime import datetime

from django.contrib.auth.models import User



# Create your models here.

class Login(models.Model):
    email=models.CharField(max_length=50,unique=True)
    password=models.CharField(max_length=50)
    role=models.CharField(max_length=50)

class Registration(models.Model):
    name=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    password=models.CharField(max_length=50)
    number=models.CharField(max_length=50)
    address=models.CharField(max_length=50)
    login_id=models.OneToOneField(Login,on_delete=models.CASCADE)
    role=models.CharField(max_length=50)

class Category(models.Model):
    Category_name=models.CharField(max_length=50)
    

class Product(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity=models.CharField(max_length=100,default='a')
    image = models.ImageField(upload_to='bags/',default='image')
   



class Wishlist(models.Model):
    login_id = models.OneToOneField( Login,  on_delete=models.CASCADE,related_name='wishlist_for_login')
    product_id = models.OneToOneField(Product, on_delete=models.CASCADE, related_name='wishlist_for_product')
   


class Review(models.Model):
    product_id=models.CharField(max_length=100)
    user_id=models.CharField(max_length=100)
    product_name=models.CharField(max_length=100)
    user_name=models.CharField(max_length=100)
    time=models.DateTimeField(max_length=100)
    description=models.CharField(max_length=100)  



class Shop(models.Model):
    shop_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    login_id = models.OneToOneField(Login, on_delete=models.CASCADE)
    role = models.CharField(max_length=50, default="shop")









class Cart(models.Model):
    productid = models.CharField(max_length=30)
    userid = models.CharField(max_length=30)
    quantity = models.IntegerField() 
    cart_status = models.CharField(max_length=30)

    


    

class Order(models.Model):
    productid = models.CharField(max_length=30)
    userid = models.CharField(max_length=30)
    quantity = models.IntegerField()
    order_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='Pending')

    def __str__(self):
        return f"Order {self.id} - User {self.userid}"





















#  def __str__(self):
#         return f"{self.card_holder_name} - {self.card_number[-4:]}"


