from faker import Faker
from rest_framework.test import APITestCase
from django.urls import reverse
from .models import User

class UserAPITests(APITestCase):
    def setUp(self):
        User.objects.create_user(
            username='kurtrassl',
            password='rasul1234'
        )
        
        return super().setUp()
    def test_user_creation(self,):
        faker = Faker()
        data = {
            "username": faker.user_name(),
            "password": faker.password(),
            "photo": '',
            "first_name": faker.first_name(),
            "last_name": faker.last_name(),
            "email": faker.email()
        }
        response = self.client.post(reverse('register'), data=data)
        self.assertEqual(response.status_code, 201)
    
    def test_user_token(self,):
        data = {
            'username': 'kurtrassl',
            'password': 'rasul1234'
        }
        response = self.client.post(reverse('token'),data=data)
        self.assertEqual(response.status_code,200)
        

    def test_user_token_refresh(self):
        login_data = {
            'username': 'kurtrassl',
            'password': 'rasul1234'
        }
        login_response = self.client.post(reverse('token'), data=login_data)
        self.assertEqual(login_response.status_code, 200)
        refresh_token = login_response.data.get('refresh')
        self.assertIsNotNone(
            refresh_token, "Необходимо предоставить токен обновления")
        refresh_data = {
            'refresh': refresh_token
        }
        refresh_response = self.client.post(
            reverse('refresh'), data=refresh_data)
        self.assertEqual(refresh_response.status_code, 200)
        new_access_token = refresh_response.data.get('access')
        self.assertIsNotNone(new_access_token, "Необходимо предоставить токен авторизации")
