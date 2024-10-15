from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Registration,Login,Category,Product,Wishlist,Shop,Cart,Order
from .serializers import RegisterSerializer,LoginSerializer,ProductSerializer,CategorySerializer,WishlistSerializer,ReviewSerializer,ShopRegistrationSerializer,CartSerializer,OrderSerializer
from django.http import Http404






# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from projectapp.serializers import LoginSerializer
from projectapp.models import Login, Registration, Shop

class login_api(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        log_var = Login.objects.filter(email=email, password=password)

        if log_var.exists():
            a = LoginSerializer(log_var, many=True)
            for i in a.data:
                login_id = i['id']
                role = i['role']
                print(role)

                if role == 'user':
                    register_data = Registration.objects.filter(login_id=login_id).values()
                    if register_data:
                        user_info = register_data[0]
                        id = user_info['id']
                        name = user_info['name']
                        number = user_info['number']
                        return Response({
                            'data': {
                                'login_id': login_id,
                                'user_id': id,
                                'email': email,
                                'password': password,
                                'name': name,
                                'number': number,
                                'role': role
                            },
                            'success': 1,
                            'message': 'Login successfully'
                        }, status=status.HTTP_200_OK)
                
                elif role == 'shop':
                    shop_data = Shop.objects.filter(login_id=login_id).values()
                    if shop_data:
                        shop_info = shop_data[0]
                        shop_name = shop_info['shop_name']
                        email = shop_info['email']
                        password = shop_info['password']
                        address = shop_info['address']
                        phone_number = shop_info['phone_number']
                        login_id = shop_info['login_id_id']
                        role = shop_info['role']
                        return Response({
                            'data': {
                                'shop_name': shop_name,
                                'email': email,
                                'password': password,
                                'address': address,
                                'phone_number': phone_number,
                                'login_id': login_id,
                                'role': role
                            },
                            'success': 1,
                            'message': 'Login successfully'
                        }, status=status.HTTP_200_OK)
                
            return Response({
                'data': 'Username or password invalid'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({
            'data': 'Username or password invalid'
        }, status=status.HTTP_400_BAD_REQUEST)





class registration_api(GenericAPIView):
    serializer_class=RegisterSerializer
    serializer_class_login=LoginSerializer

    def post(self,request):
        name=request.data.get('name')
        email=request.data.get('email')
        password=request.data.get('password')
        number=request.data.get('number')
        address=request.data.get('address')
        login_id=request.data.get('login_id')
        role='user'

        if Registration.objects.filter(email=email).exists():
            return Response({'message':'Duplicate email found!'},status=status.HTTP_400_BAD_REQUEST)
        if Registration.objects.filter(number=number).exists():
            return Response({'message':'Duplicate phone number found'},status=status.HTTP_400_BAD_REQUEST)
        
        login_data = {'email': email, 'password': password, 'role': role}
        serializer_login = self.serializer_class_login(data=login_data)
        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
        else:
            return Response({'message': 'Login creation failed!', 'errors': serializer_login.errors}, status=status.HTTP_400_BAD_REQUEST)

        registration_data = {
            'name': name,
            'email': email,
            'password': password,
            'number': number,
            'address':address,
            'login_id': login_id,
            'role': role
        }
        serializer = self.serializer_class(data=registration_data)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Registration successful', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'Registration failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


# views.py


class shop_registration_api(GenericAPIView):
    serializer_class = ShopRegistrationSerializer
    serializer_class_login = LoginSerializer

    def post(self, request):
        shop_name = request.data.get('shop_name')
        email = request.data.get('email')
        password = request.data.get('password')
        phone_number = request.data.get('phone_number')
        address = request.data.get('address')
        role = 'shop'

        if Shop.objects.filter(email=email).exists():
            return Response({'message': 'Duplicate email found!'}, status=status.HTTP_400_BAD_REQUEST)
        if Shop.objects.filter(phone_number=phone_number).exists():
            return Response({'message': 'Duplicate phone number found!'}, status=status.HTTP_400_BAD_REQUEST)

        login_data = {'email': email, 'password': password, 'role': role}
        serializer_login = self.serializer_class_login(data=login_data)
        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
        else:
            return Response({'message': 'Login creation failed!', 'errors': serializer_login.errors}, status=status.HTTP_400_BAD_REQUEST)

        shop_data = {
            'shop_name': shop_name,
            'email': email,
            'password': password,
            'phone_number': phone_number,
            'address': address,
            'login_id': login_id,
            'role': role
        }

        serializer = self.serializer_class(data=shop_data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Shop registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)








# View all products
class view_product_api(GenericAPIView):
    serializer_class = ProductSerializer

    def get(self, request):
        queryset = Product.objects.all()
        if queryset.count() > 0:
            serializer = ProductSerializer(queryset, many=True)
            return Response({'data': serializer.data, 'message': 'Product retrieved successfully', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'no data available', 'message': 'Failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


# View a single product
class view_single_product_api(GenericAPIView):
    serializer_class = ProductSerializer

    def get(self, request, id):
        try:
            queryset = Product.objects.get(pk=id)
            serializer = ProductSerializer(queryset)
            return Response({'data': serializer.data, 'message': 'Product retrieved successfully', 'success': 1}, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response({'data': 'Product not found', 'message': 'Failed', 'success': 0}, status=status.HTTP_404_NOT_FOUND)




class update_single_user_api(GenericAPIView):
    serializer_class=RegisterSerializer
    def put(self,request,id):
        queryset=Registration.objects.get(pk=id)
        print(queryset)
        serializer=RegisterSerializer(
            instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'data get','success':True}, status=status.HTTP_200_OK)
        


class delete_single_user_api(GenericAPIView):
    serializer_class=RegisterSerializer
    def delete(self,request,id):
        queryset=Registration.objects.get(pk=id)
        queryset.delete()
        return Response({'delete Successfully'})
        



class add_category_api(GenericAPIView):
    serializer_class = CategorySerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class view_category_api(GenericAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()

    def get(self, request):
        categories = self.get_queryset()
        serializer = self.get_serializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)






from rest_framework.generics import RetrieveAPIView
from django.http import Http404

class SingleCategoryAPI(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_object(self):
        pk = self.kwargs.get('pk')
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise Http404("Category not found")
        



class view_user_profile_api(RetrieveAPIView):
    serializer_class = RegisterSerializer
    queryset = Registration.objects.all()
    
    def get_object(self):
        user_id = self.kwargs.get('pk') 
        return Registration.objects.get(id=user_id)






from rest_framework import generics
from rest_framework.response import Response
from .models import Wishlist, Registration
from .serializers import WishlistSerializer, RegisterSerializer

class view_wishlist_api(generics.ListAPIView):
    serializer_class = WishlistSerializer

    def get_queryset(self):
        user_id = self.kwargs.get('pk')
        return Wishlist.objects.filter(login_id=user_id)

    def list(self, request, *args, **kwargs):
        wishlists = self.get_queryset()

        user_id = self.kwargs.get('pk')
        
        users = Registration.objects.filter(id=user_id)

        wishlist_data = WishlistSerializer(wishlists, many=True).data
        user_data = RegisterSerializer(users, many=True).data

        user_data_map = {user['id']: user for user in user_data}

        for wishlist in wishlist_data:
            wishlist['login_id'] = user_data_map.get(user_id, {})

        response_data = {
            'wishlists': wishlist_data,
        }

        return Response(response_data)




class remove_wishlist_api(GenericAPIView):
    serializer_class=WishlistSerializer

    def delete(self,request,id):
        queryset=Registration.objects.get(pk=id)
        queryset.delete()
        return Response({'delete Successfully'})
        




class add_wishlist_api(GenericAPIView):
    serializer_class=WishlistSerializer
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






class add_product_api(GenericAPIView):
    
    serializer_class = ProductSerializer
    def post(self, request):
        name = request.data.get('name')
        description = request.data.get('description')
        price = request.data.get('price')
        quantity=request.data.get('quantity')
        image = request.data.get('image')

        product_data = {
            'name': name,
            'description': description,
            'price': price,
            'quantity':quantity,
            'image': image,
        }
          
        serializer = ProductSerializer(data=product_data)  
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Product added successfully', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'Failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)











class view_user_api(GenericAPIView):
    def get(self,request):
        user=Registration.objects.all()
        if (user.count()>0):
            serializer=RegisterSerializer(user,many=True)
            return Response({'data':serializer.data,'message':'data get','success':True}, status=status.HTTP_200_OK)
        else:
            return Response({'data':'no data availabe'}, status=status.HTTP_400_BAD_REQUEST)





# class add_review_api(GenericAPIView):
    serializer_class=ReviewSerializer
    def post(self,request):

     product_id=request.data.get('product_id')
     user_id=request.data.get('user_id')
     product_name=""
     username=""
     time=""
     description = request.data.get('description')


     product_data=Product.objects.filter(id=product_id).values()
     for i in product_data:
         product_name=i['product_name']
         print(product_name)


     user_data=Registration.objects.filter(login_id=user_id).values()
     for i in user_data:
         username=i['username']
         print(username)
     serilaizer=self.serializer_class(
         data={'product_id':product_id,'user_id':user_id,'product_name':product_name,'username':username,'time':time,'description':description,})
     print(serilaizer)
     if serilaizer.is_valid():
         serilaizer.save()
         return Response({'data':serilaizer.data,'message':'successfully and reviews'},status=status.HTTP_200_OK)
     return Response({'data':serilaizer.errors,'message':'failed','success':0},status=status.HTTP_400_BAD_REQUEST)

    
class add_review_api(GenericAPIView):
    serializer_class = ReviewSerializer

    def post(self, request):
        product_id = request.data.get('product_id')
        user_id = request.data.get('user_id')
        product_name = ""
        username = ""
        time = "" 
        description = request.data.get('description')

        product_data = Product.objects.filter(id=product_id).values()
        if not product_data:
            return Response({'message': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
             
        for i in product_data:
            product_name = i.get('product_name', '')
            print(product_name)

        user_data = Registration.objects.filter(login_id=user_id).values()
        if not user_data:
            return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        for i in user_data:
            username = i.get('username', '')
            print(username)

        serializer = self.serializer_class(
            data={
                'product_id': product_id,
                'user_id': user_id,
                'product_name': product_name,
                'username': username,
                'time': time,
                'description': description,
            }
        )
        print(serializer)

        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Review added successfully'}, status=status.HTTP_200_OK)

        return Response({'data': serializer.errors, 'message': 'Failed to add review', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)







class add_cart_api(GenericAPIView):
    serializer_class = CartSerializer

    def post(self, request):
        productid = request.data.get('productid')
        userid = request.data.get('userid')
        quantity = 1
        cart_status = "0"

        print(productid,userid,quantity,cart_status)

        carts = Cart.objects.filter(productid=productid, userid=userid)
        if carts.exists():
            return Response({'message': 'Item is already in cart', 'success': False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            product_data = Product.objects.filter(id=productid).values()

            serializer = self.serializer_class(
                data={'productid': productid, 'userid': userid, 'quantity': quantity, 'cart_status': cart_status})
            if serializer.is_valid():
                serializer.save()
                return Response({'data': serializer.data, 'message': 'Added to cart', 'success': 1}, status=status.HTTP_200_OK)
            return Response({'message': 'failed to add product to cart', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

class view_cart_api(GenericAPIView):
    def get(self, request, id):
        cart_pro = Cart.objects.filter(userid=id)
        if (cart_pro.count() > 0):
            serializer = CartSerializer(cart_pro, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)




class delete_cart_api(GenericAPIView):
     serializer_class= CartSerializer
     def delete(self,request,id):
        queryset=Cart.objects.get(pk=id)
        queryset.delete()
        return Response({'delete Successfully'})
        




from rest_framework import status

class PlaceOrderAPI(GenericAPIView):
    serializer_class = OrderSerializer

    def post(self, request, userid):
        cart_items = Cart.objects.filter(userid=userid, cart_status="0")

        if cart_items.exists():
            orders = []
            for item in cart_items:
                order_data = {
                    'productid': item.productid,
                    'userid': item.userid,
                    'quantity': item.quantity,
                }
                serializer = self.serializer_class(data=order_data)
                if serializer.is_valid():
                    serializer.save()
                    orders.append(serializer.data)
                else:
                    return Response({'message': 'Failed to place order', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

            cart_items.delete()

            return Response({'data': orders, 'message': 'Order placed successfully', 'success': 1}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'No items in cart to place order', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)













































































#        from rest_framework.response import Response
# from rest_framework import status

# class payment_api(GenericAPIView):
#     serializer_class = PaymentSerializer
    
#     def get(self, request):
#         payments = Payment.objects.all()
#         serializer = self.serializer_class(payments, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             # Perform additional security checks or processing here if needed
#             serializer.save(transaction_status="Success")  # Set transaction status to Success or handle dynamically
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
