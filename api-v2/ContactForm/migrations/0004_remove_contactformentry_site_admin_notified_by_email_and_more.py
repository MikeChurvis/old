# Generated by Django 4.0.4 on 2022-05-25 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ContactForm', '0003_alter_contactformentry_options'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactformentry',
            name='site_admin_notified_by_email',
        ),
        migrations.AddField(
            model_name='contactformentry',
            name='auto_forward_status',
            field=models.CharField(choices=[('pending', 'Not yet forwarded, but queued to do so.'), ('success', 'Forwarded without error.'), ('error', 'ERROR! see detail field.')], default='pending', max_length=10),
        ),
        migrations.AddField(
            model_name='contactformentry',
            name='auto_forward_status_detail',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='contactformentry',
            name='message',
            field=models.TextField(max_length=1000),
        ),
    ]
