var AppDispatcher = require('../dispatcher');
var ApiConstants = require('../constants/api_constants');;

var ApiActions = {
  recieveAllBusinesses: function(businesses) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.ALL_BUSINESSES,
      businesses: businesses
    });
  },
  recieveAllBusinessErrors: function(errors) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.ALL_BUSINESS_ERRORS,
      errors: errors
    });
  },
  recieveAllReviews: function(reviews) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.ALL_REVIEWS,
      reviews: reviews
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
