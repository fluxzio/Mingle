from typing import TYPE_CHECKING, Optional
from rest_framework.request import HttpRequest
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer, Serializer

if TYPE_CHECKING:
    from repository.posts import PostRepository


class PostService:
    def __init__(self, repositroy: "PostRepository"):
        self.repository = repositroy

    def get_popular_posts(
            self,
            serializer_class: ModelSerializer | Serializer,
            request: Optional[HttpRequest] = None
    ) -> Response:
        posts = self.repository.get_popular_posts()
        serialized = serializer_class(posts, many=True)
        return Response(serialized.data)
