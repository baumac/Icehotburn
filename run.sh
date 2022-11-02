#!/bin/bash

# exit if any command fails
set -e


_main() {
    if [[ $# -eq 0 || "$1" == "help" ]]; then
        # No args provided, print help
        _displayUsage
        exit
    elif [[ "$(type -t $1)" == "function" ]]; then
        # First arg is a function in this script
        # execute command as provided
        "$@"
    else
        # First arg is not a function in this script
        # print help
        _displayUsage
    fi
}

_displayUsage() {
    echo -e "
This script serves to make running development commands easier.

Commands:

help (or invalid args)
    Prints these instructions

frontendApp
    Runs the frontend for icehotburn.dev inside of a docker container with all dependencies.

frontendBuild
    Builds the frontend for icehotburn.dev application's docker container.

frontendUnitTests
    Runs the frontend for icehotburn.dev unit tests inside of the application's docker container.

frontendE2eTests
    Runs the frontend for icehotburn.dev e2e tests inside of the application's docker container.   
    "
}


frontendApp() {
    echo "Running the frontend for icehotburn.dev."
    docker-compose -f docker-compose-dev.yml up 
}

frontendBuild() {
    echo "Building the frontend for icehotburn.dev."
    docker-compose -f docker-compose-dev.yml build
}

frontendUnitTests() {
    echo "Running the frontend for icehotburn.dev unit tests inside the docker container"
    docker-compose -f docker-compose-dev.yml run --no-deps --rm app npm test
}

frontendE2eTests() {
    echo "Running the frontend for icehotburn.dev e2e tests inside the docker container"
    docker-compose -f docker-compose-dev.yml run app npm run test:e2e
}

_main "$@"
