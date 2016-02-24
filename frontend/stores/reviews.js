var Store = require('flux/utils').Store;
var ApiConstants = require('../constants/api_constants');
var AppDispatcher = require('../dispatcher');

var _reviews = {};

var ReviewsStore = new Store(AppDispatcher);

ReviewsStore.all = function () {
  return Object.keys(_reviews).map( function(key) {
    return _reviews(key);
  });
};

ReviewsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ApiConstants.ALL_REVIEWS:
      ReviewsStore.resetReviews(payload.reviews);
      ReviewsStore.__emitChange();
      break;
    default:

  }
};

ReviewsStore.resetReviews = function (reviews) {
  _reviews = {};
  reviews.forEach(function(review) {
    _reviews[review.id] = review;
  });
};

module.exports = ReviewsStore;
