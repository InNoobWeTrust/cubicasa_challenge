from typing import List
from flask import json

from requests import get

from .token import get_token

from .common import APIS, HEADERS, TIMELINE_API_KEY


def get_tweets(screen_name: str, count: int = 3) -> List:
    param_values = (get_token(), screen_name, True,)
    params = dict(zip(APIS[TIMELINE_API_KEY][1], param_values))
    lst = get(APIS[TIMELINE_API_KEY][0], params=params, headers=HEADERS).json()
    return lst[:count]

