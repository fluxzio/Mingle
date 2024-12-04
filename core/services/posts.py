from rest_framework.request import HttpRequest
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer, Serializer
from dto.like import LikeDTO
from repository.posts import PostRepository
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from utils.types import InjectedHttpRequest


class PostService:
    def __init__(self, repositroy: PostRepository):
        self.repository = repositroy

    def get_popular_posts(
            self,
            serializer_class: ModelSerializer | Serializer,
            request: HttpRequest
    ) -> Response:
        posts = self.repository.get_popular_posts()
        serialized = serializer_class(
            posts, many=True, context={"request": request})

        return Response(serialized.data)



def get_post_service() -> PostService:
    return PostService(PostRepository())
