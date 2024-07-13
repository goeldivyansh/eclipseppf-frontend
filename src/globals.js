globals = {
  URLS: {
    AUTH: {
      REGISTER_DEALER: '/auth/signup',
      LOGIN_DEALER: '/auth/login'
    },
    USER: {
      UPDATE_USER: 'user/<dealer_username>/updateUser',
      GET_USER: 'user/<dealer_username>/getUser'
    },
    CARS: {
      GET_DEALER_CAR: '/ppf-wrapped/getDealerCars/<dealer_username>',
      GET_ALL_CARS: '/ppf-wrapped/getAllCars'
    }
  },
  ADMIN_USERNAME: 'ADMIN',
  
  DATABASE_NAME: 'MainDatabase',
  DEALER_COLLECTION: 'DealerInfo',
  PPF_WARRANTY_COLLECTION: 'PpfWarrantyCollection'
}
  
module.exports = globals;