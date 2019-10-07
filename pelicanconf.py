#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

RELATIVE_URLS = False
AUTHOR = 'Jack McKew'
SITENAME = "Jack McKew's Blog"
SITETITLE = SITENAME
SITESUBTITLE = 'Python enthusiast, electrical engineer and tinkerer'
SITEURL = 'https://nifty-engelbart-ce3324.netlify.com/'
SITELOGO = 'img/jm-photo'

THEME = 'Flex'
STATIC_PATHS = ['img', 'static']
FAVICON = 'img/favicon.ico'
CUSTOM_CSS = 'static/custom.css'

USE_FOLDER_AS_CATEGORY = False
MAIN_MENU = True
HOME_HIDE_TAGS = False

MENUITEMS = (('Archives', '/archives.html'),
             ('Categories', '/categories.html'),
             ('Tags', '/tags.html'),
             ('Sitemap', '/sitemap.xml'),)

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.6,
        'indexes': 0.6,
        'pages': 0.5,
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly',
    }
}


DELETE_OUTPUT_DIRECTORY = False
STATIC_PATHS = ['img', 'static', 'pdf']
PATH = 'content'

TIMEZONE = 'Australia/Sydney'

DEFAULT_LANG = 'English'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ('All Posts', 'https://jmckew.com/all-posts/'),
    ('CV/Professional', 'https://jmckew.com/cv-professional/'),
    ('Contact', 'https://jmckew.com/contact/')
)
# LINKS = (('Pelican', 'http://getpelican.com/'),
#          ('Python.org', 'http://python.org/'),
#          ('Jinja2', 'http://jinja.pocoo.org/'),
#          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True