# Generated by Django 3.2.9 on 2022-07-15 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('careerguide', '0004_alter_questionnaire_categories'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionnaire',
            name='categories',
            field=models.JSONField(default=[], verbose_name='Categories'),
        ),
    ]
