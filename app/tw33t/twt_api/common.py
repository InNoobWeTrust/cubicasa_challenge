from typing import Dict, Tuple

HEADERS: Dict[str, str] = {
    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA"
}

TOKEN_API_KEY = "token"
TIMELINE_API_KEY = "timeline"
APIS: Dict[str, Tuple] = {
    TOKEN_API_KEY: ("https://api.twitter.com/1.1/guest/activate.json",),
    TIMELINE_API_KEY: (
        "https://api.twitter.com/1.1/statuses/user_timeline.json",
        (
            "x-guest-token",
            "screen_name",
            # "count",
            "exclude_replies",
        ),
    ),
}
