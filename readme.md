# Tw33t

Nice to meet you! We use this test at CubiCasa to evaluate all full-stack developer applicants before interviews. We hope you'll have fun with this assignment.

Your task is to build a simple Flask + Vue app that communicates with Twitter API and logs info about each search.

## How to complete the task

1. Install docker if needed
2. Clone this repo to your local machine
3. Get Twitter API keys
4. Publish your code under your own Github account
5. Send us an email that you've completed the task at openpositions@cubicasa.com and give a link to your repo

## Requirements for the app

### Front-end
- User can input a Twitter handle and get three latest tweets from that user
- Pay attention to the UI and UX

### Back-end
- Serve the client with the app
- Provide a "Get tweets" route
- Log relevant information about each search to a file


## How to run

Build the docker image and start server:

```
docker build -t cubicasa-developer-test .
docker-compose up web
```

