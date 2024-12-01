from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from django.urls import reverse
from .models import *
User = get_user_model()


class MingleAPITests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='kurtrassl',
            password='rasul1234'
        )
        self.post = Post.objects.create(
            user=self.user,
            content='Тестовый контент',
        )
        self.comment = Comment.objects.create(
            user=self.user,
            post=self.post,
            content = "Тестовый контент"
        )
        response = self.client.post(reverse('token'), data={
            "username": 'kurtrassl',
            "password": 'rasul1234'
        })
        self.client.credentials(
            HTTP_AUTHORIZATION=f'Bearer {response.data.get('access')}'
        )
        return super().setUp()

    def test_post_list(self,):
        response = self.client.get(reverse('list_posts'))
        self.assertEqual(response.status_code, 200)
        
    def test_comments_list(self,):
        response = self.client.get(reverse('comments', kwargs={
            "post_id": self.post.pk
        }))
        self.assertEqual(response.status_code,200)
        