#Option 1: build project and run with Node
FROM node:9

# make a working directory
RUN mkdir -p /usr/local/app

# set the working directory
WORKDIR /usr/local/app

# copy dependency definitions
COPY package.json /usr/local/app

# install dependencies
RUN npm install

# copy over code
COPY . /usr/local/app

# expose port 4200
EXPOSE 4200

# set environment variables
ENV NODE_ENV production

#Start the server
CMD ["npm", "start", "--host 0.0.0.0", "--disable-host-check true"]
