from rest_framework.request import HttpRequest
from di import DIContainer


class InjectedHttpRequest(HttpRequest):
    container: DIContainer
    

__all__ = ['InjectedHttpRequest']
