from flask import g, Markup
from flask import (Blueprint, render_template, make_response, redirect, url_for, abort, request, Response)
from tw33t import app
from functools import wraps
from flask import jsonify
from twitter import *
import json, requests, datetime, sys, os, uuid, re, time

from tw33t.twt_api.tweet import get_tweets

@app.route("/", methods=['GET'])
def index():
    return render_template('index.html')


'''

Introduce a "Get tweets" route for the client and log relevant info from each search into a file.

'''
@app.route('/api/<screen_name>/tweets/', methods=['GET'])
@app.route('/api/<screen_name>/tweets/<count>', methods=['GET'])
def tweet_api(screen_name: str, count: int = 3):
    response = jsonify(get_tweets(screen_name, count))
    response.status_code = 200
    return response
