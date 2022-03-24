from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from main.views import UsersModelViewSet
from project.views import ProjectsModelViewSet, TODOModelViewSet

router = DefaultRouter()
router.register('users', UsersModelViewSet, basename="users")
router.register('projects', ProjectsModelViewSet, basename="projects")
router.register('todos', TODOModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]
