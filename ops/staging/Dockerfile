FROM node:11.1.0-alpine

RUN apk --update add tzdata nano bash git openssh python make gcc g++ linux-headers paxctl gnupg

# Set the correct timezone
RUN cp /usr/share/zoneinfo/Europe/Berlin /etc/localtime && \
   echo "Europe/Berlin" > /etc/timezone && \
   apk del tzdata

# For layer caching
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]