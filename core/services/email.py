from django.conf import settings

class EmailService:
    def __init__(self):
        self.api_key = settings.API_KEY
        
    def send_verification_code(self, recipient: str, code: str):
        ...

def get_email_service() -> EmailService:
    return EmailService()
