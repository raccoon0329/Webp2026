from django.db import models

# Create your models here.

class Course(models.Model):
    # 開課單位
    Department = models.CharField(max_length=100)
    # 課程名稱
    CourseTitle = models.CharField(max_length=100)
    # 授課老師
    Instructor = models.CharField(max_length=100)

    def __str__(self):
        return self.CourseTitle