var Store = require('flux/utils').Store;
var ApiConstants = require('../constants/api_constants');
var AppDispatcher = require('../dispatcher');

var _reviews = {};
var _topReview ={}

var ReviewsStore = new Store(AppDispatcher);

ReviewsStore.all = function () {
  var reviews = Object.keys(_reviews).map( function(key) {
    return _reviews[key];
  });
  return reviews.reverse();
};

ReviewsStore.topReview = function () {
  return _topReview;
};

ReviewsStore.find = function (id) {
  return _reviews[id];
};

ReviewsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ApiConstants.ALL_REVIEWS:
      ReviewsStore.resetReviews(payload.reviews);
      ReviewsStore.__emitChange();
      break;
    case ApiConstants.SINGLE_REVIEW:
      ReviewsStore.resetReview(payload.review);
      ReviewsStore.__emitChange();
      break;
    case ApiConstants.TOP_REVIEW:
      ReviewsStore.resetTopReview(payload.review);
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

ReviewsStore.resetReview = function (review) {
  _reviews[review.id] = review;
};

ReviewsStore.resetTopReview = function (review) {
  _topReview = review;
};

module.exports = ReviewsStore;
