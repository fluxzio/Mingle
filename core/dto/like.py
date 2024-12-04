from dataclasses import dataclass
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from users.models import User
    
@dataclass
class LikeDTO:
    post: int
    user: "User"
    like_type: str
    created_at: str

    