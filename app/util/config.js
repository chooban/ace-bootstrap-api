const fs = require('fs');

const config = {
  domain: 'acemyorder.eu.auth0.com',
  clientId: ''
};

if (process.env.SECRET) {
  config.clientId = process.env.CLIENT_ID;
} else {
  config.clientId = fs.readFileSync('/run/secrets/auth0_client_id', 'utf8').trim();
}

module.exports = config;
