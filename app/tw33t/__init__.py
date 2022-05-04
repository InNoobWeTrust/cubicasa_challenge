
import logging
import os
from flask import Flask
from flask_talisman import Talisman
import sys

app = Flask(__name__)
application = app

# SSLify if hosted by Heroku
if 'DYNO' in os.environ:
    Talisman(app, content_security_policy=None)

# Setup the app with the config.py file
app.config.from_object('config')

app.logger.addHandler(logging.FileHandler('debug.log'))

from tw33t.views import main
