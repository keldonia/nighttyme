var ApiUtil = require('../util/api_util');

var BusinessActions = {
  fetchAllBusinesses: function () {
    ApiUtil.fetchAllBusinesses();
  },
  fetchAbrigedBusinesses: function () {
    ApiUtil.fetchAbrigedBusinesses();
  },
  fetchSingleBusiness: function (id) {
    ApiUtil.fetchSingleBusiness(id);
  },
  fetchBusinesses: function (obj) {
    ApiUtil.fetchBusinesses(obj);
  }

};

module.exports = BusinessActions;
