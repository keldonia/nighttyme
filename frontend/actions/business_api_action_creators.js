var ApiUtil = require('../util/api_util');

var BusinessActions = {
  fetchAllBusinesses: function () {
    ApiUtil.fetchAllBusinesses();
  },
  fetchAbrigedBusinesses: function () {
    ApiUtil.fetchAbrigedBusinesses();
  }

};

module.exports = BusinessActions;
