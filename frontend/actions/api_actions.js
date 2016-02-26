var AppDispatcher = require('../dispatcher');
var ApiConstants = require('../constants/api_constants');

var ApiActions = {
  recieveAllBusinessErrors: function(errors) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.ALL_BUSINESS_ERRORS,
      errors: errors
    });
  },
  recieveAllReviewErrors: function(errors) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.ALL_REVIEW_ERRORS,
      errors: errors
    });
  }
};

module.exports = ApiActions;
