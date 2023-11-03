from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.contrib.auth.models import User

class Article(models.Model):
  title = models.CharField(max_length=150)
  content_main = models.TextField()  
  content_section_1 = models.TextField(null=True, blank=True)  
  content_section_2 = models.TextField(null=True, blank=True) 
  likes = models.IntegerField(default=0)
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  created_at = models.DateTimeField(default=timezone.now)

  def __str__(self):
    return self.title

  def get_absolute_url(self):
    return reverse('article-detail', kwargs={'article_id': self.id})