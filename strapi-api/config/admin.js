module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'acc93bce44bc47ab09be822860f56564'),
  },
});
