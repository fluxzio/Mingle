from di import container

class ServiceMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        request.container = container
        response = self.get_response(request)
        return response
