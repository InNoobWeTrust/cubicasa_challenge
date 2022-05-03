from requests import post

from .common import APIS, HEADERS, TOKEN_API_KEY

TOKEN_ATTR_KEY = 'guest_token'

def get_token() -> str:
    return post(APIS[TOKEN_API_KEY][0], headers=HEADERS).json()[TOKEN_ATTR_KEY]
