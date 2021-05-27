FROM node:15-alpine

RUN yarn global add pm2
RUN apk add --no-cache git
RUN mkdir -p /opt/services
WORKDIR /opt/services
RUN git clone https://github.com/wowswap-io/liquidation-bot.git
WORKDIR /opt/services/liquidation-bot
RUN cd /opt/services/liquidation-bot; yarn; pm2 install typescript; yarn add --dev tsconfig-paths
COPY ecosystem.config.js ecosystem.config.js
CMD ["pm2-runtime", "ecosystem.config.js" ]
