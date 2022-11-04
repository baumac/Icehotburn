# TODO write a post explaining the project and tech stack

## Running the repo

1. Create a .env file by copying the .env.default file
2. Set the env vars in the .env file
3. Run `docker-compose up` to start the app and tunnel (the tunnel is configured to route traffic from port 80 of the icehotburn.dev container to https://icehotburn.dev)

## Networking Setup

1. Domain is registered with google domains with cloudflare name servers (this also provides automatic tls)
2. Website is exposed from my local server via Cloudflare tunnels

## Add a section for adding a new project

1. Create a new directory
2. Create a workflow for the project
3. Add dependabot
4. Add the new service to the docker compose files
5. If needed update the caddyfile to route traffic to the new service
