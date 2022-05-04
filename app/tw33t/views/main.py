import datetime
import json
import logging
import os
import re
import sys
import time
import uuid
from functools import wraps

import requests
from flask import (
    Blueprint,
    Markup,
    Response,
    abort,
    g,
    jsonify,
    make_response,
    redirect,
    render_template,
    request,
    url_for,
)
from tw33t import app
from tw33t.twt_api.tweet import get_tweets
from twitter import *


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


"""

Introduce a "Get tweets" route for the client and log relevant info from each search into a file.

"""


@app.route("/api/<screen_name>/tweets/", methods=["GET"])
@app.route("/api/<screen_name>/tweets/<count>", methods=["GET"])
def tweet_api(screen_name: str, count: int = 3):
    app.logger.info(f"Finding tweets from user {screen_name}")
    tweets = []
    try:
        tweets = get_tweets(screen_name, count)
    except:
        pass

    app.logger.debug(f"Tweets found: {tweets}")
    response = jsonify(tweets)
    response.status_code = 200
    return response
