# Generated by Django 5.0.7 on 2024-10-08 05:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectapp', '0016_alter_cart_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(default='image', upload_to='bags/'),
        ),
    ]
