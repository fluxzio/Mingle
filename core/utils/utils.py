def user_directory_path(instance, filename):
    return f'users/{instance.username}/{filename}'


def post_media_directory_path(instance, filename):
    print(instance)
    return f'content/{filename}'
