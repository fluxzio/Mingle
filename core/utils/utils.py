def user_directory_path(instance, filename):
    # Функция возвращает путь в формате 'users/<username>/<filename>'
    return f'users/{instance.username}/{filename}'
