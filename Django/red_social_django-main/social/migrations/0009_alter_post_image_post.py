# Generated by Django 3.2.7 on 2021-09-17 02:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0008_alter_post_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image_post',
            field=models.ImageField(blank=True, null=True, upload_to='archivos', verbose_name='Imagen'),
        ),
    ]
