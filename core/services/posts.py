from typing import TYPE_CHECKING,Optional
from rest_framework.request import HttpRequest
from rest_framework.response import Response


if TYPE_CHECKING:
    from repository.posts import PostRepository
    from mingle.models import Post

class PostService:
    def __init__(self,repositroy: "PostRepository"):
        self.repository = repositroy
    
    def get_popular_posts(self, request: HttpRequest = None) -> "Post":
        """ TODO: Finalize, add serializers """
        return self.repository.get_popular_posts()
