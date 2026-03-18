from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Course
import logging
 

logger = logging.getLogger('django')
 
@api_view(['GET'])
def myhello_api(request):
    my_name = request.GET.get('name', None)
   

    logger.debug(" ************** myhello_api: " + str(my_name))
   
    if my_name:
        return Response({"data": "Hello" + my_name}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
  
@api_view(['GET'])
def courselist(request):
    courses = Course.objects.all().values()
    return JsonResponse(list(courses), safe=False)

 
@api_view(['GET'])
def addcourse(request):
    dept = request.GET.get('Department', '')
    title = request.GET.get('CourseTitle', '')
    teacher = request.GET.get('Instructor', '')

    if dept and title and teacher:
        new_course = Course(
            Department=dept, 
            CourseTitle=title, 
            Instructor=teacher
        )
        new_course.save()
        return Response({"data": title + " 成功加入!"}, status=status.HTTP_200_OK)
    else:
        return Response({"res": "資料不足"}, status=status.HTTP_400_BAD_REQUEST)

