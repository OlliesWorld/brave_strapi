module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  // port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'cab6081a8aaab695a81c10a4bf46b22b'),
    },
  },
});
