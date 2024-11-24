from users.models import User

class UserService:
    def __init__(self):
        self.model = User
        

def get_user_service() -> UserService:
    return UserService()
