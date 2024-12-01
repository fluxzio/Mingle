from mingle.models import Post


class PostRepository:
    def __init__(self):
        self.model = Post
        
    def get_popular_posts(self) -> Post:
        return self.model.objects.all()

