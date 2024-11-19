from services.posts import PostService
from repository.posts import PostRepository


def get_post_service() -> PostService:
    return PostService(PostRepository())