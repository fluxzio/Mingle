from django.core.mail import send_mail
from django.conf import settings

class EmailService:
    def send_verification_code(self,recepient: str,code: str):
        send_mail(
            'Mingle',
            message=f"""
                Here is your code for verify: {code}.Code will be active for next 60 seconds.
            """,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[recepient,]
        )
        
def get_email_service() -> EmailService:
    return EmailService()