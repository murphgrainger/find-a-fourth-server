require('dotenv').config();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    // This is the identifier we set when we created the API
    audience: `${process.env.AUTH0_API_IDENTIFIER}`,
    issuer: process.env.AUTH0_DOMAIN,
    algorithms: ['RS256']
});

module.exports = authCheck;
