"""
ASGI config for mainproject project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""


import os

from django.conf.urls import url
from django.core.asgi import get_asgi_application

# Fetch Django ASGI application early to ensure AppRegistry is populated
# before importing consumers and AuthMiddlewareStack that may import ORM
# models.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mainproject.settings")
django_asgi_app = get_asgi_application()

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from sockpuppet.consumer import SockpuppetConsumerAsgi

application = ProtocolTypeRouter(
    {
        # Django's ASGI application to handle traditional HTTP requests
        "http": django_asgi_app,
        # WebSocket handler
        "websocket": AuthMiddlewareStack(
            URLRouter(
                [
                    url(r"^ws/sockpuppet-sync$", SockpuppetConsumerAsgi.as_asgi()),
                    # path('ws/sockpuppet-sync', SockpuppetConsumerAsgi.as_asgi()),
                ]
            )
        ),
    }
)


"""
import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mainproject.settings")

application = get_asgi_application()
"""
