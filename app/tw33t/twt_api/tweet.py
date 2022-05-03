from typing import List

from requests import get

from .token import get_token

from .common import APIS, HEADERS, TIMELINE_API_KEY


def get_tweets(screen_name: str, count: int = 3) -> List:
    param_values = (screen_name, count, get_token())
    params = dict(zip(APIS[TIMELINE_API_KEY][1], param_values))
    return get(APIS[TIMELINE_API_KEY][0], params=params, headers=HEADERS).json()
