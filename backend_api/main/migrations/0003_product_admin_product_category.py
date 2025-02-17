# Generated by Django 4.2.13 on 2024-05-28 16:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_product_productcategory'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='admin',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.admin'),
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='main.productcategory'),
        ),
    ]
