FROM node-dev-container-base

WORKDIR /opt/azurite

COPY package.json /opt/azurite/
RUN npm install

VOLUME /azurite

# Blob Storage Emulator
EXPOSE 10000
# Azure Queue Storage Emulator
EXPOSE 10001

CMD ["npm", "start"]