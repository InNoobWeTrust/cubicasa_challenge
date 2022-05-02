from flask import g, Markup
from flask import (Blueprint, render_template, make_response, redirect, url_for, abort, request, Response)
from tw33t import app
from functools import wraps
from flask import jsonify
from twitter import *
import json, requests, datetime, sys, os, uuid, re, time

@app.route("/", methods=['GET'])
def index():
    return render_template('index.html')


'''

Introduce a "Get tweets" route for the client and log relevant info from each search into a file.

'''