const fs = require('fs');

const config = {
  domain: '',
  clientId: ''
};

if (process.env.SECRET) {
  config.clientId = process.env.CLIENT_ID;
  config.domain = process.env.DOMAIN;
} else {
  config.clientId = fs.readFileSync('/run/secrets/auth0_client_id', 'utf8').trim();
  config.domain = fs.readFileSync('/run/secrets/auth0_domain', 'utf8').trim();
}

module.exports = config;
