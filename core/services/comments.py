from rest_framework.request import HttpRequest
from rest_framework.response import Response
from rest_framework.serializers import ModelSerializer, Serializer
from repository.comments import CommentRepository


class CommentService:
    def __init__(self, repositroy: CommentRepository):
        self.repository = repositroy


def get_post_service() -> CommentService:
    return CommentService(CommentRepository())
