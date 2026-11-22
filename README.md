# Football Recovery and Film Tracker

## Project Description

This application helps football players track their daily recovery and film study in one place. Players can record how they feel, track soreness, and save notes while reviewing football film.

## Main Features

- Daily readiness check-ins
- Soreness level tracking
- Recovery activity tracking
- Recovery dashboard
- Football film review notes
- Saves information in the browser

## Technology Stack

- HTML
- CSS
- JavaScript
- Browser localStorage
- Docker
- Nginx
- Git and GitHub

## How to Run Locally

1. Clone the GitHub repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

## How to Run with Docker

Build the Docker image:

```bash
docker build -t football-recovery-tracker .
```

Run the container:

```bash
docker run -d -p 8080:80 --name football-recovery-tracker-container football-recovery-tracker
```

Open `http://localhost:8080` in your browser.

## AI Usage

I used ChatGPT to help understand coding concepts, organize project features, troubleshoot problems, and work through Docker and Git commands. I reviewed and tested the application to make sure it worked.

## Future Improvements

Future improvements could include workout logging, AI-powered film summaries, and cloud data storage.