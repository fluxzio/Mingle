from django.contrib import admin
from .models import *


@admin.register(User)
class UserModelAdmin(admin.ModelAdmin):
    pass
