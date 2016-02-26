var AppDispatcher = require('../dispatcher');
var ApiConstants = require('../constants/api_constants');

var BusinessApiDispatches = {
  recieveAllBusinesses: function(businesses) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.ALL_BUSINESSES,
      businesses: businesses
    });
  },
  recieveAbridgedBusinesses: function(businesses) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.ABRIDGED_BUSINESSES,
      businesses: businesses
    });
  },
};

module.exports = BusinessApiDispatches;
