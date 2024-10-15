# Generated by Django 5.0.7 on 2024-09-26 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectapp', '0013_alter_shop_login_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shop',
            old_name='Login_id',
            new_name='login_id',
        ),
        migrations.AlterField(
            model_name='shop',
            name='address',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='shop',
            name='role',
            field=models.CharField(default='shop', max_length=50),
        ),
    ]