# Generated by Django 5.0.1 on 2024-01-31 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hotel',
            name='price',
        ),
        migrations.AddField(
            model_name='hotel',
            name='images',
            field=models.JSONField(default=list),
        ),
        migrations.AddField(
            model_name='hotel',
            name='preference',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='hotel',
            name='rating',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hotel',
            name='type',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='location',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='name',
            field=models.CharField(default='', max_length=200),
        ),
    ]