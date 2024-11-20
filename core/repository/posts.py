from mingle.models import Post


class PostRepository:
    def __init__(self):
        self.model = Post
        
    def get_popular_posts(self) -> Post:
        """ TODO:Add filter for most liked posts """
        return self.model.objects.all()

    