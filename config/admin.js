module.exports = ({ env }) => ({
  apiToken: { salt: env('API_TOKEN_SALT') },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac9e8c01e38f7b8e5103b075c4c48db1'),
  },
});
