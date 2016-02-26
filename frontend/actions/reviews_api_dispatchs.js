var AppDispatcher = require('../dispatcher');
var ApiConstants = require('../constants/api_constants');

var ReviewApiDispatchs = {
  recieveAllReviews: function(reviews) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.ALL_REVIEWS,
      reviews: reviews
    });
  },
  recieveSingleReview: function(review) {
    AppDispatcher.dispatch({
      actionType: ApiConstants.SINGLE_REVIEW,
      review: review
    });
  },
};

module.exports = ReviewApiDispatchs;
