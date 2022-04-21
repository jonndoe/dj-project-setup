from django.views.generic.base import TemplateView


class CountReflexView(TemplateView):
    template_name = "pages/count_reflex.html"

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context["count"] = 0
        return context
