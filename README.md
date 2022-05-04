# CubiCasa challenge

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/InNoobWeTrust/cubicasa_challenge)

## Requirements for the app

### Front-end
- User can input a Twitter handle and get three latest tweets from that user
- Pay attention to the UI and UX

### Back-end
- Serve the client with the app
- Provide a "Get tweets" route
- Log relevant information about each search to a file

### UI choices
- Use official design from Twitter from the embedded code extracted from [https://publish.twitter.com](https://publish.twitter.com)
- For Firefox, should disable tracking protection in order to load twitter widget scripts

## Demo

The demo is live on Heroku, at least until I run out of free dynos

[Click here to go to demo page](https://innoobwetrust-x-cubicasa.herokuapp.com/)

## How to run

### With poetry

Install dependencies and start task runner

```shell
poetry install
poetry run poe serve
```

### With docker

Build the docker image and start server:

```shell
docker build -t cubicasa-developer-test .
docker-compose up web
```

