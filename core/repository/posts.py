from mingle.models import Post,Like
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from users.models import User

class PostRepository:
    def __init__(self):
        self.model = Post
        
    def get_popular_posts(self) -> Post:
        return self.model.objects.all()

    def like_post(self,post_id,like_type: str,user: "User") -> Like:
        post = Post.objects.get(pk=post_id)
        return Like.objects.create(
            post=post,
            user=user,
            like_type=like_type
        )
