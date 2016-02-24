var Store = require('flux/utils').Store;
var ApiConstants = require('../constants/api_constants');
var AppDispatcher = require('../dispatcher');

var _businesses = {};

var BusinessStore = new Store(AppDispatcher);

BusinessStore.all = function () {
  return Object.keys(_businesses).map( function(key) {
    return _businesses[key];
  });
};

BusinessStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ApiConstants.ALL_BUSINESSES:
      BusinessStore.resetBusiness(payload.businesses);
      BusinessStore.__emitChange();
      break;
    default:

  }
};

BusinessStore.resetBusiness = function (businesses) {
  _businesses = {};
  businesses.forEach( function(business) {
    _businesses[business.id] = business;
  });
};

module.exports = BusinessStore;
