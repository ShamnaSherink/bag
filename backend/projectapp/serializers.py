from rest_framework import serializers
from . models import Registration,Login,Category,Product,Wishlist,Review,Shop,Cart,Order


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Registration
        fields='__all__'
        

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model=Login
        fields='__all__'





class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category        
        fields='__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'


class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model=Wishlist
        fields='__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields='__all__'

        
class ShopRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ['shop_name', 'email', 'password', 'phone_number', 'address', 'login_id', 'role']



def __str__(self):
        return self.userid

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['productid', 'userid', 'quantity', 'cart_status']

    def create(self, validated_data):
        return Cart.objects.create(**validated_data)




class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'
