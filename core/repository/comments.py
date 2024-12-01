from mingle.models import Comment,Post

class CommentRepository:
    def __init__(self):
        self.model = Comment

    def create(self,user_id: int,post_id: int,content: str) -> Comment:
        post = Post.objects.get(pk=post_id)
        user = Post.objects.get(pk=user_id)
        self.model.objects.create(
            post=post,
            user=user,
            content=content
        )
