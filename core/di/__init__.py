from .container import DIContainer
from services import *

container = DIContainer()


container.register("post-service", get_post_service)
container.register("email-service", get_email_service)
container.register("user-service",get_user_service)
    
    
__all__ = ["container", "DIContainer"]
