from django.urls import path
from . import views

urlpatterns=[
    path('registration/',views.registration_api.as_view(),name='registration'),

    path('login/',views.login_api.as_view(),name='login'),

    path('shop_registration_api',views.shop_registration_api.as_view(),name='shop_registration_api'),

    path('category_api/',views.add_category_api.as_view(),name='category_api'),

    path('add_product_api/', views.add_product_api.as_view(), name='add_product_api'),

    path('view_product_api/',views.view_product_api.as_view(),name='view_product_api'),

   path('view_single_product_api/<int:id>/',views.view_single_product_api.as_view(), name='view_single_product_api'),


    path('update_single_user_api/<int:id>',views.update_single_user_api.as_view(),name='update_single_user_api'),

    path('delete_sigle_user_api/<int:id>',views.delete_single_user_api.as_view(),name='delete_sigle_user_api'),

    path('view_single_product_api/<int:id>',views.view_single_product_api.as_view(),name='view_single_product_api'),
    
    path('add_category_api/',views.add_category_api.as_view(),name='add_category_api'),

    path('view_category_api/',views.view_category_api.as_view(),name='view_category_api'),

    path('categories/<int:pk>/', views.SingleCategoryAPI.as_view(), name='category-detail'),

    path('view_user_profile_api/<int:pk>',views.view_user_profile_api.as_view(),name='view_user_profile_api'),

    path('add_wishlist_api/',views.add_wishlist_api.as_view(),name='add_wishlist_api'),

    path('view_wishlist_api/<int:pk>',views.view_wishlist_api.as_view(),name='view_wishlist_api'),

    path('remove_wishlist_api/<int:pk',views.remove_wishlist_api.as_view(),name='remove_wishlist_api'),

    path('view_user_api/',views.view_user_api.as_view(),name='view_user_api'),

    path('add_review_api/',views.add_review_api.as_view(),name='add_review_api'),

    path("add_cart_api/", views.add_cart_api.as_view(), name="add_cart_api"),

    path("view_cart_api/<int:id>/", views.view_cart_api.as_view(), name="view_cart_api"),

    path("delete_cart_api/<int:id>/", views.delete_cart_api.as_view(), name="delete_cart_api"),

   path('place-order/<str:userid>/', views.PlaceOrderAPI.as_view(), name='place_order'),


]
