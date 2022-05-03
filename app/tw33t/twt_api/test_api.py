from tw33t.twt_api.token import get_token
from tw33t.twt_api.tweet import get_tweets


def test_get_token():
    token = get_token()
    assert len(token) == 19


def test_get_tweets():
    kols = [
        "BarackObama",
        "justinbieber",
        "katyperry",
    ]
    for screen_name in kols:
        tweets = get_tweets(screen_name)
        assert len(tweets) == 3

