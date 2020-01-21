FROM node:12

COPY . /opt/app

#sets the entry point for following instructions
WORKDIR /opt/app

#RUN runs one time the container is generated
RUN yarn

#CMD runs everytime the container is started
CMD yarn watch
