/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

module.exports = {
  async authenticateToken(request, response, next) {
    const authHeader = request.headers.authorization;
    const [scheme, token] = authHeader && authHeader.split(' ');

    if (token === null)
      return response.status(401).json({ error: 'No token provided' });

    if (!/^Bearer$/i.test(scheme))
      return response.status(401).json({ error: 'Token badformatted' });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
      if (err)
        return response
          .status(403)
          .json({ error: 'Invalid authorization token' });

      request.session = data;

      next();
    });
  },
  async checksUserIsAdmin(request, response, next) {
    //console.log(request.session.user);
    if (request.session.user.type !== 'administrator') {
      response.status(403).json({ error: "access denied. The user is not an administrator" });
    }
    else {
      next();
    }
  },
};
