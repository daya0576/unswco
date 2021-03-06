from django import template
from rango.models import Subject
from django.db.models import Q

register = template.Library()


# @register.inclusion_tag('rango/parts/cats.html')
# def get_category_list(cat=None):
#     cats = Category.objects.order_by('-likes')[0:6]
#     return {'cats': cats,  'act_cat': cat}


@register.inclusion_tag('rango/sidebar.html')
def get_subject_list(subject=None):
    subs = Subject.objects.filter(~Q(slug="both"))
    return {'subs': subs,  'act_sub': subject}
