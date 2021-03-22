#-------------------------------------------------------------------------------------------------------------
# Licensed under the MIT License. See https://github.com/nodejs/docker-node/blob/main/LICENSE for license information.
#-------------------------------------------------------------------------------------------------------------

# Find the Dockerfile at the following URLs:
# https://hub.docker.com/_/node/?tab=tags&page=1&ordering=last_updated

ARG VERSION=latest
FROM node:${VERSION}
RUN apt-key adv --refresh-keys --keyserver keyserver.ubuntu.com

# Configure apt and install packages
RUN \
    apt update \
    && apt -y install --no-install-recommends apt-utils dialog 2>&1 \
    # Install git & other needed tools
    && apt -y install \
        sudo \
        curl \
        git \
        iproute2 \
        procps \
        curl \
        apt-transport-https \
        gnupg2 \
        lsb-release \
        unzip