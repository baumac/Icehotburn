![Icehotburn.dev CICD Workflow](https://github.com/Icehotburn/Icehotburn/actions/workflows/icehotburn.dev-cicd.yml/badge.svg)
![Icehotburn.dev Healthcheck Workflow](https://github.com/Icehotburn/Icehotburn/actions/workflows/icehotburn.dev-healthcheck.yml/badge.svg)

# TODO write a post explaining the project and tech stack

## Tech Stack

1. Healthcheck via github actions
2. CICD workflow via github actions
3. Website developed using vue3
4. Self hosted on Raspberry Pi 3b
5. Uses Cloudflare tunnels to expose the service (my ISP uses a CGNAT so I don't have a static IP :()
6. Cadvisor for Docker host monitoring
7. Watchtower to perform rolling deploys when a new version of the app is released

### Future things I want to do:

1. Get a static IP and remove the dependency on cloudflare
2. Create my own custom healthcheck action
3. More advance monitoring with promethus https://thesmarthomejourney.com/2022/08/01/fixing-cadvisor-cpu/

## Running the repo

1. Create a .env file by copying the .env.default file
2. Set the env vars in the .env file
3. Run `docker-compose -f docker-compose-prod.yml up` to start the app and tunnel (the tunnel is configured to route traffic from port 80 of the icehotburn.dev container to https://icehotburn.dev)

## Networking Setup

1. Domain is registered with google domains with cloudflare name servers (this also provides automatic tls)
2. Website is exposed from my local server via Cloudflare tunnels

## Monitoring Project

1. Give credit to the dockerprom project for the monitoring directory https://github.com/stefanprodan/dockprom
2. One day add dependabot for the compose file https://github.com/dependabot/dependabot-core/issues/390

## Add a section for adding a new project

1. Create a new directory
2. In the .github directory
   - Create a workflow for the project
   - Add dependabot woprkflow
3. Add the new service to the docker compose files
