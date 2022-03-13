from django.urls import path

from .views.views import AboutPageView, HomePageView

# from .views.count_reflex import CountReflexView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("about/", AboutPageView.as_view(), name="about"),
    # path("count/", CountReflexView.as_view(), name="count"),
]
