FROM mhart/alpine-node:6.10.0
MAINTAINER Ross Hendry "rhendry@googlemail.com"

ARG env=production
ENV NODE_ENV ${env}
RUN mkdir -p /opt/apps/ace-bootstrap-api
ADD package.json /opt/apps/ace-bootstrap-api/
WORKDIR /opt/apps/ace-bootstrap-api
RUN npm install && npm cache clean
ADD . /opt/apps/ace-bootstrap-api/

EXPOSE 8101
CMD ["npm", "start"]
